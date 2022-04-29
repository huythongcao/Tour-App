import { Tour, TourService } from './../../services/tour.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss'],
})
export class TourDetailComponent implements OnInit {
  tour: Tour;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tourService: TourService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Snpashot: ' + this.activatedRoute.snapshot.params.id);
    this.activatedRoute.params.subscribe((p) => {
      console.log('Observable: ' + p.id);

      this.getTourDetail(p.id);
    });
  }

  getTourDetail(id) {
    this.tour = this.tourService.getTourByID(id)[0];
  }

  onBackBtnClick() {
    this.router.navigate(['/tours'], {
      queryParams: {
        orderBy: 'date',
        order: 'ascending',
      },
    });
  }
}
