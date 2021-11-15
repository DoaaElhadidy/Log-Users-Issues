import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface User {
  accessToken?: string,
  user: UserData
}

export interface UserData {
    id: string,
    email: string,
    password: string,
    staffId: string,
    computerName: string,
    isAdmin: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(user: User){
    return this.httpClient.post<User>('http://localhost:3000/login', user);
  }

  register(user: User){
    return this.httpClient.post<User>('http://localhost:3000/register', user);
  }

  getAllUsers(){
    return this.httpClient.get<UserData[]>('http://localhost:3000/users');
  }

  getUserById(id: string|undefined){ 
      return this.httpClient.get<UserData>(`http://localhost:3000/users/${id}`);
  
  }

}
