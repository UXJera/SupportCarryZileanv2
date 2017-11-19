import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Request } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent implements OnInit {

  // @ViewChild('f') signupForm: NgForm;
  //
  // data: any = {};
  // results: string[];
  // private apiUrl = 'http://omdbapi.com/?s=';
  // private search: string;
  // private apiKey = '&apikey=thewdb';
  //
  // onSubmit() {
  //   this.search = this.signupForm.value.search; // Change search value to the form value
  //   this.http.get(this.apiUrl + this.search + this.apiKey).subscribe(data => { // Api call w/ url
  //     this.results = data.json(); // return the results to our local variable
  //   })
  // }
  //
  //
  // constructor(private http: Http) {}


  ngOnInit() {

  }

}
