import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-admin',
  templateUrl: './add-employee-admin.component.html',
  styleUrl: './add-employee-admin.component.scss'
})
export class AddEmployeeAdminComponent {
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

