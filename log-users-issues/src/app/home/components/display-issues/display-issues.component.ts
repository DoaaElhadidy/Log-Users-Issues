import { Component, OnInit } from '@angular/core';
import { Issue, IssuesService } from './../../services/issues.service';
import { ModalService } from './../../../core/services/modal.service';
import { ModalSubjectData } from 'src/app/core/models/modal-subject-data';
import { ModalData } from 'src/app/core/models/modal-data';
import { AuthService, UserData } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-issues',
  templateUrl: './display-issues.component.html',
  styleUrls: ['./display-issues.component.scss'],
})
export class DisplayIssuesComponent implements OnInit {
  issuesToDisplay: Issue[] = [];
  userIdToDelete: string = '';
  loggedInUser: UserData | undefined= {
    id: '',
    email: '',
    password: '',
    staffId: '',
    computerName: '',
    isAdmin: false
  };
  isAdmin: string | null = '';
  currentUserEmail: string | null = '';


  constructor(
    private issuesService: IssuesService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllIssues();
  }

  deleteIssue(userId: string) {
    this.userIdToDelete = userId;
    this.modalService.openModal(
      new ModalSubjectData(
        true,
        new ModalData(
          'Are you sure you want to delete this item?',
          this.okHandler,
          this.cancelHandler,
        )
      )
    );
  }

  cancelHandler = () => {
    this.modalService.closeModal();
  }

  okHandler = () => {
    this.issuesService.deleteIssueById(this.userIdToDelete).subscribe(() => {
      this.getAllIssues();
      this.modalService.modalSubject.next(new ModalSubjectData());
      // debugger;
      // let issueIndex = this.issuesToDisplay.findIndex(issue => issue.id === this.userIdToDelete);
      // this.issuesToDisplay.slice(issueIndex, 1);
      // this.userIdToDelete = '';
    });
  }

  getAllIssues() {
    this.issuesService.getAllIssues().subscribe((issues: Issue[]) => {
      this.isAdmin = localStorage.getItem('isAdmin');
      this.currentUserEmail = localStorage.getItem('email');
      if(this.isAdmin === "true"){
        this.issuesToDisplay = issues;
      } else {
        this.issuesToDisplay = issues.filter(issue => (issue.email === this.currentUserEmail || issue.assignIssueTo === this.currentUserEmail));        
      };
    });
  };

  editIssue(id: string){
    this.router.navigate([`/home/create-issue/${id}`]);
  }
}
