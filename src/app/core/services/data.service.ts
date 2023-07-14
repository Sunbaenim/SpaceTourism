import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CrewIndexModel } from '../models/crewIndex.model';
import { DataIndexModel } from '../models/dataIndex.model';
import { DestinationIndexModel } from '../models/destinationIndex.model';
import { TechnologyIndexModel } from '../models/technologyIndex.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private client: HttpClient
  ) { }

  getDestinations(): Observable<DestinationIndexModel[]> {
    return this.client.get<DataIndexModel>('assets/data.json').pipe(map(data => data.destinations));
  }

  getCrew(): Observable<CrewIndexModel[]> {
    return this.client.get<DataIndexModel>('assets/data.json').pipe(map(data => data.crew));
  }

  getTechnologies(): Observable<TechnologyIndexModel[]> {
    return this.client.get<DataIndexModel>('assets/data.json').pipe(map(data => data.technology));
  }
}
