import { Component, OnInit } from '@angular/core';
import { MachinesService } from "../services/machines.service";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  machines : any;
  currentMachine:any;
  currentIndex = -1;
  searchType = '';

  constructor( private machinesService : MachinesService) { }
      ngOnInit(): void {
      this.getMachines();
  };

  getMachines(): void {
      this.machinesService.list()
        .subscribe(
          (machines: any) => {
            this.machines = machines;
          },
          (error: any) => {
            console.log(error);
          });
    }

    deleteMachine(id:number){
        this.machinesService.delete(id)
        .subscribe(
          response => {
            this.getMachines();
          },
          error => {
            console.log(error);
          });
      }

      // Search items
        searchByType(): void {
          this.machinesService.filterByType(this.searchType)
            .subscribe(
              machines => {
                this.machines = machines;
              },
              error => {
                console.log(error);
              });
        }


}
