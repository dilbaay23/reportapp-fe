import { Component, OnInit } from '@angular/core';
import { ErrorService } from "../services/error.service";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  errorList : any;
  currentError:any;
  currentIndex = -1;
  searchErrorCode = '';

  constructor( private errorService : ErrorService) { }
        ngOnInit(): void {
        this.getErrors();
    };

    getErrors(): void {
          this.errorService.list()
            .subscribe(
              (errorList: any) => {
                this.errorList = errorList;
              },
              (error: any) => {
                console.log(error);
              });
        }
    deleteErrors(id:number){
            this.errorService.delete(id)
            .subscribe(
              response => {
                this.getErrors();
              },
              error => {
                console.log(error);
              });
          }

          // Search items
    searchByErrorCode(): void {
              this.errorService.filterByErrorCode(this.searchErrorCode)
                .subscribe(
                  errorList => {
                    this.errorList = errorList;
                  },
                  error => {
                    console.log(error);
                  });
            }



}
