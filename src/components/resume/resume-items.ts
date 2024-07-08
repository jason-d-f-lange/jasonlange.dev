export interface ResumeItem {
  company: string;
  logo: string;
  role: string;
  timeframe: string;
  dotPoints: string[];
  skills: string[];
}

export const resumeItems: ResumeItem[] = [
  {
    company: 'Endava (formerly Lexicon)',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/27fca8a018ab44a9304f052bf0a0dbfe51a9e10ab23e053e51a835ea394111bc?apiKey=869482d0b4614a09ba4477c956f855cb&',
    role: 'Senior Software Engineer',
    timeframe: 'Sep 2022 - Jul 2024',
    dotPoints: [
      'Did awesome stuff',
      'Was the best there ever was',
      'Took a lot of trains',
      'Ate some really good Japanese food',
    ],
    skills: ['React', 'Kotlin', 'MongoDB', 'Kafka', 'TypeScript'],
  },
  {
    company: 'Lexicon',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c4699fd6bc6322b87619c38dfcb83dcf7fbee370a08efd5b7c0d11a2ac31268?apiKey=869482d0b4614a09ba4477c956f855cb&',
    role: 'Software Engineer',
    timeframe: 'Mar 2022 - Sep 2022',
    dotPoints: [
      'Did awesome stuff',
      'Was the best there ever was',
      'Took a lot of trains',
      'Ate some really good Japanese food',
    ],
    skills: ['React', 'Kotlin', 'MongoDB', 'Kafka', 'TypeScript'],
  },
  {
    company: 'Swinburne University',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4e1053d8f58b3d0e1502ad810699fc5d18d989f186b1a2e1831ead8991b19010?apiKey=869482d0b4614a09ba4477c956f855cb&',
    role: 'Senior Software Engineer',
    timeframe: 'Jan 2019 - Mar 2022',
    dotPoints: [
      'Did awesome stuff',
      'Was the best there ever was',
      'Took a lot of trains',
      'Ate some really good Japanese food',
    ],
    skills: ['Java', 'AngularJS', 'Mule 4', 'Ansible', 'Splunk'],
  },
  {
    company: 'Swinburne University',
    logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4e1053d8f58b3d0e1502ad810699fc5d18d989f186b1a2e1831ead8991b19010?apiKey=869482d0b4614a09ba4477c956f855cb&',
    role: 'Software Engineer',
    timeframe: 'Jan 2016 - Jan 2019',
    dotPoints: [
      'Did awesome stuff',
      'Was the best there ever was',
      'Took a lot of trains',
      'Ate some really good Japanese food',
    ],
    skills: ['Java', 'AngularJS', 'Mule 3', 'Oracle SQL'],
  },
];
