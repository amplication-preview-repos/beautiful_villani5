import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TrainerModuleBase } from "./base/trainer.module.base";
import { TrainerService } from "./trainer.service";
import { TrainerController } from "./trainer.controller";
import { TrainerResolver } from "./trainer.resolver";

@Module({
  imports: [TrainerModuleBase, forwardRef(() => AuthModule)],
  controllers: [TrainerController],
  providers: [TrainerService, TrainerResolver],
  exports: [TrainerService],
})
export class TrainerModule {}
