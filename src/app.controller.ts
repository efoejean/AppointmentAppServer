import { Controller, Get } from '@nestjs/common';
import {
  clients as ClientModel,
  stylists as StylistModel,
} from '@prisma/client';

import { StylistsService } from './stylists.service';

import { ClientsService } from './clients.service';
@Controller()
export class AppController {
  constructor(
    private readonly clientsService: ClientsService,
    private readonly stylistService: StylistsService,
  ) {}

  @Get('clients')
  getClients(): Promise<ClientModel[]> {
    return this.clientsService.getClients();
  }

  @Get('stylists')
  getStylists(): Promise<StylistModel[]> {
    return this.stylistService.getStylists();
  }
}
