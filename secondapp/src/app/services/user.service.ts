import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERModel } from '../components/register/UserModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL: string =
    'https://http-1-71708-default-rtdb.firebaseio.com/users.json';
  constructor(private http: HttpClient) {}

  addUser(user: USERModel) {
    return this.http.post<any>(this.baseURL, user);
  }
}
