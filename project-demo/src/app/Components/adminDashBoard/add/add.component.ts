import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  employee = {
    id: '',
    name: '',
    email: '',
    position: '',
    department: ''
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  // Handle form submission
  onSubmit(employeeForm: any) {
    if (employeeForm.valid) {
      this.employeeService.addEmployee(this.employee).subscribe({
        next: () => {
          // Navigate back to the employee list after successful addition
          this.router.navigate(['/admin/list']);
        },
        error: (err) => {
          console.error('Error adding employee:', err);
        }
      });
    }
  }

}
