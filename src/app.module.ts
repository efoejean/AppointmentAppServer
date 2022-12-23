import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppointmentsService } from './appointments.service';
import { ClientsService } from './clients.service';
import { PrismaService } from './prisma.service';
import { StylistsService } from './stylists.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    StylistsService,
    ClientsService,
    PrismaService,
    AppointmentsService,
  ],
})
export class AppModule {}
