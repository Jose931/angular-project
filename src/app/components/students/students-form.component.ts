import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent {

  title: string = "Create student";
  student: Student = new Student();

  constructor(private service: StudentService,
              private router: Router) { }

  ngOnInit() {
  }

  public create(): void {
    this.service.create(this.student).subscribe(student => {
      console.log(student)
      alert(`Student has been created`);
      this.router.navigate(['/students']);
    })
  }
}
