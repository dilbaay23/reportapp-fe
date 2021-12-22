import { Component, Input, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-error',
  templateUrl: './detail-error.component.html',
  styleUrls: ['./detail-error.component.scss']
})
export class DetailErrorComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentError: any = {
    id: '',
    errorCode: '',
    machineId: '',
    date: '',
  };

  message = '';

  constructor(
    private errorService: ErrorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getError(this.route.snapshot.params["id"]);
    }
  }

  getError(id: string): void {
    this.errorService.getError(id)
      .subscribe({
        next: (data) => {
          this.currentError = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }



  updateError(): void {
    this.message = '';

    this.errorService.update(this.currentError.id, this.currentError)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Error was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteError(): void {
    this.errorService.delete(this.currentError.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/errors/listAll']);
        },
        error: (e) => console.error(e)
      });
  }



}
