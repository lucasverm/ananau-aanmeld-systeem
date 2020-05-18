import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BestandService {

  constructor(private http: HttpClient) { }

  public getFile$(applicatieId: String, folder: string, bestandNaam: string): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/bestand/${applicatieId}/${folder.toLowerCase()}/${bestandNaam}`, { responseType: 'blob' });
  }

  public postFile$(folder: string, bestandNaam: string, bestandData: File): Observable<{}> {
    return this.http.post(`${environment.apiUrl}/bestand/${folder.toLowerCase()}/${bestandNaam}`, this.bestandNaarFormData(bestandData));
  }

  private bestandNaarFormData(bestandData: File): FormData {
    const formData = new FormData();
    formData.append('bestand', bestandData, bestandData.name ? bestandData.name : 'bestand');
    return formData;
  }


}
