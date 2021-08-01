import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class DataService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  private readonly defaultAdmin: { email: string; password: string }

  constructor(private readonly config: ConfigService) {
    super();
    this.defaultAdmin = this.config.get('admin')
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
  async onModuleInit() {
    await this.$connect();
    await this.ensureAdminUser()
  }
  async createUser({ email, password }: { email: string; password: string }) {
    return this.user.create({
      data: {
        email,
        password,
      },
    })

  }

  async findUserByEmail(email: string) {
    return this.user.findFirst({
      where: {
        email,
      },
    })
  }

  async findUserById(userId: number) {
    return this.user.findFirst({
      where: {
        id: userId,
      },
    })
  }

  private async ensureAdminUser() {
    // Check if we have an admin
    const found = await this.findUserByEmail(this.defaultAdmin.email)

    if (found) {
      Logger.log(`Admin user: ${found.email}`, 'DataService')
      return true
    }

    // If not, create it for us
    const created = await this.createUser(this.defaultAdmin)

    Logger.log(`Created Admin user: ${created.email}`, 'DataService')
  }
}
