import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Issue {
  issueTitle: string,
  computerName: string,
  staffId: string,
  description: string,
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private httpClient: HttpClient) { }

  getAllIssues(){
    return this.httpClient.get<Issue[]>('http://localhost:3000/issues');
  }

  deleteIssueById(id: string){
    return this.httpClient.delete(`http://localhost:3000/issues/${id}`);
  }

  addIssue(issue: Issue){
    return this.httpClient.post<Issue>('http://localhost:3000/issues', issue);
  }
}
