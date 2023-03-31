import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout()
  }
}
