import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  apiUrl: string = 'http://localhost:4200/machine';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private _jsonURL = '../machine.json';

  constructor(private httpClient: HttpClient) { }
  list(): Observable<any> {
      return this.httpClient.get(this.apiUrl).pipe(
        catchError(this.handleError)
      );
    }
    public getJSON(): Observable<any> {
      return this.httpClient.get(this._jsonURL);

    }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        return throwError(
          'Something bad happened; please try again later.');
      };


}
