import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss',
})
export class EmployeeDetailsComponent implements OnInit {
  errMsg: any;
  oneEmployee: any;
  employeeId: any;

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.employeeService.getOneEmployee(+this.employeeId).subscribe({
      next: (data) => {
        console.log(data);
        this.oneEmployee = data;
      },
      error: (err) => {
        console.log(err);
        this.errMsg = err;
      },
    });
  }
}
