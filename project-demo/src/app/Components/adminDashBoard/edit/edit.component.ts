import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../Services/employee.service';
import { IEmployee } from '../../../Models/employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent  implements OnInit {
  errMsg: string = ''; // Use string type for the error message
  oneEmployee: IEmployee = {} as IEmployee; // Properly typed IEmployee object
  employeeId: string | null = null; // Ensure that ID can be null initially

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router // Inject Router for navigation after update
  ) {}

  ngOnInit(): void {
    this.employeeId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.employeeId) {
      this.employeeService.getOneEmployee(this.employeeId).subscribe({
        next: (data) => {
          console.log('Fetched Employee:', data);
          this.oneEmployee = data;
        },
        error: (err) => {
          console.log(err);
          this.errMsg = 'Error fetching employee details';
        },
      });
    }
  }

  // Method to handle the form submission
  onSubmit(): void {
    if (this.oneEmployee && this.employeeId) {
      this.employeeService.editEmployee(this.oneEmployee).subscribe({
        next: (response) => {
          console.log('Employee updated:', response);
          this.router.navigate(['/admin/list']); // Redirect to employee list after success
        },
        error: (err) => {
          console.error('Error updating employee:', err);
          this.errMsg = 'Failed to update employee';
        },
      });
    }
  }
}
