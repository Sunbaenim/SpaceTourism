import { Component } from '@angular/core';
import { CrewIndexModel } from 'src/app/core/models/crewIndex.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent {

  crew: CrewIndexModel[] = [];
  indexCrew: number = 0;

  constructor(
    private dService: DataService
  ) { }

  ngOnInit(): void {
    this.getCrew();
  }

  getCrew() {
    this.dService.getCrew().subscribe(data => this.crew = data);
  }
}
