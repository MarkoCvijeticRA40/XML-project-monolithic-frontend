import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  access_token  : any = '';
  decoded_token : any;
  currentUser!:any;

  constructor(private http: HttpClient) { }

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
     }));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("jwt");
    this.access_token = '';
    //this.router.navigate(['/login']);
  }

  decoderToken(accessToken : string) {
    return this.decoded_token = jwtDecode(this.access_token);
  }

  getToken() {
    
    const token = localStorage.getItem('jwt');

    return token;

  }

}
