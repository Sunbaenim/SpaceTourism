import { ImageOrientationIndexModel } from "./ImageOrientationIndex.model";

export interface TechnologyIndexModel {
  name: string;
  images: ImageOrientationIndexModel;
  description: string;
}