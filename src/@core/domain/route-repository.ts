import { Route } from './route.entity';

export interface RouteRepository {
  insert(route: Route): Promise<void>;
  findAll(): Promise<Array<Route>>;
}
