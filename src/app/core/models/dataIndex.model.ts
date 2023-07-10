import { CrewIndexModel } from "./crewIndex.model";
import { DestinationIndexModel } from "./destinationIndex.model";
import { TechnologyIndexModel } from "./technologyIndex.model";

export interface DataIndexModel {
    destinations: DestinationIndexModel[];
    crew: CrewIndexModel[];
    technology: TechnologyIndexModel[];
}