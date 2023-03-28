import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../hospital/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public confirmationPass: string = '';

  public user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public registerUser() {
    this.user.Role = "Guest";
    if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.userService.registerUser(this.user).subscribe(res => {
          alert("You have successfully registered!");
        })
      } 
      else 
      {
      alert("Password is not confirmed!");
      }
    }
    else {
      alert("You must fill in all fields!")
    }
  }

  private isInputValid(): boolean {
    return this.user.Username == ''
         && this.user.Name != '' && this.user.Lastname != '' && this.user.Password != '' 
         && this.user.Email != '' && this.user.PlaceOfLiving == '' 
  }

  private isPassConfirmed(): boolean {
    return this.user.Password === this.confirmationPass;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  requiredNameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredSurnameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredConfirmationPasswordControl = new FormControl('', [
    Validators.required,
  ])
}
