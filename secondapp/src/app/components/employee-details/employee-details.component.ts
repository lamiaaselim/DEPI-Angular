import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss',
})
export class EmployeeDetailsComponent implements OnInit {
  employees: any = [];
  employeeId: any;
  errMsg: any;

  constructor(
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        console.log(data);
        this.employees = data;
      },
      error: (err) => {
        this.errMsg = err;
      },
    });
  }
}
