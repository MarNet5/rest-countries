import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Country } from '../models/country';

const REGION = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
    searchFilter?: string;
    source: Country[];
    regionFilter?: string;
    regionOptions = REGION;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllCountries().subscribe(countries => {
      this.source = countries;

  });
  }
  get countries(){
    return this.source
    ? this.source.filter((country) =>
      this.searchFilter
      ? country.name
      .toLowerCase()
      .includes(this.searchFilter.toLowerCase())
      : country
      ).filter(country =>
        this.regionFilter
        ? country.region.includes(this.regionFilter)
        : country
      )
      : this.source;
  }

}
