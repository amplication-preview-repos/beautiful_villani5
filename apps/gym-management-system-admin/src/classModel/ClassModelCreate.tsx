import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TrainerTitle } from "../trainer/TrainerTitle";

export const ClassModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="className" source="className" />
        <NumberInput step={1} label="duration" source="duration" />
        <DateTimeInput label="schedule" source="schedule" />
        <ReferenceInput source="trainer.id" reference="Trainer" label="trainer">
          <SelectInput optionText={TrainerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
