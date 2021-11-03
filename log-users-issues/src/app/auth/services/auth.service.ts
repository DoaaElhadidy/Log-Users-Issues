import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string,
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(){
    return this.httpClient.get<User[]>('http://localhost:3000/users');
  }
}
