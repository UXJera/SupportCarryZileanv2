import { Component, OnInit } from '@angular/core';
import { RunesService } from './runes.service';
import { Guide } from '../guide.model';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {

  componentSelected: boolean;

  itemGuides: Guide[] = [
    new Guide(0, 'utility', ''),
    new Guide(1, 'offensive', ''),
    new Guide(2, 'defensive', ''),
    new Guide(3, 'split push', '')
  ];

  dominationIcon;
  sorceryIcon;
  inspirationIcon;
  resolveIcon;
  precisionIcon;

  constructor(private runesService: RunesService) {
    this.dominationIcon = this.runesService.domination.primaryImage;
    this.sorceryIcon = this.runesService.sorcery.primaryImage;
    this.inspirationIcon = this.runesService.inspiration.primaryImage;
    this.resolveIcon = this.runesService.resolve.primaryImage;
    this.precisionIcon = this.runesService.precision.primaryImage;
 }

  onSelect(value) {
    for (const items of this.itemGuides) {
      items.selected = false;
    }
    this.componentSelected = value.index;
    value.selected = true;
  }

  article = {
    title: 'Runepage Setup',
    updated: 'Pre-Season 8'
  };

  ngOnInit() {
  }

}
