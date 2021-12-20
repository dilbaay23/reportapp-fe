import { Component, OnInit } from '@angular/core';
import { MachinesService } from "../services/machines.service";

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  machines : any;

  constructor( private machinesService : MachinesService) { }
      ngOnInit(): void {
      this.getMachines();
  };

  getMachines(): void {
      this.machinesService.getJSON()
        .subscribe(
          (machines: any) => {
            this.machines = machines;
          },
          (error: any) => {
            console.log(error);
          });
    }

}
