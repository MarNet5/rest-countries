import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryCardComponent } from './country-card/country-card.component';

const routes: Routes = [
  {
    path: '', component: CountryListComponent,

  },
  {
    path: ':country', component: CountryCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
