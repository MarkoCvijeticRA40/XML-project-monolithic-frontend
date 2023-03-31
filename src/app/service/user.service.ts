import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  access_token  : string = '';
  currentUser!:any;

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/User', user , {headers: this.headers});
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/User/login', data, {headers: this.headers})
    .pipe(map((res) => {
      console.log(res);
      console.log('Login success');
      localStorage.setItem("jwt", res.content);
     }));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("jwt");
    this.access_token = '';
    //this.router.navigate(['/login']);
  }

  getToken() {
    return this.access_token;
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }
}
