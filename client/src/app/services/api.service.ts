import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    const url = `${environment.baseUrl}/all`;
    return this.http.get(url);
   }
}
