import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MachinesService } from 'src/app/services/machines.service';


@Component({
  selector: 'app-detail-machine',
  templateUrl: './detail-machine.component.html',
  styleUrls: ['./detail-machine.component.scss']
})
export class DetailMachineComponent implements OnInit {

  currentMachine: any;
    message = '';
    id= '';


    constructor(
      private machinesService: MachinesService,
      private route: ActivatedRoute,
      private router: Router,){ }

    ngOnInit(): void {

      this.message = '';
      this.getMachine(this.route.snapshot.paramMap.get('id'));
    }

    getMachine(id: string | null): void {
      this.machinesService.getMachine(id)
        .subscribe(
          (machine: null) => {
            this.currentMachine = machine;
            console.log(machine);
          },
          (error: any) => {
            console.log(error);
          });
    }

    setAvailableStatus(status: any): void {
      const data = {
        id: this.currentMachine.id,
        type: this.currentMachine.type,
        available: status
      };

      this.machinesService.update(this.currentMachine.id, data)
        .subscribe(
          response => {
            this.currentMachine.available = status;
            console.log(response);
          },
          error => {
            console.log(error);
          });
    }

    updateMachine(): void {
      this.machinesService.update(this.currentMachine.id, this.currentMachine)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The machine was updated!';
          },
          error => {
            console.log(error);
          });
    }

    deleteMachine(): void {
      this.machinesService.delete(this.currentMachine.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/listAll']);
          },
          error => {
            console.log(error);
          });
    }

  }
