import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';
import { IEmployee } from '../../../../interfaces/IEmployee';


@Component({
  selector: 'app-list-employee-admin',
  templateUrl: './list-employee-admin.component.html',
  styleUrls: ['./list-employee-admin.component.scss'], // Corrected 'styleUrl' to 'styleUrls'
})
export class ListEmployeeAdminComponent implements OnInit {
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
}
