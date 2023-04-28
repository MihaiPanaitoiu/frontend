import {Observable} from "rxjs";
import {AbstractDataApi} from "../Data-Api/data-api";
import {Injectable} from "@angular/core";

export abstract class AbstractAuthService {
  abstract login(username: string, password: string): Observable<any>;
  abstract logout(): Observable<any>;
}

@Injectable(
  {providedIn: 'root'}
)
export class AuthService implements AbstractAuthService {
  constructor(private dataApi: AbstractDataApi) {}
  login(username: string, password: string): Observable<any> {
    return this.dataApi.post<any>('login', {username, password});
  }
  logout(): Observable<any> {
    return this.dataApi.get('logout', {})
  }
}
