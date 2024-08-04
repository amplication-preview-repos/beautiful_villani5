import { TrainerWhereUniqueInput } from "../trainer/TrainerWhereUniqueInput";

export type ClassModelUpdateInput = {
  className?: string | null;
  duration?: number | null;
  schedule?: Date | null;
  trainer?: TrainerWhereUniqueInput | null;
};
