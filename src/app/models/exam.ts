import { Subject } from "./subject";
import { Question } from "./question";

export class Exam {
    id: number;
    name: string;
    createat: string;
    questions: Question[] = [];
    subject: Subject;
    answered: boolean;
}
