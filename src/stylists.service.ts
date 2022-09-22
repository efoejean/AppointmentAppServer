import { Injectable } from '@nestjs/common';
import { Prisma, stylists as Stylist } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class StylistsService {
  constructor(private Prisma: PrismaService) {}

  async getStylist(
    stylistWhereUniqueInput: Prisma.stylistsWhereUniqueInput,
  ): Promise<Stylist | null> {
    return this.Prisma.stylists.findUnique({
      where: stylistWhereUniqueInput,
    });
  }
  async getStylists() {
    return this.Prisma.stylists.findMany();
  }

  async createStylist(data: Prisma.stylistsCreateInput): Promise<Stylist> {
    return this.Prisma.stylists.create({
      data,
    });
  }

  async updateStylist(params: {
    where: Prisma.stylistsWhereUniqueInput;
    data: Prisma.stylistsUpdateInput;
  }): Promise<Stylist> {
    const { where, data } = params;
    return this.Prisma.stylists.update({
      data,
      where,
    });
  }

  async deleteStylist(
    where: Prisma.stylistsWhereUniqueInput,
  ): Promise<Stylist> {
    return this.Prisma.stylists.delete({
      where,
    });
  }
}
