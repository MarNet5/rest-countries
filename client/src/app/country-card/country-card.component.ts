import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, tap, mergeMap } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Country, Currency, Language } from '../models/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  country$: Observable<Country>;
  borderCountries$: Observable<Country[]>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this.apiService.getCountryByName(params.country)
      .pipe(tap((res) => console.log(res),
      ),
      mergeMap((res: any) => {
        this.borderCountries$ = this.apiService.getCountryByCode(res.borders);
        return of(res);
      })
      );
    });

  }
  displayCurrencies(currencies: Currency[]){
    return currencies.map(currency => currency.name).join(', ')
  }
  displayLanguages(languages: Language[]){
    return languages.map(language => language.name).join(', ')
  }


}


