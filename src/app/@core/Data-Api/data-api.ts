import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


export abstract class AbstractDataApi {
  abstract get(url: string, request: any): Observable<any>;
  abstract post<T>(url: string, request: any): Observable<any>;
  abstract put(url: string, request: any): Observable<any>;
  abstract delete(url: string, request: any): Observable<any>;
}

@Injectable({
  providedIn: 'root'
})
export class DataApi extends AbstractDataApi {
  constructor(private http: HttpClient) {
    super();
  }
  get(url: string, request: any): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/${url}`, request);
  }
  post<T>(url: string, request: any): Observable<any> {
    return this.http.post<T>(`${environment.baseApiUrl}/${url}`, request, {observe: 'response'});
  }
  put(url: string, request: any): Observable<any> {
    return this.http.put(`${environment.baseApiUrl}/${url}`, request);
  }
delete(url: string, request: any): Observable<any> {
    return this.http.delete(`${environment.baseApiUrl}/${url}`, request);
  }
}
