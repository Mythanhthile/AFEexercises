import { Injectable } from '@angular/core';
import { Client } from './client/client-details/client-details.component';
import { catchError, Observable, retry, retryWhen, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root' // Indicates that this service can be injected at the root level
})
export class ClientService {
  host = 'http://localhost:3000/exercise/client'; // Define the base URL for HTTP requests

  constructor(private httpClient: HttpClient) { } // Constructor that injects the HttpClient

  // Method to fetch a list of clients
  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.host) // Make an HTTP GET request to the specified URL
      .pipe(
        catchError((e: HttpErrorResponse) => {
          console.error(e.message); // Log the error message
          return throwError(() => e); // Rethrow the error as an observable
        }),
        retry(5) // Retry the request up to 5 times in case of failures
      );
  }
}
