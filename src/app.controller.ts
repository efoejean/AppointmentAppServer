import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('client/id/:id')
  getClientById(@Param('id') id: string): Promise<ClientModel | null> {
    return this.clientsService.getClient({ id });
  }

  @Get('stylists')
  getStylists(): Promise<StylistModel[]> {
    return this.stylistService.getStylists();
  }

  @Get('stylist/id/:id')
  getStylistById(@Param('id') id: string): Promise<StylistModel | null> {
    return this.stylistService.getStylist({ id });
  }
}
