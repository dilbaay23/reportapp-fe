import { Component, OnInit , Input} from '@angular/core';
import { MachinesService } from "../services/machines.service";
import { Machine } from "../models/machine";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorQueryDto } from "../models/error-query-dto";

@Component({
  selector: 'app-machine-select',
  templateUrl: './machine-select.component.html',
  styleUrls: ['./machine-select.component.scss']
})
export class MachineSelectComponent implements OnInit {

  @Input() dto : ErrorQueryDto ;
  selectedMachine : string = '';
  machines: Machine[] =[]


  constructor( private machinesService : MachinesService) { }

        ngOnInit(): void {
        this.getMachines();
    };

    getMachines(): void {
        this.machinesService.list()
          .subscribe(
            (machines: Machine[]) => {
              this.machines = machines;
            },
            (error: any) => {
              console.log(error);
            });
      }
}
