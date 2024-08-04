import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubscriptionTypeService } from "./subscriptionType.service";
import { SubscriptionTypeControllerBase } from "./base/subscriptionType.controller.base";

@swagger.ApiTags("subscriptionTypes")
@common.Controller("subscriptionTypes")
export class SubscriptionTypeController extends SubscriptionTypeControllerBase {
  constructor(
    protected readonly service: SubscriptionTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
