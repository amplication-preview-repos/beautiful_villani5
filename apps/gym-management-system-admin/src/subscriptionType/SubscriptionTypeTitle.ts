import { SubscriptionType as TSubscriptionType } from "../api/subscriptionType/SubscriptionType";

export const SUBSCRIPTIONTYPE_TITLE_FIELD = "typeName";

export const SubscriptionTypeTitle = (record: TSubscriptionType): string => {
  return record.typeName?.toString() || String(record.id);
};
