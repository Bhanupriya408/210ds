import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Student } from './Student';

@Injectable({
  providedIn: 'root',
})
export class StdserviceService {
  private url: string = 'http://localhost:8080/sprngmyproj/student';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getStudentFromService(): Observable<Student[]> {
    return this.http
      .get<Student[]>(this.url + '/stdlist')
      .pipe(retry(1), catchError(this.handleError));
  }

  getStudent(sid: any): Observable<Student> {
    return this.http
      .get<Student>(this.url + '/stdlist/' + sid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  addStudent(student: any): Observable<Student> {
    console.log(student);
    return this.http
      .post<Student>(
        this.url + '/addStd',
        JSON.stringify(student),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateStudent(student: any): Observable<Student> {
    console.log(student);
    return this.http
      .put<Student>(
        this.url + '/updateStd',
        JSON.stringify(student),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteStudent(sid: number): Observable<Student> {
    console.log(sid + ' from deleteStudent()');
    return this.http
      .delete<Student>(this.url + '/deleteStd/' + sid, this.httpOptions)
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
