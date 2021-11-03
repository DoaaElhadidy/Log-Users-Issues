import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Issue {
  id: string,
  title: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private httpClient: HttpClient) { }

  getAllIssues(){
    return this.httpClient.get<Issue[]>('http://localhost:3000/issues');
  }
}
