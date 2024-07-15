export interface ExperienceItem {
  company: string;
  companyInfo?: string;
  logo: string;
  roles: {
    title: string;
    endDate: Date;
    startDate: Date;
  }[];
  dotPoints: string[];
  skills: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Endava (formerly Lexicon)',
    companyInfo: 'Lexicon was acquired by Endava in October 2022',
    logo: 'endava.png',
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
    company: 'Swinburne University',
    logo: 'swinburne.png',
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
