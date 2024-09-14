import { Component, OnInit } from '@angular/core';
import { employees } from '../../../data/employees';
import { IEmployee } from '../../../interfaces/IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[] = [];

  getEmployees(): IEmployee[] {
    return employees;
  }
  ngOnInit(): void {
    this.employees = this.getEmployees(); // Call getEmployees once during initialization
  }
}
