import { Component, OnInit  } from '@angular/core';
import { ErrorService } from "../services/error.service";
import { ErrorQueryDto } from "../models/error-query-dto";
import { Error } from "../models/error";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

   errorList : Error[]=[];

   errorQueryDto : ErrorQueryDto = new ErrorQueryDto() ;

  constructor(private errorService : ErrorService) { }

  ngOnInit(): void {
  }

  query(): void{

  this.errorService.query(this.errorQueryDto)
  .subscribe(
                (errorList: Error[]) => {
                  this.errorList = errorList;
                },
                (error: any) => {
                  console.log(error);
                });
  }

}
