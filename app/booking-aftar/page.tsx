"use client";

import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/navigation";
import Footer from "../footer";
import Navbar from "../navbar";

type BookingData = {
  name: string;
  phone: string;
  day: string;
  time: string;
  note: string;
  date: string;
  ticket: number;
};

export default function Thankyou() {
  const [booking, setBooking] = useState<BookingData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("lastBooking");
    if (data) {
      setBooking(JSON.parse(data));
    }
  }, []);

  if (!booking) {
    return <div className="p-20 text-center">جاري تحميل البيانات...</div>;
  }

  return (
    <>
    <Navbar />
    <div style={{ padding: "200px" }}>
      <div
        className="h-550px bg-white rounded-3xl shadow-2xl"
        style={{ margin: "auto", height: "1250px", padding: "60px", width: "700px" }}
      >
        <div className="text-center ">
          <CheckIcon
            className="bg-green-600 w-28 shadow-2xl text-white"
            style={{
              borderRadius: "50%",
              width: "90px ",
              marginBottom: "35px",
              height: "90px",
              boxShadow: "0 10px 30px 15px rgba(16, 185, 129, .3)",
            }}
          />
          <h1 className="text-3xl font-black " style={{ marginTop: "35px" }}>
            تم حجز بنجاح
          </h1>

          <div className="border border-gray-300 flex flex-col rounded-3xl" style={{ marginTop: "65px" }}>
            <div className="flex justify-between flex-row-reverse border-b border-gray-300" style={{ padding: "30px" }}>
              <h1 className="text-2xl font-black">:اسم العميل</h1>
              <h1 className="text-2xl font-black">{booking.name}</h1>
            </div>

            <div className="flex justify-between flex-row-reverse border-b border-gray-300 bg-gray-100" style={{ padding: "30px" }}>
              <h1 className="text-2xl font-black">:التاريخ</h1>
              <h1 className="font-bold">
                {booking.day} - {booking.date}
              </h1>
            </div>

            <div className="flex justify-between flex-row-reverse border-b border-gray-300" style={{ padding: "30px" }}>
              <h1 className="text-2xl font-black">:الوقت</h1>
              <h1 className="text-2xl font-bold">{booking.time}</h1>
            </div>

            <div className="flex justify-between flex-row-reverse border-b border-gray-300 bg-gray-100" style={{ padding: "30px" }}>
              <h1 className="text-2xl font-black">:التليفون</h1>
              <h1 className="font-black">{booking.phone}</h1>
            </div>

            <div className="flex justify-between flex-row-reverse" style={{ padding: "30px" }}>
              <h1 className="text-2xl font-black">:ملحوظة</h1>
              <h1 className="text-2xl font-black">{booking.note || "—"}</h1>
            </div>

            <div className="flex justify-between flex-row-reverse bg-gray-100 rounded-b-3xl" style={{ padding: "30px" }}>
              <h1 className="text-2xl font-black">:رقم الحجز</h1>
              <h1 className="text-2xl font-black">#{booking.ticket}</h1>
            </div>
          </div>

          <div>
            <h1 className="text-3xl text-green-300 bg-gray-100 rounded-3xl" style={{ padding: "30px", margin: "40px" }}>
              سيتم التواصل معك قريبًا لتأكيد الحجز
            </h1>
          </div>

          <div style={{ margin: "55px" }} className="flex justify-around">
            <button
              onClick={() => router.push("/")}
              className="bg-green-400 text-white font-black text-2xl w-36 cursor-pointer rounded-4xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
              style={{ padding: "20px" }}
            >
              الرئيسية
            </button>

            <button
              onClick={() => window.print()}
              className="w-44 border border-gray-100 cursor-pointer rounded-4xl hover:border-green-300 hover:text-green-500 hover:bg-green-100 hover:-translate-y-1 transition-all duration-300 ease-in-out"
              style={{ padding: "20px", fontSize: "20px" }}
            >
              طباعة التذكرة
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
