import { ImageIndexModel } from "./imageIndex.model";

export interface DestinationIndexModel {
  name: string;
  images: ImageIndexModel;
  description: string;
  distance: string;
  travel: string;
}