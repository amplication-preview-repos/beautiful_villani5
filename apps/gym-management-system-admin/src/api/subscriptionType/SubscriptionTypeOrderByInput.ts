import { SortOrder } from "../../util/SortOrder";

export type SubscriptionTypeOrderByInput = {
  createdAt?: SortOrder;
  durationInMonths?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  typeName?: SortOrder;
  updatedAt?: SortOrder;
};
