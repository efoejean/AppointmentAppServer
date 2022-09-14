import { Injectable } from '@nestjs/common';
import { Prisma, stylists as Stylist } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class StylistsService {
  constructor(private prisma: PrismaService) {}

  async getStylist(
    stylistWhereUniqueInput: Prisma.stylistsWhereUniqueInput,
  ): Promise<Stylist | null> {
    return this.prisma.stylists.findUnique({
      where: stylistWhereUniqueInput,
    });
  }
  async getStylists() {
    return this.prisma.stylists.findMany();
  }

  async createStylist(data: Prisma.stylistsCreateInput): Promise<Stylist> {
    return this.prisma.stylists.create({
      data,
    });
  }

  async updateStylist(params: {
    where: Prisma.stylistsWhereUniqueInput;
    data: Prisma.stylistsUpdateInput;
  }): Promise<Stylist> {
    const { where, data } = params;
    return this.prisma.stylists.update({
      data,
      where,
    });
  }

  async deleteStylist(
    where: Prisma.stylistsWhereUniqueInput,
  ): Promise<Stylist> {
    return this.prisma.stylists.delete({
      where,
    });
  }
}
