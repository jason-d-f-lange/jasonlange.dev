export interface ExperienceItem {
  company: string;
  companyInfo?: React.ReactNode;
  logo: string;
  role: string;
  timeframe: string;
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
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/27fca8a018ab44a9304f052bf0a0dbfe51a9e10ab23e053e51a835ea394111bc?apiKey=869482d0b4614a09ba4477c956f855cb&',
    role: 'Senior Software Engineer\nSoftware Engineer (Mar 2022 - Sep 2022)',
    timeframe: 'Mar 2022 - Jul 2024',
    dotPoints: [
      'Designed and developed a content management system',
      'Extended a complex set of microservices to support illiquid assets',
      'Developed a dashboard for advisers to to view outstanding items',
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
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4e1053d8f58b3d0e1502ad810699fc5d18d989f186b1a2e1831ead8991b19010?apiKey=869482d0b4614a09ba4477c956f855cb&',
    role: 'Senior Software Engineer\nSoftware Engineer (Jan 2016 - Jan 2019)',
    timeframe: 'Jan 2016 - Mar 2022',
    dotPoints: [
      'Developed a check-in system for staff and students to comply with COVID-19 regulations',
      'Led a team of graduates in developing a mobile app',
      'Automated deployment of Mule runtimes and applications to both on-premise and cloud environments',
      'Introduced mandatory code reviews with automated linting and regression testing',
      'Improved application debugging and visibility with structured logging and Splunk integration',
      'Built and integrated Mule microservices with internal and external systems',
      'Developed web applications with Java and AngularJS including a document ordering system with payments',
      'Automated complex business processes with Alfresco Process Services with extensive JavaScript customisation',
      'Automated manual manipulation of Excel spreadsheets saving dozens of work-hours',
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
