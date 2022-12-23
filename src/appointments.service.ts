import { Injectable } from '@nestjs/common';

import { appointments as Appoint, Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private Prisma: PrismaService) {}

  async getAppoint(
    appointWhereUniqueInput: Prisma.appointmentsWhereUniqueInput,
  ): Promise<Appoint | null> {
    return this.Prisma.appointments.findUnique({
      where: appointWhereUniqueInput,
    });
  }

  async getAppoints(): Promise<Appoint[]> {
    return this.Prisma.appointments.findMany();
  }

  async createAppoint(data: Prisma.appointmentsCreateInput): Promise<Appoint> {
    return this.Prisma.appointments.create({
      data,
    });
  }

  async updateAppoint(params: {
    where: Prisma.appointmentsWhereUniqueInput;
    data: Prisma.appointmentsUpdateInput;
  }): Promise<Appoint> {
    const { where, data } = params;
    return this.Prisma.appointments.update({
      where,
      data,
    });
  }

  async deleteAppoint(
    where: Prisma.appointmentsWhereUniqueInput,
  ): Promise<Appoint> {
    return this.Prisma.appointments.delete({
      where,
    });
  }
}
