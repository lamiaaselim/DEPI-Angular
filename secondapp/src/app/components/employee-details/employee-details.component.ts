import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../../../interfaces/IEmployee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss',
})
export class EmployeeDetailsComponent implements OnInit {
  employees: { [key: string]: any } = {};
  errMsg: string = ''; // Change to string for better type safety

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        console.log('Employees data:', data);
        this.employees = data; // Set the employees object
      },
      error: (err) => {
        this.errMsg = err; // Handle the error
      },
    });
  }


  goToEditEmployee(id: string): void {
    this.router.navigate(['admin/edit', id]);
  }
}
