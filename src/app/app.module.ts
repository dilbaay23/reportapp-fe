import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import the module from the SDK
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ErrorsComponent } from './errors/errors.component';
import { MachinesService } from "./services/machines.service";
import { ErrorDefinitionsComponent } from './error-definitions/error-definitions.component';
import { MachinesComponent } from './machines/machines.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { FooterComponent } from './footer/footer.component';
import { CreateMachineComponent } from './create-machine/create-machine.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateErrorDefinitionComponent } from './create-error-definition/create-error-definition.component';
import { DetailMachineComponent } from './detail-machine/detail-machine.component';
import { DetailErrorComponent } from './detail-error/detail-error.component';
import { DetailErrorDefinitionComponent } from './detail-error-definition/detail-error-definition.component';

 let httpInterceptor = {
    allowedList: [`http://localhost:8080/*`],
  };


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ErrorsComponent,
    ErrorDefinitionsComponent,
    MachinesComponent,
    LeftMenuComponent,
    FooterComponent,
    CreateMachineComponent,
    CreateErrorDefinitionComponent,
    DetailMachineComponent,
    DetailErrorComponent,
    DetailErrorDefinitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
          domain: 'moonismoon.eu.auth0.com',
          clientId: 'qwSoP6qhcgpA4RZIhUu8GB1GITOIhK5C',
          httpInterceptor : httpInterceptor,
        }),
  ],
    providers: [],

/*   providers: [  {provide: HTTP_INTERCEPTORS,
                    useClass: AuthHttpInterceptor,
                    multi: true,
                  }], */
  bootstrap: [AppComponent]
})
export class AppModule { }
