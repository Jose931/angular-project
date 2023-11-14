export class Subject {
    id: number;
    name: string;
    generalSubject: Subject;
    specificSubject: Subject[] = [];
}
