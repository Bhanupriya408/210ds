import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Driver } from './Driver';

@Injectable({
  providedIn: 'root'
})
export class DvrserviceService {
  private url: string = 'http://localhost:8080/sprngmyproj/driver';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  addDriver(driver: any): Observable<Driver> {
    console.log(driver);
    return this.http
      .post<Driver>(
        this.url + '/addDvr',
        JSON.stringify(driver),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updateDriver(driver: any): Observable<Driver> {
    console.log(driver);
    return this.http
      .put<Driver>(
        this.url + '/updateDvr',
        JSON.stringify(driver),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  getDriverFromService(): Observable<Driver[]> {
    return this.http
      .get<Driver[]>(this.url + '/dvrlist')
      .pipe(retry(1), catchError(this.handleError));
  }
  getDriver(did: any): Observable<Driver> {
    return this.http
      .get<Driver>(this.url + '/dvrlist/' + did, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  
  deleteDriver(did: number): Observable<Driver> {
    console.log(did + ' from deleteDriver()');
    return this.http
      .delete<Driver>(this.url + '/deleteDvr/' + did, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
