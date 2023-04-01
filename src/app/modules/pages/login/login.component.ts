import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { LoginData } from '../../hospital/model/login-data.model';
import  jwtDecode from 'jwt-decode';
import { User } from '../../hospital/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public currentUser: User = new User();

  public data: LoginData = new LoginData();

  accessToken : any;

  ngOnInit(): void {

  }

  public login() {
    this.userService.login(this.data).subscribe(res => {
      this.accessToken = res;
      this.userService.getCurrentUser().subscribe(user => {
          this.currentUser = user;

            if (this.currentUser.role == 'Admin') {
              this.router.navigate(['/admin/delete/flight']);
            }

            else if(this.currentUser.role == 'OrdinaryUser') {
              this.router.navigate(['/host/buyingTickets/forFlight/:id']);
            }
            else {
            }
        });
    });
  }
}
