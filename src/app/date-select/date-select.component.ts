import {Component, Input, OnInit} from '@angular/core';
import {ErrorQueryDto} from "../models/error-query-dto";
import {FlatPickrOutputOptions} from 'angularx-flatpickr/flatpickr.directive';


@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss']
})
export class DateSelectComponent implements OnInit {

  @Input() dto: ErrorQueryDto;
  selectedDate : Date;
  minDate : Date;
  maxDate : Date;
  machine:any


  constructor() {

  }

  ngOnInit(): void {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 1);

    this.minDate.setDate(this.minDate.getDate() - 90);

  }

  updateDates($event : FlatPickrOutputOptions){
     this.dto.startDate =$event.selectedDates[0];
     this.dto.endDate =$event.selectedDates[1];
  }


}
