import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { DisplayIssuesComponent } from './components/display-issues/display-issues.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'create-issue', component: CreateIssueComponent, canActivate: [AuthGuard] },
    { path: 'display-issues', component: DisplayIssuesComponent, canActivate: [AuthGuard] }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
