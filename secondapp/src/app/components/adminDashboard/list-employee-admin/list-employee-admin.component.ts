import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee-admin',
  templateUrl: './list-employee-admin.component.html',
  styleUrl: './list-employee-admin.component.scss'
})
export class ListEmployeeAdminComponent implements OnInit {
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

  goToEditEmployee(id: any) {
    this.router.navigate(['adminn/edit', id]);
  }
}
