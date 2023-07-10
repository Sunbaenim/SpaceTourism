import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { TechnologyIndexModel } from 'src/app/core/models/technologyIndex.model';

@Component({
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {

  isMediaDesktop: boolean = window.innerWidth >= 1440;
  technologies!: TechnologyIndexModel[];
  indexTechno: number = 0;

  constructor(
    private dService: DataService
  ) { }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies() {
    this.dService.getTechnologies().subscribe(data => this.technologies = data);
  }

}
