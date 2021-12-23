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
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateErrorDefinitionComponent } from './create-error-definition/create-error-definition.component';
import { DetailMachineComponent } from './detail-machine/detail-machine.component';
import { DetailErrorComponent } from './detail-error/detail-error.component';
import { DetailErrorDefinitionComponent } from './detail-error-definition/detail-error-definition.component';
import { ReportComponent } from './report/report.component';
import { MachineSelectComponent } from './machine-select/machine-select.component';
import { ErrorDefinitionSelectComponent } from './error-definition-select/error-definition-select.component';
import { DateSelectComponent } from './date-select/date-select.component';



 let httpInterceptor = {
    allowedList: [
      {
        uri: `http://localhost:8080/*`
      }
    ],
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
    DetailErrorDefinitionComponent,
    ReportComponent,
    MachineSelectComponent,
    ErrorDefinitionSelectComponent,
    DateSelectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    FlatpickrModule.forRoot(),
    AuthModule.forRoot({
          domain: 'moonismoon.eu.auth0.com',
          clientId: 'qwSoP6qhcgpA4RZIhUu8GB1GITOIhK5C',
          audience: "localhost",
          httpInterceptor : httpInterceptor,
        }),
  ],
  providers: [  {provide: HTTP_INTERCEPTORS,
                    useClass: AuthHttpInterceptor,
                    multi: true,
                  }
                  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
