import {Observable} from "rxjs";
import {AbstractDataApi} from "../Data-Api/data-api";
import {Injectable} from "@angular/core";

export abstract class AbstractAccountService {
  abstract getUserData(userId: string): Observable<any>;
}

@Injectable({ providedIn: 'root' })
export class AccountService extends AbstractAccountService {
  constructor(private api: AbstractDataApi) {
    super();
  }
  getUserData(userId: string): Observable<any> {
    return this.api.get(`user/${userId}`, {userId});
  }
}
