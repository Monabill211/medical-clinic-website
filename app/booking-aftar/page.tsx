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
      try {
        const parsed: BookingData = JSON.parse(data);
        setBooking(parsed);
      } catch (error) {
        console.error("Invalid booking data:", error);
      }
    }
  }, []);

  if (!booking) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-xl font-bold">
          جاري تحميل البيانات...
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          
          <CheckIcon
            className="bg-green-600 text-white shadow-2xl mx-auto mb-8"
            sx={{
              borderRadius: "50%",
              width: 90,
              height: 90,
              boxShadow: "0 10px 30px 15px rgba(16, 185, 129, .3)",
            }}
          />

          <h1 className="text-3xl md:text-4xl font-black mb-10">
            تم الحجز بنجاح
          </h1>

          {/* Booking Details */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden text-lg">

            <Row label="اسم العميل" value={booking.name} />
            <Row label="التاريخ" value={`${booking.day} - ${booking.date}`} gray />
            <Row label="الوقت" value={booking.time} />
            <Row label="التليفون" value={booking.phone} gray />
            <Row label="ملحوظة" value={booking.note || "—"} />
            <Row label="رقم الحجز" value={`#${booking.ticket}`} gray last />

          </div>

          <div className="mt-8">
            <p className="text-xl text-green-600 bg-green-50 rounded-2xl py-4 px-6">
              سيتم التواصل معك قريبًا لتأكيد الحجز
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/")}
              className="bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:-translate-y-1 transition-all duration-300"
            >
              الرئيسية
            </button>

            <button
              onClick={() => window.print()}
              className="border border-gray-300 text-lg px-8 py-4 rounded-full hover:border-green-400 hover:text-green-600 hover:bg-green-50 hover:-translate-y-1 transition-all duration-300"
            >
              طباعة التذكرة
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

/* Reusable Row Component */
function Row({
  label,
  value,
  gray,
  last,
}: {
  label: string;
  value: string;
  gray?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`flex justify-between flex-row-reverse px-6 py-5 border-b border-gray-200 ${
        gray ? "bg-gray-50" : ""
      } ${last ? "border-b-0 rounded-b-3xl" : ""}`}
    >
      <span className="font-black">{label}:</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
