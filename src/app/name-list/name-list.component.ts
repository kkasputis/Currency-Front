import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency/currency.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {
  names: Array<any>;
  CurrencyService: any;
  cur: any = {};
  response: any= {};
  defaultValue: string = "1";
  showResult: boolean = false;


  constructor(
    private currencyService: CurrencyService,
    private router: Router) { }


  ngOnInit() {
    this.currencyService.getNames().subscribe(data => {
      this.names = data;
    });
    this.cur.sum = "1";
    this.cur.from = "EUR";
    this.cur.to = "USD";
  }
  

  calculate(form: NgForm) {
    console.log(form);
    this.currencyService.calculate(form).subscribe(result => {
      this.response = result;
      this.showResult = true;
    }, error => console.error(error));
  }

}
