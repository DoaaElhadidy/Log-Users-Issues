import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  accessToken?: string;
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(user: User){
    return this.httpClient.post<User>('http://localhost:3000/login', user);
  }

  getAllUsers(){
    return this.httpClient.get<User[]>('http://localhost:3000/users');
  }

}
