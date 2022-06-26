import { RouteRepository } from '../../domain/route-repository';
import { Route } from '../../domain/route.entity';

export class RouteInMemoryRepository implements RouteRepository {
  items: Array<Route> = [];
  async insert(route: Route): Promise<void> {
    await this.items.push(route);
  }

  async findAll(): Promise<Array<Route>> {
    return this.items;
  }
}
