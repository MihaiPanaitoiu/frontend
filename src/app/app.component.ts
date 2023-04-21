import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private router: Router, private route: ActivatedRoute) { }
  title = 'frontend';
  appPages = [
    {
      title: 'Schedule',
      url: '/app/tabs/schedule',
      icon: 'calendar'
    },
    {
      title: 'Speakers',
      url: '/app/tabs/speakers',
      icon: 'people'
    },
    {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];

  canGoBack() {
    if (this.router.url.split('/').length >= 3) {
      return true;
    } else {
      return false;
    }
  }
}
