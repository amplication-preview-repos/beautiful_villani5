import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TrainerWhereInput = {
  classes?: ClassModelListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  specialty?: StringNullableFilter;
};
