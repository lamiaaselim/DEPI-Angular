import { Component } from '@angular/core';
import { IEmployee } from '../../../Models/employee.model';
import { EmployeeService } from '../../../Services/employee.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrl: './list-admin.component.scss'
})
export class ListAdminComponent {

  employees: IEmployee[] = []; // Use the IEmployee type for better type checking
  errMsg: string = ''; // Change to string for better type safety

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        console.log(data);
        this.employees = data;
      },
      error: (err) => {
        this.errMsg = err; // Store error message for display
        console.error('Error fetching employees:', this.errMsg); // Log error to the console
      },
    });
  }

  goToEditEmployee(id: string): void {
    this.router.navigate(['admin/edit', id]);
  }

  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.employees = this.employees.filter(emp => emp.id !== id);
        console.log('Employee deleted successfully');
        Swal.fire({
          title: 'Delete Successfully',
          text: 'Employee deleted successfully',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      },
      error: (err) => {
        this.errMsg = err;
        console.error('Error deleting employee:', this.errMsg);
        Swal.fire({
          title: 'Delete Error',
          text: 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    });
  }

}
