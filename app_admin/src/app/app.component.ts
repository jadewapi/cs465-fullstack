import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { NavbarComponent } from './navbar/navbar.component'; // 👈 import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, TripListingComponent, NavbarComponent], // 👈 include here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travlr Getaways Admin';
}
