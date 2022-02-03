import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Route } from './Route';
@Injectable({
  providedIn: 'root'
})
export class RteserviceService {

  private url: string = 'http://localhost:8080/sprngmyproj/route';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getRouteFromService(): Observable<Route[]> {
    return this.http
      .get<Route[]>(this.url + '/rtelist')
      .pipe(retry(1), catchError(this.handleError));
  }

  getRoute(rid: any): Observable<Route> {
    return this.http
      .get<Route>(this.url + '/rtelist/' + rid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  addRoute(route: any): Observable<Route> {
    console.log(route);
    return this.http
      .post<Route>(
        this.url + '/addRte',
        JSON.stringify(route),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateRoute(route: any): Observable<Route> {
    console.log(route);
    return this.http
      .put<Route>(
        this.url + '/updateRte',
        JSON.stringify(route),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteRoute(rid: number): Observable<Route> {
    console.log(rid + ' from deleteRoute()');
    return this.http
      .delete<Route>(this.url + '/deleteRte/' + rid, this.httpOptions)
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
