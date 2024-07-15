export interface SkillCategory {
  title: string;
  skills: string[][];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
      ['React', 'Angular', 'AngularJS'],
    ],
  },
  {
    title: 'Backend',
    skills: [
      ['Kotlin', 'Java'],
      ['Mule 3', 'Mule 4'],
    ],
  },
  {
    title: 'Database',
    skills: [['SQL', 'MongoDB']],
  },
];
