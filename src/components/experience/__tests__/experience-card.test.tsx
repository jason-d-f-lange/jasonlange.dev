import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import ExperienceCard from '../experience-card';
import { ExperienceItem } from '../experience-items';

const mockExperienceItem = (
  overrides?: Partial<ExperienceItem>,
): ExperienceItem => ({
  company: faker.company.name(),
  logo: faker.system.commonFileName('png'),
  roles: faker.helpers.multiple<ExperienceItem['roles'][number]>(() => ({
    title: faker.person.jobTitle(),
    startDate: faker.date.past(),
    endDate: faker.date.recent(),
  })),
  dotPoints: faker.helpers.multiple(faker.company.buzzPhrase),
  skills: faker.helpers.multiple(faker.company.buzzNoun),
  ...overrides,
});

// Source: https://stackoverflow.com/a/68429756/3894163
const getByTextContent = (text: string) =>
  screen.getByText((_, element: Element | null) => {
    const hasText = (element: Element | null) => element?.textContent === text;
    const elementHasText = hasText(element);
    // eslint-disable-next-line testing-library/no-node-access
    const childrenDontHaveText = Array.from(element?.children || []).every(
      (child) => !hasText(child),
    );
    return elementHasText && childrenDontHaveText;
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

    render(<ExperienceCard item={experienceItem} />);
    expect(screen.getByText(/Mar 2020 - Dec 2099/i)).toBeInTheDocument();
  });

  it('shows the timeframe for all roles except the most recent', () => {
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

    render(<ExperienceCard item={experienceItem} />);

    expect(screen.getByText('Omega Software Engineer')).toBeInTheDocument();

    expect(
      getByTextContent('Experienced Software Engineer (Mar 2022 - July 2024)'),
    ).toBeInTheDocument();

    expect(
      getByTextContent('Casual Software Engineer (Mar 2020 - Mar 2022)'),
    ).toBeInTheDocument();
  });
});
