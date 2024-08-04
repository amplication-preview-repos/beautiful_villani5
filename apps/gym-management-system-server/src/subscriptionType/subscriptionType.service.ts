import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubscriptionTypeServiceBase } from "./base/subscriptionType.service.base";

@Injectable()
export class SubscriptionTypeService extends SubscriptionTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
