import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from '../../app.config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public getCities() : Observable<any> {
    // return this.http.get(`${CONFIG.API}/cities`)
    return this.http.get('./app/shared/jsons/cities.json')
      .map((res:Response) => {return res;})
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}