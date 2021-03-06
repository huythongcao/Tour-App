import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss'],
})
export class TourCardComponent implements OnInit {
  @Input('data') tour;
  @Output('delete') delete = new EventEmitter();
  @Output('favourite') favouriteChange = new EventEmitter();
  limit: any = 250;

  constructor() {}

  ngOnInit(): void {}

  onDeleteClick() {
    this.delete.emit(this.tour);
  }

  onFavouriteClick() {
    this.favouriteChange.emit(this.tour);
    this.tour.favourite = !this.tour.favourite;
  }

  displayText() {
    if (this.limit === "all") {
      this.limit = 250;
    
    } else {
      this.limit = "all";
    }
  }
}
