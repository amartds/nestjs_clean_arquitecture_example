import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { CreateRouteUseCase } from '../@core/application/route-create-use-case';
import { ListRouteUseCase } from '../@core/application/route-list-all-use-case';

@Controller('routes')
export class RoutesController {
  constructor(
    private readonly createUseCase: CreateRouteUseCase,
    private readonly listUseCase: ListRouteUseCase,
  ) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.createUseCase.execute(createRouteDto);
  }

  @Get()
  findAll() {
    return this.listUseCase.execute();
  }
}
