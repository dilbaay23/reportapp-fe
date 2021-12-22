import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from "./machines/machines.component";
import { ErrorsComponent } from "./errors/errors.component";
import { CreateMachineComponent } from "./create-machine/create-machine.component";
import { CreateErrorDefinitionComponent } from "./create-error-definition/create-error-definition.component";
import { ErrorDefinitionsComponent } from "./error-definitions/error-definitions.component";



const routes: Routes = [ { path: 'machines', component: MachinesComponent },
                         { path: 'errors', component: ErrorsComponent },
                         { path: 'error-definitions', component: ErrorDefinitionsComponent },
                         { path: 'createMachine', component: CreateMachineComponent },
                         { path: 'createErrorDefinition', component: CreateErrorDefinitionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
