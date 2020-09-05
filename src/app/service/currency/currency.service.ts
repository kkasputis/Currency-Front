import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  response: any= {};
  constructor(private http: HttpClient) {
  }

  getNames(): Observable<any> {
    let resul: Observable<any>;
    resul = this.http.get('//localhost:8080/getnames');
    return resul;
   
  }
 
  calculate(selection: any): Observable<any> {
    let result: Observable<any>;
   
      result = this.http.post('//localhost:8080/calculate', selection);
      this.response = result;
    return result;
  }
}