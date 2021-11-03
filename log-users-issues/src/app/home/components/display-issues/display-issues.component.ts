import { Component, OnInit } from '@angular/core';
import { Issue, IssuesService } from './../../services/issues.service';

@Component({
  selector: 'app-display-issues',
  templateUrl: './display-issues.component.html',
  styleUrls: ['./display-issues.component.scss']
})
export class DisplayIssuesComponent implements OnInit {
  issuesToDisplay: Issue[] = [];

  constructor(private issuesService: IssuesService) { }

  ngOnInit(): void {
    this.issuesService.getAllIssues().subscribe(issues => {
      this.issuesToDisplay = issues;
    })
  }

}
