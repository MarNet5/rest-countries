import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
    countries$ = new Observable<any>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.apiService.getAllCountries();
  }

}
