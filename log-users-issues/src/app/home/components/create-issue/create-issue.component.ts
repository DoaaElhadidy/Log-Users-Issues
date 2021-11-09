import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { Issue } from './../../services/issues.service';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {
  issuesForm: FormGroup = new FormGroup({});

  constructor(private issuesService: IssuesService, private router: Router) { }

  ngOnInit(): void {
    this.issuesForm = new FormGroup({
      issueTitle: new FormControl(''),
      computerName: new FormControl(''),
      email:new FormControl(''),
      staffId: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl('')
    });
  }

  submitIssue(){    
    this.issuesService.addIssue(this.issuesForm.value).subscribe((issue: Issue) => {
      this.issuesForm.reset();
      this.router.navigate(['/display-issues'])
    });
  }

}
