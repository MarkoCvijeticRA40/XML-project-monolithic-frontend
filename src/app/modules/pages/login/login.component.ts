import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { LoginData } from '../../hospital/model/login-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  
  public currentUser: any;

  public data: LoginData = new LoginData();

  ngOnInit(): void {
  }

  public login() {
    this.userService.login(this.data).subscribe(res => {
      console.log(res);
      });
    } 














  }