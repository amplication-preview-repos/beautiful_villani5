import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubscriptionTypeWhereInput = {
  durationInMonths?: IntNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  typeName?: StringNullableFilter;
};
