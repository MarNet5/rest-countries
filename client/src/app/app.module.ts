import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HttpClientModule } from "@angular/common/http";
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { FormsModule } from '@angular/forms';
import { CountryFilterComponent } from './country-filter/country-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryCardComponent,
    CountryFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
