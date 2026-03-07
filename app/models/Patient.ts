import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  name: String,
  phone: String,
  age: Number,
});

export default mongoose.models.Patient ||
  mongoose.model("Patient", PatientSchema);