import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  @Input() trip!: Trip;

  constructor(private router: Router) {}

  public editTrip(trip: Trip): void {
    this.router.navigate(['/edit-trip', trip.code]);
  }
}
