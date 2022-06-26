type LatLng = { lat: number; lng: number };
export class CreateRouteDto {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: Array<LatLng>;
}

// TODO: add class validator
