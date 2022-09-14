import { Injectable } from '@nestjs/common';
import { clients as Client, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async getClient(
    clientWhereUniqueInput: Prisma.clientsWhereUniqueInput,
  ): Promise<Client | null> {
    return this.prisma.clients.findUnique({
      where: clientWhereUniqueInput,
    });
  }

  async getClients(): Promise<Client[]> {
    return this.prisma.clients.findMany();
  }

  async createClient(data: Prisma.clientsCreateInput): Promise<Client> {
    return this.prisma.clients.create({
      data,
    });
  }

  async updateClient(params: {
    where: Prisma.clientsWhereUniqueInput;
    data: Prisma.clientsUpdateInput;
  }): Promise<Client> {
    const { where, data } = params;
    return this.prisma.clients.update({
      data,
      where,
    });
  }

  async deleteClient(where: Prisma.clientsWhereUniqueInput): Promise<Client> {
    return this.prisma.clients.delete({
      where,
    });
  }
}
