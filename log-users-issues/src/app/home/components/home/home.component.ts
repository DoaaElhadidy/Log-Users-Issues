import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navLinks = [
    {
      label: 'Create Issue',
      path: '/create-issue'
    },
    {
    label: 'Display Issues',
    path: '/display-issues'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
