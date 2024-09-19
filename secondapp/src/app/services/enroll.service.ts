import { Injectable } from '@angular/core';
import { User } from '../components/login/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  private baseURL: string = 'https://http-1-71708-default-rtdb.firebaseio.com/login.json'
  constructor(private http: HttpClient) { }

  enRoll(user: User) {
      return this.http.post<any>(this.baseURL,user)
  }
}
