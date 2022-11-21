import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Country } from '../models/country';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
    countries$ = new Observable<Country[]>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.apiService.getAllCountries();
  }

}
