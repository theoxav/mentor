import { Injectable } from '@nestjs/common';
import { PostSubjectInterface, SubjectInterface } from './subject';
import { SUBJECTS } from './bdd';

@Injectable()
export class SubjectService {
  findAll(): SubjectInterface[] {
    return SUBJECTS;
  }

  findOneById(id: number): SubjectInterface {
    return SUBJECTS.find((subject) => subject.id === id);
  }

  createNewSubject({ name }: PostSubjectInterface): SubjectInterface[] {
    const sortedByIdSubject = SUBJECTS.sort((a, b) => a.id - b.id);
    const newId = sortedByIdSubject[sortedByIdSubject.length - 1].id + 1;

    return [...SUBJECTS, { id: newId, name, levelId: 1 }];
  }
}
