import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/user.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = "https://form-template-driven-default-rtdb.firebaseio.com/users.json";
  constructor(private http: HttpClient) { }


  // add users => register users
  addUser(user: IUser): Observable<any> {
    return this.http.post(this.baseUrl , user)
  }

  // getAllUsers => fetch all users
  getAllUsers (): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl)
  }


  // check if user email is registered
  checkIfEmailExists(email:string) : Observable<boolean> {
    return this.getAllUsers().pipe(
      map((users : IUser[]) => {
        const emailExist = users
        ? Object.values(users).some((user: IUser)=> user.email === email)
        : false;
        return emailExist
      })
    )
  }
}
