import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubscriptionTypeResolverBase } from "./base/subscriptionType.resolver.base";
import { SubscriptionType } from "./base/SubscriptionType";
import { SubscriptionTypeService } from "./subscriptionType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SubscriptionType)
export class SubscriptionTypeResolver extends SubscriptionTypeResolverBase {
  constructor(
    protected readonly service: SubscriptionTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
