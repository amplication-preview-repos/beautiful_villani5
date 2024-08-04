import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TRAINER_TITLE_FIELD } from "../trainer/TrainerTitle";

export const ClassModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="className" source="className" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="schedule" source="schedule" />
        <ReferenceField label="trainer" source="trainer.id" reference="Trainer">
          <TextField source={TRAINER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
