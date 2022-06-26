import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from 'src/@core/infrastructure/databases/route-memory-repository';
import { CreateRouteUseCase } from 'src/@core/application/route-create-use-case';
import { RouteRepository } from 'src/@core/domain/route-repository';
import { ListRouteUseCase } from 'src/@core/application/route-list-all-use-case';

@Module({
  controllers: [RoutesController],
  providers: [
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteInMemoryRepository],
    },
    {
      provide: ListRouteUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new ListRouteUseCase(routeRepository);
      },
      inject: [RouteInMemoryRepository],
    },
  ],
})
export class RoutesModule {}
