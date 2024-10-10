import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { USERModel } from '../Models/UserModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL: string =
    'https://http-1-71708-default-rtdb.firebaseio.com/users.json';

  constructor(private http: HttpClient) {}

  // Add user method
  addUser(user: USERModel): Observable<any> {
    return this.http.post<any>(this.baseURL, user);
  }

  // Fetch all users
  getAllUsers(): Observable<USERModel[]> {
    return this.http.get<USERModel[]>(this.baseURL);
  }

  // Check if email exists
  checkIfEmailExists(email: string): Observable<boolean> {
    return this.getAllUsers().pipe(
      map((users: USERModel[]) => {
        const emailExists = users
          ? Object.values(users).some((user: USERModel) => user.email === email)
          : false;
        return emailExists;
      })
    );
  }
}
