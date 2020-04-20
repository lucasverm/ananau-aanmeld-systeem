import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Applicatie } from '../modals/applicatie';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicatieService {

  constructor(private router: Router, private http: HttpClient) { }
  public applicate: Applicatie;

  postApplicatie$(applicatie: Applicatie): Observable<Applicatie> {
    return this.http.post<Applicatie>(`${environment.apiUrl}/Applicatie/`,
      applicatie).pipe(
        catchError(error => {
          return throwError(error);
        }),
        map((item: any): any => {
          item = Applicatie.fromJSON(item)
          this.applicate = item;
          return item;
        })
      );
  }

  putApplicatie$(applicatie: Applicatie): Observable<Applicatie> {
    return this.http.put<Applicatie>(`${environment.apiUrl}/Applicatie/${applicatie.id}`,
      applicatie).pipe(
        catchError(error => {
          return throwError(error);
        }),
        map((item: any): any => {
          item = Applicatie.fromJSON(item)
          this.applicate = item;
          return item;
        })
      );
  }

  getApplicatieById$(id: string): Observable<Applicatie> {
    return this.http.get<Applicatie>(`${environment.apiUrl}/Applicatie/${id}`).pipe(
      catchError(error => {
        return throwError(error);
      }),
      map((item: any): any => {
        item = Applicatie.fromJSON(item)
        return item;
      })
    );
  }

  getApplicatieByEmailAndAchternaam$(email: string, achternaam: string): Observable<Applicatie> {
    return this.http.get<Applicatie>(`${environment.apiUrl}/Applicatie/getByEmailEnAchternaam/${email}/${achternaam}`).pipe(
      catchError(error => {
        return throwError(error);
      }),
      map((item: any): any => {
        item = Applicatie.fromJSON(item)
        this.applicate = item;
        return item;
      })
    );
  }

  getAllApplicaties$(): Observable<Applicatie[]> {
    return this.http.get<Applicatie[]>(`${environment.apiUrl}/Applicatie/getAll`).pipe(
      catchError(error => {
        return throwError(error);
      }),
      map((list: any[]): any[] => {
        list = list.map(Applicatie.fromJSON)
        return list;
      })
    );
  }
}
