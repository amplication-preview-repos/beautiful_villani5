import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TRAINER_TITLE_FIELD } from "./TrainerTitle";

export const TrainerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="specialty" source="specialty" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ClassModel"
          target="trainerId"
          label="Classes"
        >
          <Datagrid rowClick="show">
            <TextField label="className" source="className" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="duration" source="duration" />
            <TextField label="ID" source="id" />
            <TextField label="schedule" source="schedule" />
            <ReferenceField
              label="trainer"
              source="trainer.id"
              reference="Trainer"
            >
              <TextField source={TRAINER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
