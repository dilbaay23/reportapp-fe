import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorDefinitionService {

  apiUrl: string = 'http://localhost:8080/api/errorDefinition/listAll';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

   list(): Observable<any> {
          return this.httpClient.get(this.apiUrl).pipe(
            catchError(this.handleError)
          );
      }

      getErrorDefinition(errorCode : any): Observable<any> {
            return this.httpClient.get(`${this.apiUrl}/${errorCode}`).pipe(
              catchError(this.handleError)
            );
          }

      // Edit/ Update
          update(errorCode : any, data: any): Observable<any> {
            return this.httpClient.put(`${this.apiUrl}/${errorCode}`, data).pipe(
              catchError(this.handleError)
            );
          }

      // Delete
         delete(errorCode : any): Observable<any> {
           return this.httpClient.delete(`${this.apiUrl}/${errorCode}`).pipe(
             catchError(this.handleError)
           );
         }

         // Search By Code
         filterByErrorCode(errorCode : any): Observable<any> {
           return this.httpClient.get(`${this.apiUrl}?errorCode_like=${errorCode}`).pipe(
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

