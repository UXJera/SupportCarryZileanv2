import { Component, OnInit } from '@angular/core';
import { RunesService } from '../runes.service';

@Component({
  selector: 'app-runes-utility',
  templateUrl: './runes-utility.component.html',
  styleUrls: ['./runes-utility.component.scss'],
})
export class RunesUtilityComponent implements OnInit {

  // runesData: any;
  // domination: any;
  //
  // constructor(private runesService: RunesService) {
  //   this.runesService.getData().subscribe(
  //     (res) => {
  //       this.runesData = res;
  //       this.domination = this.runesData.domination;
  //       console.log(this.runesData.domination);
  //     },
  //      (error) => console.log("error : " + error),
  //   )
  // }

  ngOnInit() {
  }

}
