import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpellsService {

  private spellUrl = './assets/json/spell-data.json';

  constructor(private http: Http) { }

  getData = (): Observable<Response> => {
    return this.http.get(this.spellUrl)
    .map(res => res.json());
  }

}
