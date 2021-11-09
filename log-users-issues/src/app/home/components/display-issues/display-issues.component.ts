import { Component, OnInit } from '@angular/core';
import { Issue, IssuesService } from './../../services/issues.service';
import { ModalService } from './../../../core/services/modal.service';
import { ModalSubjectData } from 'src/app/core/models/modal-subject-data';
import { ModalData } from 'src/app/core/models/modal-data';

@Component({
  selector: 'app-display-issues',
  templateUrl: './display-issues.component.html',
  styleUrls: ['./display-issues.component.scss'],
})
export class DisplayIssuesComponent implements OnInit {
  issuesToDisplay: Issue[] = [];
  userIdToDelete: string = '';

  constructor(
    private issuesService: IssuesService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getAllIssues();
  }

  deleteIssue(userId: string) {
    debugger;
    this.userIdToDelete = userId;
    this.issuesService.deleteIssueById(this.userIdToDelete).subscribe();
    this.getAllIssues();
    // this.modalService.openModal(
    //   new ModalSubjectData(
    //     true,
    //     new ModalData(
    //       'Are you sure you want to delete this item?',
    //       this.okHandler,
    //       this.cancelHandler,
    //     )
    //   )
    // );
  }

  // cancelHandler = () => {
  //   this.modalService.closeModal();
  // }

  // okHandler = () => {
  //   this.issuesService.deleteIssueById(this.userIdToDelete).subscribe();
  //   this.getAllIssues();
  // }

  getAllIssues() {
    this.issuesService.getAllIssues().subscribe((issues) => {
      this.issuesToDisplay = issues;
    });
  }
}
