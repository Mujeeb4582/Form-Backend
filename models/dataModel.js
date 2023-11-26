import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
  name: String,
  sector: String,
  agreed: Boolean,
});

const sectorSchema = mongoose.Schema({
  id: Number,
  name: String,
});

export const UserData = mongoose.model("UserData", dataSchema, "userdata");
export const SectorData = mongoose.model("Sector", sectorSchema, "sector");

// export default DataMessage;
