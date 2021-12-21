import { Component, OnInit } from '@angular/core';
import { ErrorService } from "../services/error.service";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  errors : any;
  currentError:any;
  currentIndex = -1;
  searchType = '';

  constructor( private errorService : ErrorService) { }
        ngOnInit(): void {
        this.getErrors();
    };

    getErrors(): void {
          this.errorService.list()
            .subscribe(
              (errorDefinitions: any) => {
                this.errors = errors;
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
              this.errorService.filterByErrorCode(this.searchType)
                .subscribe(
                  errors => {
                    this.errors = errors;
                  },
                  error => {
                    console.log(error);
                  });
            }



}
