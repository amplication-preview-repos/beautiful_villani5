import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SubscriptionTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="durationInMonths"
          source="durationInMonths"
        />
        <NumberInput label="price" source="price" />
        <TextInput label="typeName" source="typeName" />
      </SimpleForm>
    </Edit>
  );
};
