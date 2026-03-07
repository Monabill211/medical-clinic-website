"use client";
import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Mlahotha from './mlahotha';
import BookingPopup from './booking-pop';
export default function Contact() {
    const [open, setOpen] = useState(false); // 👈 دي كانت ناقصة

  return (
    <div>
     
      <Mlahotha />

      <div className='flex justify-around gap-8 flex-wrap' style={{ marginTop: "35px" }}>

        <div className='shadow-2xs bg-white w-96 rounded-2xl' style={{ padding: "25px" }}>
          <h1 className='text-right font-bold mb-4'>مواعيد اليوم</h1>

          <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center  rounded-xl p-3 bg-gray-100 ' style={{padding:"10px"}} >
              <div className='text-right'>
                <h2>محمد نبيل</h2>
                <h3 className='text-gray-500 text-sm'>فحص دوري</h3>
              </div>
              <span className='text-blue-600 bg-blue-100 px-3 py-1  text-sm' style={{padding:"4px",borderRadius:"5px"}}>جديد</span>
            </div>

            <div className='flex justify-between items-center  rounded-xl p-3 bg-gray-100 ' style={{padding:"10px"}} >
              <div className='text-right'>
                <h2>أحمد علي</h2>
                <h3 className='text-gray-500 text-sm'>كشف</h3>
              </div>
              <span className='text-green-600 bg-green-100 px-3 py-1  text-sm' style={{padding:"4px",borderRadius:"5px"}}>مؤكد</span>
            </div>

            <div className='flex justify-between items-center  rounded-xl p-3 bg-gray-100 ' style={{padding:"10px"}} >
              <div className='text-right'>
                <h2>سارة محمد</h2>
                <h3 className='text-gray-500 text-sm'>متابعة</h3>
              </div>
              <span className='text-red-600 bg-red-100 px-3 py-1  text-sm' style={{padding:"4px",borderRadius:"5px"}}>ملغي</span>
            </div>
          </div>
        </div>

        <div className='shadow-2xs bg-white w-96 rounded-2xl' style={{ padding: "25px" }}>
          <h1 className='text-right font-bold mb-4'>الإجراءات السريعة</h1>

          <div className='grid grid-cols-2 gap-4'>
            <button className='bg-green-500 text-white rounded-xl p-4 h-20 cursor-pointer' onClick={() => setOpen(true)}>حجز موعد</button>
             <BookingPopup
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {
          setOpen(false);
          // هنا بقى انت اربطها بالـ state / database / next router
        }}
      />
            <button className='bg-blue-500 text-white rounded-xl p-4 h-20 cursor-pointer'>إضافة مريض</button>
            <button className='bg-purple-500 text-white rounded-xl p-4 h-20 cursor-pointer'>إضافة تقرير</button>
            <button className='bg-teal-500 text-white rounded-xl p-4 h-20 cursor-pointer'>إضافة طبيب</button>
          </div>
        </div>

      </div>
       <div className='shadow-2xs bg-white rounded-2xl mx-auto' style={{ padding: "25px", margin: "30px",}}>
        <div className='flex justify-between'>
                    <h1 className='text-right font-bold mb-4'>المرضى الجدد</h1>
                    <h1 className='text-right font-bold mb-4 text-blue-400 cursor-pointer' >عرض كل </h1>

        </div>
<div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
    <h2>اسم المريض</h2>
    <h2>العمر</h2>
    <h2>رقم الهاتف</h2>
    <h2>تاريخ التسجيل </h2>
    <h2>الحالة</h2>
</div>
<div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
    <h2> محمد نبيل </h2>
    <h2>20</h2>
    <h2>01110094460</h2>
    <h2>22/2/2025</h2>
    <h2>  <span className='text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm'>جديد</span></h2>
</div>
<div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
    <h3>محمد صلاح</h3>
    <h4>25</h4>
    <h5>01021219588 </h5>
    <h1>25/2/2026</h1>
    <h2>  <span className='text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm'>جديد</span></h2>
</div>
       
      </div>
    </div>
  )
}
