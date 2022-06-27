import { Repository } from 'typeorm';
import { RouteRepository } from '../../../domain/route-repository';
import { Route } from '../../../domain/route.entity';

export class RouteTypeormRepository implements RouteRepository {
  constructor(private readonly routeRepository: Repository<Route>) {}
  async insert(route: Route): Promise<void> {
    await this.routeRepository.save(route);
  }

  async findAll(): Promise<Array<Route>> {
    return this.routeRepository.find();
  }
}
