import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { LoginData } from '../../hospital/model/login-data.model';
import  jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  
  public currentUser: any;

  public data: LoginData = new LoginData();

  //token : any = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MmI1NjY3Ni1kNjUxLTQ1NWMtOTk2Yi0wYjFkYTNjYTVjYzMiLCJpZCI6IjY0MjU4NTcyZmY3YTUwMDY4ZmFjZTVjMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Ikd1ZXN0IiwiZXhwIjoxNjgwMjY2NDc4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjI3MDE3LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC8ifQ.M_8SpPsYkbyjWubI6H4kByWPz_Sm0I0jsnz0rGHeV0Q'; // your token here
  
  accessToken : any;
  
  ngOnInit(): void {
  }

  public login() {
    this.userService.login(this.data).subscribe(res => {
      this.accessToken = res;
      });
  } 

  
  
  
  
  public getToken() {



  }

  





  }