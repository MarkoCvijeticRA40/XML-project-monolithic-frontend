import { ThisReceiver } from '@angular/compiler';
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
    this.user.role = "OrdinaryUser";
    if (this.isInputValid()) {
      if (this.isPassConfirmed()) {
        this.userService.registerUser(this.user).subscribe(res => {
          alert("You have successfully registered!");
        })
      }
      else
      {
      alert("You did not confirm your password!");
      }
    }
    else {
      alert("You must fill in all fields!")
    }
  }

  private isInputValid(): boolean {
    return this.user.username != ''
         && this.user.name != '' && this.user.lastname != '' && this.user.password != ''
         && this.user.email != '' && this.user.placeOfLiving != ''
  }

  private isPassConfirmed(): boolean {
    return this.user.password === this.confirmationPass;
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

  requiredUsernameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredPlaceOfLivingControl = new FormControl('', [
    Validators.required,
  ]);
}
