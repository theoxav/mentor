import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InterfacePostSubject, InterfaceSubject } from './subject';
import { SUBJECTS } from './bdd';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  findAll(): InterfaceSubject[] {
    return SUBJECTS;
  }

  @Get(':id')
  findOneById(@Param('id') id: string): InterfaceSubject {
    return this.subjectService.findOneById(Number(id));
  }

  @Post()
  AddSubject(@Body() subject: InterfacePostSubject): InterfaceSubject[] {
    return this.subjectService.createNewSubject(subject);
  }
}
