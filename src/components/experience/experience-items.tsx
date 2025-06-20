export interface ExperienceItem {
  company: {
    name: string;
    additionalInfo?: string;
  };
  logo: {
    path: string;
    background?: React.CSSProperties['background'];
  };
  roles: {
    title: string;
    endDate?: Date;
    startDate: Date;
  }[];
  dotPoints: string[];
  skills: string[];
}

const swinburne: Pick<ExperienceItem, 'company' | 'logo'> = {
  company: { name: 'Swinburne University' },
  logo: { path: 'swinburne.svg', background: 'black' },
};

export const experienceItems: ExperienceItem[] = [
  {
    ...swinburne,
    roles: [
      {
        title: 'Integration Specialist',
        startDate: new Date(2024, 11),
      },
    ],
    dotPoints: [
      'Facilitated Ways of Working initiatives',
      'Championed improvements to code quality and documentation',
      'Automated complex manual workflows including technical documentation',
      'Developed Azure DevOps pipelines',
      'Streamlined JIRA and Agile processes',
    ],
    skills: [
      'Azure DevOps',
      'NodeJS',
      'TypeScript',
      // 'Open API Schema',
      'Mule 4',
    ],
  },
  {
    company: {
      name: 'Endava (formerly Lexicon)',
      additionalInfo: 'Lexicon was acquired by Endava in October 2022',
    },
    logo: { path: 'endava.svg', background: 'white' },
    roles: [
      {
        title: 'Senior Software Engineer',
        endDate: new Date(2024, 6),
        startDate: new Date(2022, 8),
      },
      {
        title: 'Software Engineer',
        endDate: new Date(2022, 8),
        startDate: new Date(2022, 2),
      },
    ],
    dotPoints: [
      'Prepared solution designs and estimates for new projects',
      'Modified complex networks of micro frontends and services',
      'Designed and implemented a content management system',
      'Developed a centralised dashboard for financial advisers',
      'Automated email sending processes',
      'Automated the generation of government compliance reports',
      'Uplifted legacy microfrontends',
    ],
    skills: [
      'React',
      'Testing Library',
      'TypeScript',
      'Redux',

      'Kotlin',
      'Groovy',

      'MongoDB',
      'Kafka',
    ],
  },
  {
    ...swinburne,
    roles: [
      {
        title: 'Senior Software Engineer',
        endDate: new Date(2022, 2),
        startDate: new Date(2019, 0),
      },
      {
        title: 'Software Engineer',
        endDate: new Date(2019, 0),
        startDate: new Date(2016, 0),
      },
    ],
    dotPoints: [
      'Developed full-stack web applications for students and staff',
      'Supported production systems and users',
      'Led a team of graduates in developing a mobile app',
      'Developed various systems to comply with COVID regulations',
      'Uplifted poorly maintainable legacy applications',
      'Automated complex business processes like travel requests',
      'Integrated internal and external systems',
      'Automated deployment of runtimes and applications',
      'Created and optimised CI/CD pipelines',
      'Standardised application logging and monitoring',
    ],
    skills: [
      'Java',
      'JSP',
      'Spring',

      'AngularJS',
      'jQuery',

      'SQL',
      'Mule 3',
      'Mule 4',
      'CloudHub',

      'Ansible',
      'Splunk',
    ],
  },
];
