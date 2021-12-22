import { Component, OnInit } from '@angular/core';
import { MachinesService } from "../services/machines.service";

@Component({
  selector: 'app-create-machine',
  templateUrl: './create-machine.component.html',
  styleUrls: ['./create-machine.component.scss']
})
export class CreateMachineComponent implements OnInit {

   machine = {
           type : ''
    };

  isMachineAdded = false;


  constructor(private machinesService : MachinesService) { }

  ngOnInit(): void {
  }

  // Add New
  addMachine(): void {
      const data = {
        type : this.machine.type
      };
      if (!data.type) {
        alert('Please add type!');
        return;
      }

      this.machinesService.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.isMachineAdded = true;
          },
          error => {
            console.log(error);
          });
    }

    // Reset on adding new
    newMachine(): void {
      this.isMachineAdded = false;
      this.machine = {
        type: ''
      };
    }

  }
