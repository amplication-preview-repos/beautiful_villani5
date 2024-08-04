import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TrainerWhereUniqueInput } from "../trainer/TrainerWhereUniqueInput";

export type ClassModelWhereInput = {
  className?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  schedule?: DateTimeNullableFilter;
  trainer?: TrainerWhereUniqueInput;
};
