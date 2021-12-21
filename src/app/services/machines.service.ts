import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  apiUrl: string = 'http://localhost:8080/api/machine/listAll';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }


   list(): Observable<any> {
      return this.httpClient.get(this.apiUrl).pipe(
        catchError(this.handleError)
      );
  }

  getMachine(id: any): Observable<any> {
      return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
        catchError(this.handleError)
      );
    }

      create(data: any): Observable<any> {
        return this.httpClient.post(this.apiUrl, data).pipe(
          catchError(this.handleError)
        );
      }

  // Edit/ Update
    update(id: any, data: any): Observable<any> {
      return this.httpClient.put(`${this.apiUrl}/${id}`, data).pipe(
        catchError(this.handleError)
      );
    }

    // Delete
    delete(id: any): Observable<any> {
      return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
        catchError(this.handleError)
      );
    }

    // Search By Type
    filterByType(type: any): Observable<any> {
      return this.httpClient.get(`${this.apiUrl}?type_like=${type}`).pipe(
        catchError(this.handleError)
      );
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
      }


}
