import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BobToursService } from 'src/app/services/bob-tours.service';
import _ from 'lodash';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

tour = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    public btService: BobToursService) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tour = _.find(this.btService.tours, ['ID', parseInt(id)]);
  }

}
