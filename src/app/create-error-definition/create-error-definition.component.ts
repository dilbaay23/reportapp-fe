import { Component, OnInit } from '@angular/core';
import { ErrorDefinitionService } from "../services/error-definition.service";

@Component({
  selector: 'app-create-error-definition',
  templateUrl: './create-error-definition.component.html',
  styleUrls: ['./create-error-definition.component.scss']
})
export class CreateErrorDefinitionComponent implements OnInit {

  errorDefinition = {
        errorCode : '',
        errorDetail : ''
  };

  isErrorDefinitionAdded = false;

  constructor(private errorDefinitionService : ErrorDefinitionService) { }

  ngOnInit(): void {
  }

// Add New
    addErrorDefinition(): void {
      const data = {
        errorCode : this.errorDefinition.errorCode,
        errorDetail : this.errorDefinition.errorDetail

      };
      if (!data.errorCode) {
        alert('Please add error Code!');
        return;
      }

       if (!data.errorDetail) {
              alert('Please add error Detail!');
              return;
       }

      this.errorDefinitionService.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.isErrorDefinitionAdded = true;
          },
          error => {
            console.log(error);
          });
    }

    // Reset on adding new
    newErrorDefinition(): void {
      this.isErrorDefinitionAdded = false;
      this.errorDefinition = {
        errorCode : '',
        errorDetail : ''
      };
    }

  }
