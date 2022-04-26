import { Component, OnInit } from '@angular/core';
import { Tour, TourService } from '../../services/tour.service'

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss'],
})
export class TourListComponent implements OnInit {
  tours: Tour[] = [];

  newTour: Tour = {
    name: '',
    info: '',
    image: '',
    price: 0,
    favourite: undefined
 }

  constructor(private tourService: TourService) {
    this.tours = tourService.getAllTour();
  }

  ngOnInit(): void {}

  addNewTour(data) {
    console.log(data);
    if (this.newTour.name.trim() === '') return;
    this.tours.unshift(this.newTour)
  }

  onDelete(tour) {
    let index = this.tours.indexOf(tour);
    this.tours.splice(index, 1);
  }

  onFavouriteChange(tour) {
    // let favourite = tour.favourite;
    tour.favourite = !tour.favourite;
  }
}
