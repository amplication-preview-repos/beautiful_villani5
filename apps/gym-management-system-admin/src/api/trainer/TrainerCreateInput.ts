import { ClassModelCreateNestedManyWithoutTrainersInput } from "./ClassModelCreateNestedManyWithoutTrainersInput";

export type TrainerCreateInput = {
  classes?: ClassModelCreateNestedManyWithoutTrainersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  specialty?: string | null;
};
