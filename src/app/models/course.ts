import { Exam } from "./exam";
import { Student } from "./student";

export class Course {
    id: number;
    name: string;
    createat: string;
    students: Student[] = [];
    exams: Exam[] = [];
}
