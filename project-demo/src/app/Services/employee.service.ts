import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IEmployee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl: string =
    'https://form-template-driven-default-rtdb.firebaseio.com/employee';
  constructor(private http: HttpClient) {}

  private getEmployeeUrl(id?: string): string {
    return id ? `${this.baseUrl}/${id}.json` : `${this.baseUrl}.json`;
  }

  getAllEmployees(): Observable<IEmployee[]> {
    return this.http
      .get<{ [key: string]: IEmployee }>(this.getEmployeeUrl())
      .pipe(
        map((response) => {
          // Convert the object to an array without overwriting id
          return Object.keys(response).map((key) => ({
            ...response[key], // Spread the employee properties
            id: key, // Assign the key as the id separately
          }));
        }),
        catchError(this.handleError)
      );
  }

  getOneEmployee(id: string): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.getEmployeeUrl(id)).pipe(
      catchError((err) => {
        return throwError(() => new Error('Employee not found'));
      })
    );
  }

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http
      .post<IEmployee>(this.getEmployeeUrl(), employee)
      .pipe(catchError(this.handleError));
  }

  editEmployee(employee: IEmployee): Observable<IEmployee> {
    // Exclude the id field when updating an employee
    const { id, ...employeeData } = employee;
    return this.http
      .put<IEmployee>(this.getEmployeeUrl(employee.id), employeeData)
      .pipe(catchError(this.handleError));
  }

  deleteEmployee(id: string): Observable<void> {
    return this.http
      .delete<void>(this.getEmployeeUrl(id))
      .pipe(catchError(this.handleError));
  }

  private handleError(err: any): Observable<never> {
    const errorMessage = err.message || 'Internal Server Error';
    return throwError(() => new Error(errorMessage));
  }
}
