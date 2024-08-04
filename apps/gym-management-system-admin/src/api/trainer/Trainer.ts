import { ClassModel } from "../classModel/ClassModel";

export type Trainer = {
  classes?: Array<ClassModel>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  specialty: string | null;
  updatedAt: Date;
};
