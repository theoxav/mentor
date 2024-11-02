import { SubjectInterface } from '../subject/subject';

export type LevelInterface = {
  id: number;
  name: string;
};

export type LevelSubjectInterface = {
  level: LevelInterface;
  subject: SubjectInterface;
};
