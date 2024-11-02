import { Injectable } from '@nestjs/common';
import { SubjectService } from '../subject/subject.service';
import { LevelSubjectInterface } from './level';
import { LEVELS } from './bdd';

@Injectable()
export class LevelService {
  constructor(private readonly subjectService: SubjectService) {}

  findLevelAndSubjectByName(name: string): LevelSubjectInterface[] {
    const level = LEVELS.find((level) => level.name === name);
    const subjects = this.subjectService.findAll();
    const filteredSubject = subjects.filter(
      (subject) => subject.levelId === level.id,
    );

    return filteredSubject.map<LevelSubjectInterface>((subject) => ({
      subject,
      level,
    }));
  }
}
