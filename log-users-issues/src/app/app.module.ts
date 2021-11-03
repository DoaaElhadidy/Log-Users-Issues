import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './home/components/home/home.component';
import { CreateIssueComponent } from './home/components/create-issue/create-issue.component';
import { DisplayIssuesComponent } from './home/components/display-issues/display-issues.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CreateIssueComponent,
    DisplayIssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
