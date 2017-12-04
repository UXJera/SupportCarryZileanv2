import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';


@Injectable()
export class RunesService {

  private runesUrl = './assets/json/runes.json';

  constructor(private http: Http) { }

  getData = (): Observable<Response> => {
    return this.http.get(this.runesUrl)
    .map(res => res.json());
  }

  runeDescription = false;
  discussion1 = false;

  toggleRuneDescription() {
    // console.log("Toggled set to: " + !this.runeDescription);
    return this.runeDescription = !this.runeDescription;
  }

  toggleDiscussion1() {
    // console.log("Toggled set to: " + !this.discussion1);
    return this.discussion1 = !this.discussion1;
  }
}
