import express, { Express, Request, Response } from 'express';
import { CreateRouteUseCase } from '../../../application/route-create-use-case';
import { ListRouteUseCase } from '../../../application/route-list-all-use-case';
import { RouteInMemoryRepository } from '../../databases/route-memory-repository';

const app: Express = express();

const routeRepository = new RouteInMemoryRepository();

app.use(express.json());

app.post('/routes', async (req: Request, res: Response) => {
  const createUseCaseRoute = new CreateRouteUseCase(routeRepository);
  const responseOut = await createUseCaseRoute.execute(req.body);
  return res.status(201).json(responseOut);
});

app.get('/routes', async (req: Request, res: Response) => {
  const listRoute = new ListRouteUseCase(routeRepository);
  const response = await listRoute.execute();
  return res.status(201).json(response);
});

app.listen(3000, () => {
  console.log('>>>>>>>>>>>>>>>>> ok <<<<<<<<<<<<<<<<<<<');
});
