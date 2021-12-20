import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ErrorsComponent } from './errors/errors.component';
import { ErrorDefinitionsComponent } from './error-definitions/error-definitions.component';
import { MachinesComponent } from './machines/machines.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ErrorsComponent,
    ErrorDefinitionsComponent,
    MachinesComponent,
    LeftMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
          domain: 'moonismoon.eu.auth0.com',
          clientId: 'qwSoP6qhcgpA4RZIhUu8GB1GITOIhK5C'
        }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
