import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router, NavigationEnd } from '@angular/router';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reportapp-fe';
  constructor(public auth: AuthService, public router: Router) {

      this.router.events.subscribe(event => {

        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      });
    }

}
