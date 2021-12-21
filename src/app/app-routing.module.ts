import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from "./machines/machines.component";
import { ErrorsComponent } from "./errors/errors.component";
import { ErrorDefinitionsComponent } from "./error-definitions/error-definitions.component";



const routes: Routes = [ { path: 'machines', component: MachinesComponent },
                         { path: 'errors', component: ErrorsComponent },
                         { path: 'error-definitions', component: ErrorDefinitionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
