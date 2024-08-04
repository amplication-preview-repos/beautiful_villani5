import { Trainer } from "../trainer/Trainer";

export type ClassModel = {
  className: string | null;
  createdAt: Date;
  duration: number | null;
  id: string;
  schedule: Date | null;
  trainer?: Trainer | null;
  updatedAt: Date;
};
