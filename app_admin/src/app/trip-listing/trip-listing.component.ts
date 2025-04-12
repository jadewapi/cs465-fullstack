import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip'; // a. Import the Trip model
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service'; // b. Import the TripDataService

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService] // c. Register TripDataService as a provider
})
export class TripListingComponent implements OnInit {
  trips!: Trip[];  // define the trips array
  message: string = '';

  // d. Create constructor to initialize the service
  constructor(private tripDataService: TripDataService) {
    console.log('trip-listing constructor');
  }

  // e. Create method to call getTrips()
  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          if (value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          } else {
            this.message = 'There were no trips retrieved from the database';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

  // f. Run getStuff() on init
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}
