import { Injectable } from '@nestjs/common';
import { clients as Client, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class ClientsService {
  constructor(private Prisma: PrismaService) {}

  async getClient(
    clientWhereUniqueInput: Prisma.clientsWhereUniqueInput,
  ): Promise<Client | null> {
    return this.Prisma.clients.findUnique({
      where: clientWhereUniqueInput,
    });
  }

  async getClients(): Promise<Client[]> {
    return this.Prisma.clients.findMany();
  }

  async createClient(data: Prisma.clientsCreateInput): Promise<Client> {
    return this.Prisma.clients.create({
      data,
    });
  }

  async updateClient(params: {
    where: Prisma.clientsWhereUniqueInput;
    data: Prisma.clientsUpdateInput;
  }): Promise<Client> {
    const { where, data } = params;
    return this.Prisma.clients.update({
      data,
      where,
    });
  }

  async deleteClient(where: Prisma.clientsWhereUniqueInput): Promise<Client> {
    return this.Prisma.clients.delete({
      where,
    });
  }
}
