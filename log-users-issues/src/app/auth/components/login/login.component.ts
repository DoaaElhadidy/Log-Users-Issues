import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  showErrorMsg: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submitLogin(){
    this.authService.getAllUsers().subscribe(users => {
      let user = users.find(user => user.username === this.loginForm.get('userName')?.value && user.password === this.loginForm.get('password')?.value);
      if(user){
        this.router.navigate(['/home'])
      } else {
        this.showErrorMsg = true;
      }
    })
  }

}
