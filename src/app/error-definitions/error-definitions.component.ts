import { Component, OnInit } from '@angular/core';
import { ErrorDefinitionService } from "../services/error-definition.service";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-error-definitions',
  templateUrl: './error-definitions.component.html',
  styleUrls: ['./error-definitions.component.scss']
})
export class ErrorDefinitionsComponent implements OnInit {

  errorDefinitions : any;
  currentErrorDefinition:any;
  currentIndex = -1;
  searchErrorCode = '';

  constructor( private errorDefinitionService : ErrorDefinitionService) { }
          ngOnInit(): void {
          this.getErrorDefinitions();
      };

      getErrorDefinitions(): void {
            this.errorDefinitionService.list()
              .subscribe(
                (errorDefinitions: any) => {
                  this.errorDefinitions = errorDefinitions;
                },
                (error: any) => {
                  console.log(error);
                });
          }
      deleteErrorDefinitions(errorCode:number){
              this.errorDefinitionService.delete(errorCode)
              .subscribe(
                response => {
                  this.getErrorDefinitions();
                },
                error => {
                  console.log(error);
                });
            }

            // Search items
      searchByErrorCode(): void {
                this.errorDefinitionService.filterByErrorCode(this.searchErrorCode)
                  .subscribe(
                    errorDefinitions => {
                      this.errorDefinitions = errorDefinitions;
                    },
                    error => {
                      console.log(error);
                    });
              }

}


