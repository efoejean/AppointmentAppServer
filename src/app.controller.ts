import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  appointments as AppointmentModel,
  clients as ClientModel,
  Prisma,
  stylists as StylistModel,
} from '@prisma/client';

import { StylistsService } from './stylists.service';

import { AppointmentsService } from './appointments.service';
import { ClientsService } from './clients.service';
@Controller()
export class AppController {
  constructor(
    private readonly clientsService: ClientsService,
    private readonly stylistService: StylistsService,
    private readonly appointmentsService: AppointmentsService,
  ) {}

  @Get('clients')
  getClients(): Promise<ClientModel[]> {
    return this.clientsService.getClients();
  }

  @Get('client/id/:id')
  getClientById(@Param('id') id: string): Promise<ClientModel | null> {
    return this.clientsService.getClient({ id });
  }

  @Get('client/phoneNumber/:phoneNumber')
  getClientByPhoneNumber(
    @Param('phoneNumber') phone_number: string,
  ): Promise<ClientModel | null> {
    return this.clientsService.getClient({ id: phone_number });
  }

  @Post('client')
  createClient(
    @Body() newClient: Prisma.clientsCreateInput,
  ): Promise<ClientModel> {
    return this.clientsService.createClient(newClient);
  }

  @Put('client/:id')
  updateClient(
    @Param('id') id: string,
    @Body() updatedClient: Prisma.clientsUpdateInput,
  ): Promise<ClientModel> {
    return this.clientsService.updateClient({
      where: { id },
      data: updatedClient,
    });
  }

  @Delete('client/:id')
  deleteClient(@Param('id') id: string): Promise<ClientModel> {
    return this.clientsService.deleteClient({ id });
  }

  @Get('stylists')
  getStylists(): Promise<StylistModel[]> {
    return this.stylistService.getStylists();
  }

  @Get('stylist/id/:id')
  getStylistById(@Param('id') id: string): Promise<StylistModel | null> {
    return this.stylistService.getStylist({ id });
  }

  @Get('stylist/phoneNumber/:phoneNumber')
  getStylistByPhoneNumber(
    @Param('phoneNumber') phone_number: string,
  ): Promise<StylistModel | null> {
    return this.stylistService.getStylist({ id: phone_number });
  }

  @Post('stylist')
  createStylist(
    @Body() newStylist: Prisma.stylistsCreateInput,
  ): Promise<StylistModel> {
    return this.stylistService.createStylist(newStylist);
  }

  @Put('stylist/:id')
  updateStylist(
    @Param('id') id: string,

    @Body() updatedStylist: Prisma.stylistsUpdateInput,
  ): Promise<StylistModel> {
    return this.stylistService.updateStylist({
      where: { id },
      data: updatedStylist,
    });
  }

  @Delete('stylist/:id')
  deleteStylist(@Param('id') id: string): Promise<StylistModel> {
    return this.stylistService.deleteStylist({ id });
  }

  @Get('appointments')
  getAppointments(): Promise<AppointmentModel[]> {
    return this.appointmentsService.getAppoints();
  }

  @Get('appointment/id/:id')
  getAppointmentById(
    @Param('id') id: string,
  ): Promise<AppointmentModel | null> {
    return this.appointmentsService.getAppoint({ id });
  }

  @Get('appointment/phoneNumber/:phoneNumber')
  getAppointmentByPhoneNumber(
    @Param('phoneNumber') phone_number: string,
  ): Promise<AppointmentModel | null> {
    return this.appointmentsService.getAppoint({ id: phone_number });
  }

  @Post('appointment')
  createAppointment(
    @Body() newAppointment: Prisma.appointmentsCreateInput,
  ): Promise<AppointmentModel> {
    return this.appointmentsService.createAppoint(newAppointment);
  }

  @Put('appointment/:id')
  updateAppointment(
    @Param('id') id: string,
    @Body() updatedAppointment: Prisma.appointmentsUpdateInput,
  ): Promise<AppointmentModel> {
    return this.appointmentsService.updateAppoint({
      where: { id },
      data: updatedAppointment,
    });
  }
}
