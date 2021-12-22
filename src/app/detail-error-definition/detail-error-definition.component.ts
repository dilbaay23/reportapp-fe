import { Component, Input, OnInit } from '@angular/core';
import { ErrorDefinitionService } from 'src/app/services/error-definition.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-error-definition',
  templateUrl: './detail-error-definition.component.html',
  styleUrls: ['./detail-error-definition.component.scss']
})
export class DetailErrorDefinitionComponent implements OnInit {

@Input() viewMode = false;

  @Input() currentErrorDefinition: any = {
    errorCode: '',
    errorDetail: ''
  };

  message = '';

  constructor(
    private errorDefinitionService: ErrorDefinitionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getErrorDefinition(this.route.snapshot.params["errorCode"]);
    }
  }

  getErrorDefinition(errorCode: any): void {
    this.errorDefinitionService.getErrorDefinition(errorCode)
      .subscribe({
        next: (data) => {
          this.currentErrorDefinition = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }



  updateErrorDefinition(): void {
    this.message = '';

    this.errorDefinitionService.update(this.currentErrorDefinition.errorCode, this.currentErrorDefinition)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Error Definition was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteErrorDefinition(): void {
    this.errorDefinitionService.delete(this.currentErrorDefinition.errorCode)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/query']);
        },
        error: (e) => console.error(e)
      });
  }
  }
