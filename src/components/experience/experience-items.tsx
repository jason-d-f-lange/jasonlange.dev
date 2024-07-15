export interface ExperienceItem {
  company: string;
  companyInfo?: React.ReactNode;
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
    companyInfo: (
      <a
        href="https://investors.endava.com/news-events/press-releases/detail/60/endava-announces-the-acquisition-of-lexicon-australia"
        target="_blank"
        style={{ textDecoration: 'underline' }}
      >
        Lexicon was acquired by Endava in October 2022
      </a>
    ),
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
      'Designed and developed a content management system',
      'Extended a complex set of microservices to support illiquid assets',
      'Developed a dashboard for advisers to view outstanding items',
      'Automated manual email sending processes',
      'Built systems for users to upload documents to internal teams',
      'Automated the generation of government compliance reports',
    ],
    skills: [
      'React',
      'Redux',
      'TypeScript',

      'Kotlin',
      'Groovy',

      'MongoDB',
      'Kafka',

      // 'Microservices',
      // 'Microfrontends',
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
      'Developed a check-in system for staff and students to comply with COVID-19 regulations',
      'Led a team of graduates in developing a mobile app',
      'Built and integrated Mule microservices with internal and external systems',
      'Automated deployment of Mule runtimes and applications to both on-premise and cloud environments',
      'Introduced mandatory code reviews with automated linting and regression testing',
      'Improved application debugging and visibility with structured logging and Splunk integration',
      'Developed web applications with Java and AngularJS including a document ordering system with payments',
      'Automated complex business processes with Alfresco Process Services with extensive JavaScript customisation',
      'Automated manual manipulation of Excel spreadsheets saving dozens of work hours',
      'Uplifted legacy applications to be more performant and maintainable',
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

      // 'Jenkins',
      // 'GitLab',
      'Ansible',
      'Splunk',
      // 'Modo Campus',
    ],
  },
];
