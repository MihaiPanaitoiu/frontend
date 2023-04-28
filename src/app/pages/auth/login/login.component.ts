import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractAuthService} from "../../../@core/services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {catchError, of} from "rxjs";
import {Router} from "@angular/router";
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isAlertOpen: boolean = false;
  showPassword = false;
  inputType: string = 'password';

  constructor(private authService: AbstractAuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  performLogin() {
    const username = this.loginForm.controls.username.value ? this.loginForm.controls.username.value : '';
    const password = this.loginForm.controls.password.value ? this.loginForm.controls.password.value : '';
    this.authService.login(username, password)
      .pipe(
        catchError(err => of(err))
      )
      .subscribe(
        (res) => res.status === 200 ? this.handleLogin(res.body) : this.setOpen(true),
      );
  }

  handleLogin(val: any) {
    this.setObject(val).then(() => {
      this.router.navigateByUrl('/user/account', { skipLocationChange: true }).then(() => {
        this.router.navigate(['user/account']);
      });
    });
  }

  async setObject(value: any) {
    await Preferences.set({
      key: 'userId',
      value: JSON.stringify({
        id: value
      })
    });
  }
  setOpen(isOpen: boolean): void {
    this.isAlertOpen = isOpen;
  }
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }

  hidePassword(showPass: boolean) {
    return showPass ?  'hidden' :  'not-hidden';
  }

}
