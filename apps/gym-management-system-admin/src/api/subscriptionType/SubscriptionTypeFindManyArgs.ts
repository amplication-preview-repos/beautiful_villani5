import { SubscriptionTypeWhereInput } from "./SubscriptionTypeWhereInput";
import { SubscriptionTypeOrderByInput } from "./SubscriptionTypeOrderByInput";

export type SubscriptionTypeFindManyArgs = {
  where?: SubscriptionTypeWhereInput;
  orderBy?: Array<SubscriptionTypeOrderByInput>;
  skip?: number;
  take?: number;
};
