import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "./database/prisma.service";

@Controller("app")
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get("hello")
  async getHello() {
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: "Capitao",
        name: "Guilherme Capitao",
        function: "Alcançar coisas no alto",
      },
    });
    return { member };
  }
}
