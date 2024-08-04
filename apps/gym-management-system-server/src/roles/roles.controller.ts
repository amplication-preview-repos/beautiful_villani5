import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RolesService } from "./roles.service";

@swagger.ApiTags("roles")
@common.Controller("roles")
export class RolesController {
  constructor(protected readonly service: RolesService) {}
}
