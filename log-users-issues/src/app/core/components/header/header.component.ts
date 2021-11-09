import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface navLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navLinks: navLink[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  redirectNavLink(path: string){
    this.router.navigate([path])
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
