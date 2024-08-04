/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SubscriptionTypeService } from "../subscriptionType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SubscriptionTypeCreateInput } from "./SubscriptionTypeCreateInput";
import { SubscriptionType } from "./SubscriptionType";
import { SubscriptionTypeFindManyArgs } from "./SubscriptionTypeFindManyArgs";
import { SubscriptionTypeWhereUniqueInput } from "./SubscriptionTypeWhereUniqueInput";
import { SubscriptionTypeUpdateInput } from "./SubscriptionTypeUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SubscriptionTypeControllerBase {
  constructor(
    protected readonly service: SubscriptionTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SubscriptionType })
  @nestAccessControl.UseRoles({
    resource: "SubscriptionType",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSubscriptionType(
    @common.Body() data: SubscriptionTypeCreateInput
  ): Promise<SubscriptionType> {
    return await this.service.createSubscriptionType({
      data: data,
      select: {
        createdAt: true,
        durationInMonths: true,
        id: true,
        price: true,
        typeName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SubscriptionType] })
  @ApiNestedQuery(SubscriptionTypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SubscriptionType",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subscriptionTypes(
    @common.Req() request: Request
  ): Promise<SubscriptionType[]> {
    const args = plainToClass(SubscriptionTypeFindManyArgs, request.query);
    return this.service.subscriptionTypes({
      ...args,
      select: {
        createdAt: true,
        durationInMonths: true,
        id: true,
        price: true,
        typeName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SubscriptionType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SubscriptionType",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subscriptionType(
    @common.Param() params: SubscriptionTypeWhereUniqueInput
  ): Promise<SubscriptionType | null> {
    const result = await this.service.subscriptionType({
      where: params,
      select: {
        createdAt: true,
        durationInMonths: true,
        id: true,
        price: true,
        typeName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SubscriptionType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SubscriptionType",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSubscriptionType(
    @common.Param() params: SubscriptionTypeWhereUniqueInput,
    @common.Body() data: SubscriptionTypeUpdateInput
  ): Promise<SubscriptionType | null> {
    try {
      return await this.service.updateSubscriptionType({
        where: params,
        data: data,
        select: {
          createdAt: true,
          durationInMonths: true,
          id: true,
          price: true,
          typeName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SubscriptionType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SubscriptionType",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSubscriptionType(
    @common.Param() params: SubscriptionTypeWhereUniqueInput
  ): Promise<SubscriptionType | null> {
    try {
      return await this.service.deleteSubscriptionType({
        where: params,
        select: {
          createdAt: true,
          durationInMonths: true,
          id: true,
          price: true,
          typeName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
