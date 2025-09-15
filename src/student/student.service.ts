/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A' },
    { id: 2, name: 'Doe John', age: 21, grade: 'B' },
    { id: 3, name: 'Alice Smith', age: 19, grade: 'A' },
    { id: 4, name: 'Bob Johnson', age: 22, grade: 'C' },
    { id: 5, name: 'Charlie Brown', age: 20, grade: 'B' },
    { id: 6, name: 'Diana Prince', age: 23, grade: 'A' },
    { id: 7, name: 'Ethan Hunt', age: 21, grade: 'B' },
    { id: 8, name: 'Fiona Clark', age: 22, grade: 'A' },
    { id: 9, name: 'George Miller', age: 20, grade: 'C' },
    { id: 10, name: 'Hannah Davis', age: 19, grade: 'B' },
    { id: 11, name: 'Ian Thomas', age: 24, grade: 'A' },
    { id: 12, name: 'Jane Wilson', age: 22, grade: 'C' },
    { id: 13, name: 'Kevin White', age: 21, grade: 'B' },
    { id: 14, name: 'Laura Martin', age: 20, grade: 'A' },
    { id: 15, name: 'Michael Scott', age: 23, grade: 'B' },
    { id: 16, name: 'Nina Lopez', age: 19, grade: 'A' },
    { id: 17, name: 'Oscar Harris', age: 22, grade: 'C' },
    { id: 18, name: 'Paula Young', age: 21, grade: 'B' },
    { id: 19, name: 'Quentin Blake', age: 20, grade: 'A' },
    { id: 20, name: 'Rachel Green', age: 23, grade: 'B' },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  createNewStudent(payload: { name: string; age: number; grade: string }) {
    const newStudent = {
      id: this.students.length + 1,
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudentById(
    id: number,
    payload: { name: string; age: number; grade: string },
  ) {
    const student = this.getStudentById(id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    const index = this.students.findIndex((student) => student.id === id);
    this.students[index] = {
      ...student,
      ...payload,
    };
    return this.students[index];
  }

  patchStudentData(
    id: number,
    payload: { name?: string; age?: number; grade?: string },
  ) {
    const student = this.getStudentById(id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    const index = this.students.findIndex((student) => student.id === id);
    this.students[index] = {
      ...student,
      ...payload,
    };
    return this.students[index];
  }

  deletedStudentById(id: number) {
    const student = this.getStudentById(id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    const index = this.students.findIndex((student) => student.id === id);
    this.students.splice(index, 1);
    return {
      message: `Student with ID ${id} deleted successfully`,
    };
  }
}
