import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, UserData } from 'src/app/auth/services/auth.service';
import { IssuesService } from '../../services/issues.service';
import { Status } from '../../models/status.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  issuesForm: FormGroup = new FormGroup({});
  imageFile: string | null | ArrayBuffer = '';
  currentStatus: string = '';
  assigneeData: UserData[] = [];
  existingUser: UserData | undefined  = {
    id: '',
    email: '',
    password: '',
    staffId: '',
    computerName: '',
    isAdmin: false
  };
  userData: UserData = {
    id: '',
    email: '',
    password: '',
    staffId: '',
    computerName: '',
    isAdmin: false
  };
  issueId: string = '';
  statuses: string[] = [
    Status.opened,
    Status.inProgress,
    Status.resolved,
    Status.rejected,
    Status.closed
  ];

  constructor(private issuesService: IssuesService, 
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.issuesForm = new FormGroup({
      issueTitle: new FormControl(''),
      description: new FormControl(''),
      assignIssueTo: new FormControl('Please select an assignee'),
      image: new FormControl(''),
      status: new FormControl(Status.opened)
    });

    this.activatedRoute.params.subscribe(param => {
      this.issueId = param.id;
      if(param.id){
        // add comment control in case of edit issue
        this.issuesForm.get('status')?.valueChanges.subscribe(status => {
          if(status === Status.resolved || status === Status.rejected || status === Status.closed){
            this.issuesForm.addControl('comment', new FormControl(''));
          } else {
            this.issuesForm.removeControl('comment');
          }
        });

        this.subscriptions.push(this.issuesService.getIssueById(param.id).subscribe(issue => {
          this.imageFile = issue.image;
          this.currentStatus = issue.status;
          this.issuesForm.patchValue(issue);
        }));
      }
    });

    this.subscriptions.push(this.authService.getAllUsers().subscribe(users => {
      this.assigneeData = users;
      this.existingUser = users.find(user => user.email ===  localStorage.getItem('email'));
      let userId = this.existingUser?.id;
      this.authService.getUserById(userId).subscribe(user => {
        this.userData = user;     
      });
    }));

  };

  submitIssue(){ 
    let issueData = {
      ...this.issuesForm.value,
      image: this.imageFile,
      email: this.userData.email,
      staffId: this.userData.staffId,
      computerName: this.userData.computerName
    };

    if(this.issueId){
      this.issuesService.editIssue(this.issueId, issueData).subscribe();
    } else {
      this.issuesService.addIssue(issueData).subscribe();
    }
    this.issuesForm.reset();
    this.router.navigate(['/home/display-issues']);
  };

  handleFileInput(element: any){
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      this.imageFile = reader.result;
    };
    reader.readAsDataURL(file);
  };

  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
