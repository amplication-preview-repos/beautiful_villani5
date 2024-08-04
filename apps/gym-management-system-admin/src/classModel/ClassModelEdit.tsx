import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TrainerTitle } from "../trainer/TrainerTitle";

export const ClassModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="className" source="className" />
        <NumberInput step={1} label="duration" source="duration" />
        <DateTimeInput label="schedule" source="schedule" />
        <ReferenceInput source="trainer.id" reference="Trainer" label="trainer">
          <SelectInput optionText={TrainerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
