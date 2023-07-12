import { Component, OnInit } from '@angular/core';
import { DestinationIndexModel } from 'src/app/core/models/destinationIndex.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  destinations: DestinationIndexModel[] = [];
  indexDes: number = 0;

  constructor(
    private dService: DataService
  ) { }

  ngOnInit(): void {
    this.getDestinations();
  }

  getDestinations() {
    this.dService.getDestinations().subscribe(data => this.destinations = data);
  }
}
