import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent implements OnInit {
  employees: any = [];
  errMsg: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err) => {
        this.errMsg = err;
      },
    });
  }

  goToEmployeeDetails(id: any) {
    this.router.navigate(['employee', id]);
  }
}
