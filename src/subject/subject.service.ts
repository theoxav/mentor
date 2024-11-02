import { Injectable } from '@nestjs/common';
import { InterfacePostSubject, InterfaceSubject } from './subject';
import { SUBJECTS } from './bdd';

@Injectable()
export class SubjectService {
  findOneById(id: number): InterfaceSubject {
    return SUBJECTS.find((subject) => subject.id === id);
  }

  createNewSubject({ name }: InterfacePostSubject): InterfaceSubject[] {
    const sortedByIdSubject = SUBJECTS.sort((a, b) => a.id - b.id);
    const newId = sortedByIdSubject[sortedByIdSubject.length - 1].id + 1;

    return [...SUBJECTS, { id: newId, name }];
  }
}
