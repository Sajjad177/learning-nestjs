/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  createNewStudent(
    @Body() payload: { name: string; age: number; grade: string },
  ) {
    return this.studentService.createNewStudent(payload);
  }

  @Put(':id')
  updateStudentById(
    @Param('id') id: string,
    @Body() payload: { name: string; age: number; grade: string },
  ) {
    return this.studentService.updateStudentById(Number(id), payload);
  }

  @Patch(':id')
  patchStudentData(
    @Param('id') id: string,
    @Body() payload: { name?: string; age?: number; grade?: string },
  ) {
    return this.studentService.patchStudentData(Number(id), payload);
  }

  @Delete(':id')
  deletedStudentById(@Param('id') id: string) {
    return this.studentService.deletedStudentById(Number(id));
  }
}
