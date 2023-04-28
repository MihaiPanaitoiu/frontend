import { Component, OnInit } from '@angular/core';
import {Preferences} from "@capacitor/preferences";
import {AbstractAccountService} from "../../../@core/services/account.service";
import {AbstractAuthService} from "../../../@core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  isLoggedIn: boolean = false;
  userId: string = '';
  userData: any = {};

  constructor(
    private accountService: AbstractAccountService,
    private authService: AbstractAuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkLoginStatus().then(() => {
      if (this.isLoggedIn) {
        this.updateUserData();
      }
    });
  }

  private checkLoginStatus = async () => {
    const userId = await Preferences.get({key: 'userId'});
    console.log(userId, 'userId');
    if (userId.value) {
      this.isLoggedIn = true;
      this.userId = JSON.parse(userId.value).id;
    } else {
      this.isLoggedIn = false;
      await Preferences.remove({key: 'userId'});
    }
  }

  logout() {
    Preferences.remove({key: 'userId'}).then(() => {
      this.isLoggedIn = false;
    }).then(() => {
      this.authService.logout().subscribe((res) => {
        this.router.navigate(['/recipes']);
      });
    });
  }

  private updateUserData() {
    console.log(this.userId, 'userIdESDA')
    this.accountService.getUserData(this.userId).subscribe((res) => {
      this.userData = res;
    });
  }

  navigate(location: string) {
    this.router.navigate([location]);
  }
}
