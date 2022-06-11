import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from '../model/role';
import { SignupDto } from '../model/signup-dto';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly storageFieldName = 'current_user';

  private currentUserSubject: BehaviorSubject<User>;

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  public currentUser: Observable<User>;  
  
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(this.storageFieldName)));
    this.currentUser = this.currentUserSubject.asObservable();    
  }
  
  public isAuthenticated(): boolean {
    return !!this.currentUserSubject.value
  }
  
  public hasRole(role: Role): boolean {
    return this.currentUserSubject.value.authorities.some(c => c.authority.valueOf() === role.valueOf());
  }

  authenticate(username: string, password: string) : Observable<any> {
    const headers = new HttpHeaders({ authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>('/api/v1/login', {headers: headers})
    .pipe(map(resp => {
        if ('username' in resp) {      
          localStorage.setItem(this.storageFieldName, JSON.stringify(resp));
          this.currentUserSubject.next(resp);
          return resp;
        }
        throw new Error('Authentication error');
      })
    )     
  }

  logout() {
    localStorage.removeItem(this.storageFieldName);
    this.currentUserSubject.next(null);
    this.http.post('/api/v1/logout', {}).subscribe();    
  }

  signUp(signupDto: SignupDto) : Observable<number> {
    return this.http.post<number>('/api/v1/register', signupDto);
  }

}