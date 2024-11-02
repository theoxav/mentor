import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostSubjectInterface, SubjectInterface } from './subject';
import { SUBJECTS } from './bdd';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  findAll(): SubjectInterface[] {
    return SUBJECTS;
  }

  @Get(':id')
  findOneById(@Param('id') id: string): SubjectInterface {
    return this.subjectService.findOneById(Number(id));
  }

  @Post()
  AddSubject(@Body() subject: PostSubjectInterface): SubjectInterface[] {
    return this.subjectService.createNewSubject(subject);
  }
}
