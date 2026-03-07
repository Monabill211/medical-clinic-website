import { connectDB } from "../../lid/mongodb";
import Patient from "../../models/Patient";

export async function GET() {
  await connectDB();

  const patients = await Patient.find();

  return Response.json(patients);
}