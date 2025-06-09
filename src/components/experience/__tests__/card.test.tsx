import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { getByTextContent } from '../../../utils/test-utils';
import Card from '../card';
import { ExperienceItem } from '../experience-items';

const mockExperienceItem = (
  overrides?: Partial<ExperienceItem>,
): ExperienceItem => ({
  company: { name: faker.company.name() },
  logo: { path: faker.system.commonFileName('png') },
  roles: faker.helpers.multiple<ExperienceItem['roles'][number]>(() => ({
    title: faker.person.jobTitle(),
    startDate: faker.date.past(),
    endDate: faker.date.recent(),
  })),
  dotPoints: faker.helpers.multiple(faker.company.buzzPhrase),
  skills: faker.helpers.multiple(faker.company.buzzNoun),
  ...overrides,
});

describe('dates', () => {
  it('shows the total timeframe based on all roles', () => {
    const experienceItem = mockExperienceItem({
      roles: [
        {
          title: 'Omega Software Engineer',
          endDate: new Date(2099, 11),
          startDate: new Date(2024, 6),
        },
        {
          title: 'Experienced Software Engineer',
          endDate: new Date(2024, 6),
          startDate: new Date(2022, 2),
        },
        {
          title: 'Casual Software Engineer',
          endDate: new Date(2022, 2),
          startDate: new Date(2020, 2),
        },
      ],
    });

    render(<Card item={experienceItem} />);
    expect(screen.getByText(/Mar 2020 - Dec 2099/i)).toBeInTheDocument();
  });

  it('shows the earliest start date until present when a role is ongoing', () => {
    const experienceItem = mockExperienceItem({
      roles: [
        {
          title: 'Omega Software Engineer',
          startDate: new Date(2024, 6),
        },
        {
          title: 'Experienced Software Engineer',
          endDate: new Date(2024, 6),
          startDate: new Date(2022, 2),
        },
        {
          title: 'Casual Software Engineer',
          endDate: new Date(2022, 2),
          startDate: new Date(2020, 2),
        },
      ],
    });

    render(<Card item={experienceItem} />);
    expect(screen.getByText(/Mar 2020 - Present/i)).toBeInTheDocument();
  });

  it('shows the timeframe for each role', () => {
    const experienceItem = mockExperienceItem({
      roles: [
        {
          title: 'Experienced Software Engineer',
          endDate: new Date(2024, 6),
          startDate: new Date(2022, 2),
        },
        {
          title: 'Casual Software Engineer',
          endDate: new Date(2022, 2),
          startDate: new Date(2020, 2),
        },
      ],
    });

    render(<Card item={experienceItem} />);

    expect(
      getByTextContent(
        '> Experienced Software Engineer (Mar 2022 - July 2024)',
      ),
    ).toBeInTheDocument();

    expect(
      getByTextContent('> Casual Software Engineer (Mar 2020 - Mar 2022)'),
    ).toBeInTheDocument();
  });

  it('shows present for roles which are ongoing', () => {
    const experienceItem = mockExperienceItem({
      roles: [
        {
          title: 'Experienced Software Engineer',
          startDate: new Date(2022, 2),
        },
        {
          title: 'Casual Software Engineer',
          endDate: new Date(2022, 2),
          startDate: new Date(2020, 2),
        },
      ],
    });

    render(<Card item={experienceItem} />);

    expect(
      getByTextContent('> Experienced Software Engineer (Mar 2022 - Present)'),
    ).toBeInTheDocument();
  });

  it('should not show role timeframe when there is only one role', () => {
    const experienceItem = mockExperienceItem({
      roles: [
        {
          title: 'Casual Software Engineer',
          endDate: new Date(2022,   2),
          startDate: new Date(2020, 2),
        },
      ],
    });

    render(<Card item={experienceItem} />);

    expect(screen.getByText('> Casual Software Engineer')).toBeInTheDocument();
  });
});
