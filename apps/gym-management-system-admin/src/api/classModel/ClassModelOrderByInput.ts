import { SortOrder } from "../../util/SortOrder";

export type ClassModelOrderByInput = {
  className?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  schedule?: SortOrder;
  trainerId?: SortOrder;
  updatedAt?: SortOrder;
};
