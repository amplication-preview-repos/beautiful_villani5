import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubscriptionTypeModuleBase } from "./base/subscriptionType.module.base";
import { SubscriptionTypeService } from "./subscriptionType.service";
import { SubscriptionTypeController } from "./subscriptionType.controller";
import { SubscriptionTypeResolver } from "./subscriptionType.resolver";

@Module({
  imports: [SubscriptionTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubscriptionTypeController],
  providers: [SubscriptionTypeService, SubscriptionTypeResolver],
  exports: [SubscriptionTypeService],
})
export class SubscriptionTypeModule {}
