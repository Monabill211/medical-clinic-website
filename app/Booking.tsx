"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./loder";
import Input from "./input";
import Inputph from "./inputnu";
import CallIcon from "@mui/icons-material/Call";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

function getNextDateForDay(dayName: string) {
  const daysMap: Record<string, number> = {
    "الاحد": 0,
    "الاثنين": 1,
    "الثلاثاء": 2,
    "الاربعاء": 3,
    "الخميس": 4,
    "الجمعة": 5,
    "السبت": 6,
  };

  const targetDay = daysMap[dayName];
  const today = new Date();
  const todayDay = today.getDay();

  let diff = targetDay - todayDay;
  if (diff <= 0) diff += 7;

  const result = new Date();
  result.setDate(today.getDate() + diff);

  return result;
}

export default function Booking() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    day: "",
    time: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const bookingDate = getNextDateForDay(formData.day);
    const formattedDate = bookingDate.toLocaleDateString("ar-EG");

   const response = await fetch(
  "https://backendmedcilo-production.up.railway.app/api/bookings",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
      date: formattedDate,
    }),
  }
);
    const data = await response.json();

    if (response.ok) {
router.push(`/booking-aftar/${data._id}`);
    } else {
      alert("حصل خطأ في الحجز");
      console.log(data);
    }
  } catch (error) {
    console.log("Error:", error);
    alert("السيرفر مش شغال");
  }
};
  return (
    <div id="booking" style={{ background: "#fafafa",padding:'15px' }}>
      <div style={{ margin: "30px", background: "#fafafa" }}>
        <h1 className="text-4xl text-center">حجز موعد</h1>
        <h2 className="text-2xl text-green-800 text-center m-4">
          اختر الوقت المناسب لك و احصل علي افضل رعاية
        </h2>
        <Loader />
      </div>

      <div dir="rtl" className="flex justify-around flex-col items-center md:flex-row" style={{padding:'10px'}}>
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md" style={{ padding: "15px", margin: "90px" }}>
          <h2 className="text-center mb-6 font-black text-3xl">معلومات الحجز</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <table className="font-medium">
                الاسم بالكامل:
                <Input name="name" value={formData.name} onChange={handleChange} />
              </table>
              <table className="font-medium">
                رقم الهاتف:
                <Inputph name="phone" value={formData.phone} onChange={handleChange} />

              </table>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <table className="font-light text-2xl">اختر اليوم المناسب لك:</table>
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="input border border-green-400 rounded-2xl p-2"
              >
                <option value="">اختر اليوم</option>
                <option value="الاحد">الاحد</option>
                <option value="الاثنين">الاثنين</option>
                <option value="الخميس">الخميس</option>
              </select>

              <table className="font-light text-2xl">اختر الوقت المناسب لك:</table>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="input border border-green-400 rounded-2xl p-2"
              >
                <option value="">اختر الوقت</option>
                <option value="09:00 م">09:00 م</option>
                <option value="10:00 م">10:00 م</option>
                <option value="11:00 م">11:00 م</option>
              </select>
            </div>

            <table className="font-medium">
              اضافة ملحوظة:
              <textarea
                name="note"
                rows={4}
                value={formData.note}
                onChange={handleChange}
               className="input resize-none border-green-400 border-2 rounded-3xl w-75 md:w-96"
               
              />
             
            </table>

            <button
              type="submit"
              className="w-full bg-white border border-blue-600 py-3 rounded-4xl font-bold cursor-pointer hover:shadow-md transition-all hover:-translate-y-1 hover:bg-blue-800 hover:text-white"
              style={{ padding: "15px" }}
            >
              تأكيد الحجز
            </button>
          </form>
        </div>
        <div style={{marginBottom:"360px"}}>


 
       <div className='  h-52 bg-white p-6 rounded-xl shadow-md w-80 md:w-96 ' >
      <h1 className='text-center font-medium text-3xl text-blue-500 ' style={{margin:"10px"}}>أوقات العمل</h1>
    <div className='flex justify-around'>
       <div>
        <h2 className='text-blue-400 text-2xl font-medium'>ايام العمل </h2>
        <h4 className='font-bold text-green-400 text-center' style={{marginTop:"5px"}}>الاحد</h4>
        <h4  className='font-bold text-green-400 text-center' style={{marginTop:"5px"}}>الاثنين</h4>
        <h4  className='font-bold text-green-400 text-center' style={{marginTop:"5px"}}>الخميس</h4>
      </div>
       <div>
        <h2 className='text-blue-400 text-2xl font-medium'>وقت العمل</h2>
        <h4 className='font-bold text-green-400 text-center' style={{marginTop:"5px"}}>09:00 م</h4>
         <h4 className='font-bold text-green-400 text-center' style={{marginTop:"5px"}}>10:00 م</h4>
         <h4 className='font-bold text-green-400 text-center' style={{marginTop:"5px"}} >11:00 م</h4>
      </div>
    </div>
       <div className=' h-52 bg-white p-6 rounded-xl shadow-md w-80 md:w-96  ' style={{margin:"90px -25px"}}>
        <h1 className='text-center font-medium text-3xl text-blue-500 ' style={{margin:"20px"}}>معلومات التواصل</h1>
<h2 className='font-bold text-green-600 ' style={{marginTop:"5px",marginRight:"20px"}} ><CallIcon className='bg-green-300 text-5xl' style={{marginLeft:"10px",padding:"4px",borderRadius:"50%",fontSize:"30px"}}/>01110094460</h2>
<h2 className='font-bold text-green-600 ' style={{marginTop:"5px",marginRight:"20px"}} ><AttachEmailIcon className='bg-green-300 text-5xl' style={{marginLeft:"10px",padding:"4px",borderRadius:"50%",fontSize:"30px"}}/>mmnabill211@gmail.com</h2>
<h2 className='font-bold text-green-600 ' style={{marginTop:"5px",marginRight:"20px"}} ><AddLocationAltIcon className='bg-green-300 text-5xl' style={{marginLeft:"10px",padding:"4px",borderRadius:"50%",fontSize:"30px"}}/>جمهورية مصر العربية</h2>
     </div>
        </div>   
   </div>
      </div>
    </div>
  );
}
