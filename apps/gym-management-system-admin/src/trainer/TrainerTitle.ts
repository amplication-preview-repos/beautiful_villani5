import { Trainer as TTrainer } from "../api/trainer/Trainer";

export const TRAINER_TITLE_FIELD = "firstName";

export const TrainerTitle = (record: TTrainer): string => {
  return record.firstName?.toString() || String(record.id);
};
