import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders} from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  //Andani
  private _viewShopsUrl = 'http://168.172.187.100:3000/user/getShops';
  private _customerPg = 'http://168.172.187.100:3000/user/getMenu';

  constructor(private http: HttpClient) { }
  //Andani
  viewShop(){
    return this.http.get<any>(this._viewShopsUrl);
  }
  viewKotas(){
    return this.http.get<any>(this._customerPg);
  }
}
