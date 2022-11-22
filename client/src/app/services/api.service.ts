import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getAllCountries() {

    const url = `${environment.baseUrl}/all`;
    return this.http.get<Country[]>(url);
   }
   getCountryByName(name: string){
    const url = `${environment.baseUrl}/name/${name}`
    return this.http.get<Country[]>(url, {params: {name: name}}).pipe(
      map(([ res ]) => res)
    );
  }
   getCountryByCode(codes: string[] ){

    const url = `${environment.baseUrl}/${codes}`

    return this.http.get<Country[]>(url, {params: {codes: codes}});
  }
}
