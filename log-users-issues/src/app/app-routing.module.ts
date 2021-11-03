import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './home/components/home/home.component';
import { CreateIssueComponent } from './home/components/create-issue/create-issue.component';
import { DisplayIssuesComponent } from './home/components/display-issues/display-issues.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'create-issue', component: CreateIssueComponent },
    { path: 'display-issues', component: DisplayIssuesComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
