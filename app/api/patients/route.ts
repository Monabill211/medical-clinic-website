// import { connectDB } from "../../lid/mongodb";
// import Patient from "../../models/Patient";

// export async function GET() {
//   await connectDB();

//   const patients = await Patient.find();

//   return Response.json(patients);
// }
export async function GET() {
  return Response.json({ message: "patients api working" })
}