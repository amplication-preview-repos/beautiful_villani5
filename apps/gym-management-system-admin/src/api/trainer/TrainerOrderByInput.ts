import { SortOrder } from "../../util/SortOrder";

export type TrainerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  specialty?: SortOrder;
  updatedAt?: SortOrder;
};
