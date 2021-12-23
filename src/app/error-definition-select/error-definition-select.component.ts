import { Component, OnInit, Input} from '@angular/core';
import { ErrorDefinitionService } from "../services/error-definition.service";
import { ErrorDefinition } from "../models/error-definition";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorQueryDto } from "../models/error-query-dto";

@Component({
  selector: 'app-error-definition-select',
  templateUrl: './error-definition-select.component.html',
  styleUrls: ['./error-definition-select.component.scss']
})
export class ErrorDefinitionSelectComponent implements OnInit {

    @Input() dto : ErrorQueryDto ;
   selectedErrorDefinition : string = '';
   errorDefinitions: ErrorDefinition[] =[]


   constructor( private errorDefinitionService : ErrorDefinitionService) { }

         ngOnInit(): void {
         this.getErrorDefinitions();
     };

     getErrorDefinitions(): void {
         this.errorDefinitionService.list()
           .subscribe(
             (errorDefinitions: ErrorDefinition[]) => {
               this.errorDefinitions = errorDefinitions;
             },
             (error: any) => {
               console.log(error);
             });
       }
 }

