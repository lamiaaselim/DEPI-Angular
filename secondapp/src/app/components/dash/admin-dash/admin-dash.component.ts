import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.scss',
})
export class AdminDashComponent implements OnInit {
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
    this.router.navigate(['admin', id]);
  }

  goToAddEmployee() {
    this.router.navigate(['/admin/add'])
  }
}
