import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss']
})
export class CountryFilterComponent {
  flag = false;

  @Input()
  placeholder: string;

  @Input()
   values: string[];

  @Input()
   value: string | undefined;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

 select(value: string ){
   this.valueChange.emit(value)
 }
  changeOptions(){
    this.flag = !this.flag;
  }
}
