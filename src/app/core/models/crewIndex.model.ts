import { ImageIndexModel } from "./imageIndex.model";

export interface CrewIndexModel {
  name: string;
  images: ImageIndexModel;
  role: string;
  bio: string;
}