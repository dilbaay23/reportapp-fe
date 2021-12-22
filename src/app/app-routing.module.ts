import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MachinesComponent } from "./machines/machines.component";
import { CreateMachineComponent } from "./create-machine/create-machine.component";
import { DetailMachineComponent } from "./detail-machine/detail-machine.component";
import { CreateErrorDefinitionComponent } from "./create-error-definition/create-error-definition.component";
import { DetailErrorDefinitionComponent } from "./detail-error-definition/detail-error-definition.component";
import { ErrorDefinitionsComponent } from "./error-definitions/error-definitions.component";
import { ErrorsComponent } from "./errors/errors.component";
import { DetailErrorComponent } from "./detail-error/detail-error.component";

import { AuthGuard } from '@auth0/auth0-angular';



const routes: Routes = [ { path: 'machines', component: MachinesComponent, canActivate: [AuthGuard], },
                         { path: 'errors', component: ErrorsComponent , canActivate: [AuthGuard],},
                         { path: 'error-definitions', component: ErrorDefinitionsComponent,  canActivate: [AuthGuard], },
                         { path: 'createMachine', component: CreateMachineComponent,  canActivate: [AuthGuard], },
                         { path: 'createErrorDefinition', component: CreateErrorDefinitionComponent ,  canActivate: [AuthGuard],},
                         { path: 'detailMachine/:id', component: DetailMachineComponent,  canActivate: [AuthGuard], },
                         { path: 'detailErrorDefinition', component: DetailErrorDefinitionComponent ,  canActivate: [AuthGuard],},
                         { path: 'detailError/:id', component: DetailErrorComponent ,  canActivate: [AuthGuard],},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
