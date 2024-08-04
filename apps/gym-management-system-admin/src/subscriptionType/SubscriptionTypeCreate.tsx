import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SubscriptionTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="durationInMonths"
          source="durationInMonths"
        />
        <NumberInput label="price" source="price" />
        <TextInput label="typeName" source="typeName" />
      </SimpleForm>
    </Create>
  );
};
