import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from '../../interfaces/IEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = '/data/employees.json';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiUrl).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Internal Server Error');
      })
    );
  }
}
