import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private router: Router) { }

  canActivate(route : ActivatedRouteSnapshot) : boolean {

    const expectedRole = route.data['expectedRole'];
    const token: any = localStorage.getItem('jwt');
    const payload: any = jwtDecode(token);
    const userRole = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    if(userRole !== expectedRole) {
      
      return false;
    
    }
    return true;
  }

}
