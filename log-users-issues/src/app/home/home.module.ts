import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from './../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';

import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { DisplayIssuesComponent } from './components/display-issues/display-issues.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    CreateIssueComponent,
    DisplayIssuesComponent,
    HomeComponent
  ],
  imports: [
CommonModule,
    HomeRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    AuthModule
  ],
  exports: [
    CreateIssueComponent,
    DisplayIssuesComponent,
    HomeComponent
  ]
})
export class HomeModule { }
