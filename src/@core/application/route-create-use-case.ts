import { RouteRepository } from '../domain/route-repository';
import { LatLng, Route } from '../domain/route.entity';

type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: Array<LatLng>;
};
type CreateRouteOutPut = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: Array<LatLng>;
};

export class CreateRouteUseCase {
  constructor(private readonly routeRepository: RouteRepository) {}
  async execute(input: CreateRouteInput): Promise<CreateRouteOutPut> {
    const route = Route.create(input);
    await this.routeRepository.insert(route);
    return route.toJSON();
  }
}
