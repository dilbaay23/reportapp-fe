import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorQueryDtoService {

   apiUrl: string = 'http://localhost:8080/report';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

    create(data: any): Observable<any> {
          return this.httpClient.post(`${this.apiUrl}/query`, data).pipe(
            catchError(this.handleError)
          );
        }
}
