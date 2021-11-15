import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Issue {
  issueTitle: string,
  computerName: string,
  staffId: string,
  description: string,
  email: string,
  id: string,
  image: string,
  assignIssueTo: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private httpClient: HttpClient) { }

  getAllIssues(){
    return this.httpClient.get<Issue[]>('http://localhost:3000/issues');
  };

  getIssueById(id: string){
    return this.httpClient.get<Issue>(`http://localhost:3000/issues/${id}`);
  };

  deleteIssueById(id: string){
    return this.httpClient.delete(`http://localhost:3000/issues/${id}`);
  };

  addIssue(issueDetails: Issue){
    return this.httpClient.post<Issue>('http://localhost:3000/issues', issueDetails);
  };

  editIssue(id: string, issueDetails: Issue): Observable<Issue>{
    return this.httpClient.put<Issue>(`http://localhost:3000/issues/${id}`, issueDetails);
  };
  
}
