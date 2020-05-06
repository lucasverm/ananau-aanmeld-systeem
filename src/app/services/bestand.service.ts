import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BestandService {

  constructor(private http: HttpClient) { }

  public postFile$(bestanden: any[]): Observable<{}> {
    return this.http.post(`${environment.apiUrl}/bestand`, bestanden);
  }

  public getFile$(applicatieId: String, folder: string, bestandNaam: string): Observable<{}> {
    return this.http.get(`${environment.apiUrl}/bestand/${applicatieId}/${folder.toLowerCase()}/${bestandNaam}`, {});
  }


}
