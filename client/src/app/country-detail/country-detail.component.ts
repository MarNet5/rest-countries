import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  @Input() country!: Country;

  constructor() { }

  ngOnInit(): void {
  }

}
