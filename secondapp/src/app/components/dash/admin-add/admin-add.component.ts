import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrl: './admin-add.component.scss'
})
export class AdminAddComponent {
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
          this.router.navigate(['/employees']);
        },
        error: (err) => {
          console.error('Error adding employee:', err);
        }
      });
    }
  }
}
