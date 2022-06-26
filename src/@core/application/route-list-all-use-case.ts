import { RouteRepository } from '../domain/route-repository';
import { LatLng, Route } from '../domain/route.entity';

type ListRouteOutPut = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: Array<LatLng>;
};

export class ListRouteUseCase {
  constructor(private readonly routeRepository: RouteRepository) {}
  async execute(): Promise<Array<ListRouteOutPut>> {
    return await this.routeRepository.findAll();
  }
}
