import { Types } from "mongoose";

export interface Base {
  id: IdType;
  created_at: Date;
  modified_at?: Date;
  state: boolean;
}

type IdType = {
  _id: Types.ObjectId;
};
