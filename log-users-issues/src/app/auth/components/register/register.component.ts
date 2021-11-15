import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      staffId: new FormControl(''),
      computerName: new FormControl(''),
      isAdmin: new FormControl(false)
    })
  };

  register(){
    this.authService.register(this.registerForm.value).subscribe( () => {
      this.router.navigate(['/']);
    });
  }
}