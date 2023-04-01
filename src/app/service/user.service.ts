import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../modules/hospital/model/user.model';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  access_token  : any = '';
  decoded_token : any;
  currentUser : User = new User();

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/User', user , {headers: this.headers});
  }

  findById(Id: number): Observable<any>{
    return this.http.get<any>(this.apiHost + "api/User/" + Id, { headers : this.headers});
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/User/login', data, {headers: this.headers})
    .pipe(map((res) => {
      console.log(res);
      console.log('Login success');
      this.access_token = res.content;
      localStorage.setItem("jwt", res.content);
      return this.access_token;
     }));
  }

  logout() {
    this.currentUser = new User();
    localStorage.removeItem("jwt");
    this.access_token = '';
    this.router.navigate(['/pages/login']);
  }

  decoderToken(accessToken : any) {
    return this.decoded_token = jwtDecode(this.access_token);
  }

  public getToken() {
    return localStorage.getItem('jwt');
  }

  getCurrentUser() : Observable<User> {
    this.access_token = this.getToken();
    this.decoded_token = this.decoderToken(this.access_token);
    return this.findById(this.decoded_token.id);
  }

  public getCurrentUserId() {
    this.access_token = this.getToken();
    this.decoded_token = this.decoderToken(this.access_token);
    return this.decoded_token.id;
  }
  
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (false) {
      return true;
    } else {
      return this.router.parseUrl('pages/login');
    }
  }
}



