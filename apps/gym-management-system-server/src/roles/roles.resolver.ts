import * as graphql from "@nestjs/graphql";
import { RolesService } from "./roles.service";

export class RolesResolver {
  constructor(protected readonly service: RolesService) {}
}
