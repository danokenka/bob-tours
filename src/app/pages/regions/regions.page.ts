import { Component, OnInit } from '@angular/core';
//Import our servive
import { BobToursService } from 'src/app/services/bob-tours.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
})
export class RegionsPage implements OnInit {
  // declare a regions object variable
  regions: any;

  constructor(private btService: BobToursService) { }

  ngOnInit() {
    // calls the service as a promise handling async delivery of data with then() construct
    this.btService.getRegions()
    // Lamba expressions "data => this.regions = data"
    // Means if data arrives pass that data to this.regions..our local page variable
    .then(data => this.regions = data);
  }

}
