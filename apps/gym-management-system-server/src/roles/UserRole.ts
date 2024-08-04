import { Trainer } from "../trainer/base/Trainer";
import { registerEnumType } from "@nestjs/graphql";

export enum UserRole {
    Administrator = "Administrator",
    Trainer = "Trainer"
}

registerEnumType(UserRole, {
    name: "UserRole",
  });