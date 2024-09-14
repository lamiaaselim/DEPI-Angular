import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../../interfaces/IEmployee';
import { employees } from './../../../data/employees';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss',
})
export class EmployeeDetailsComponent implements OnInit {
  employees: IEmployee[] = [];

  ngOnInit(): void {
    this.employees = this.getEmployees(); // Call getEmployees once during initialization
  }
  getEmployees(): IEmployee[] {
    return employees;
  }
}
