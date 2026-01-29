import React from 'react'
import Loader from './loder';
import Input from './input';
import Inputph from './inputnu';
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export default function Booking() {
  return (
    <div style={{background:"#fafafa"}}>
      <div style={{margin:"30px",background:"#fafafa"}}>
   
 
        <h1 className='text-4xl text-blue-800 text-center'>حجز موعد</h1>
        <h2 className='text-2xl text-green-800 text-center m-4 ' >اختر الوقت المناسب لك و احصل علي افضل رعاية</h2> 
        <Loader  />     </div>
  <div dir="rtl" className='flex justify-around flex-col items-center md:flex-row'  >

  <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md " style={{padding:"15px",margin:"90px" }}>
      
      {/* العنوان */}
      <h2 className="text-center   mb-6 flex items-center justify-center gap-2 text-blue-500 font-black text-3xl" style={{marginBottom:"25px"}}>
        معلومات الحجز
      </h2>

      {/* الفورم */}
      <form className="space-y-4">

        {/* الاسم + رقم الهاتف */}
        <div className="grid grid-cols-2 gap-3">
         <table className='text-blue-500 font-medium '>
الاسم بالكامل:
         
          <Input
          /> </table>
          <table className='text-blue-500 font-medium '>

        رقم الهاتف:
          <Inputph
           
          />  </table>
        </div>

   
       

     
        

        {/* التاريخ + الوقت */}
        <div className="grid grid-cols-2 gap-3">
           <table className='text-blue-500 font-light text-2xl '>اختر اليوم المناسب لك:

         </table>
          <select className="input border border-green-400 rounded-2xl" style={{padding:"10px"}}>
            <option> اختر اليوم</option>
            <option>الاحد</option>
            <option>الاثنين</option>
            <option>الخميس</option>
          </select> 
          <table className='text-blue-500 font-light text-2xl '>اختر الوقت المناسب لك:</table>
               <select className="input border border-green-400 rounded-2xl" style={{padding:"10px"}}>
            <option>اختر الوقت</option>
            <option>09:00 م</option>
            <option>10:00 م</option>
            <option>11:00 م</option>
          </select>
        </div>

        {/* ملاحظات */}
        <table className='text-blue-500 font-medium '>اضافة ملحوظة:
        <textarea
          rows="4"
          placeholder="معلومات إضافية تود مشاركتها..."
          className="input w-full resize-none border-green-400  "
        />
</table>
        {/* زرار */}
        <button
          type="submit"
         
          className="w-full bg-white border border-blue-600  py-3 rounded-4xl font-bold  cursor-pointer   hover:shadow-md 
                              transition-all duration-300 ease-in-out
    hover:-translate-y-1 hover:bg-blue-800
           hover:text-white transition "
           style={{padding:"15px"}}
        >
          تأكيد الحجز 
        </button>

      </form>

    </div>
       <div className='  w-96 h-52 bg-white p-6 rounded-xl shadow-md ' style={{marginTop:"90px"}}>
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
       <div className='  w-96 h-52 bg-white p-6 rounded-xl shadow-md ' style={{marginTop:"90px"}}>
        <h1 className='text-center font-medium text-3xl text-blue-500 ' style={{margin:"20px"}}>معلومات التواصل</h1>
<h2 className='font-bold text-green-600 ' style={{marginTop:"5px",marginRight:"20px"}} ><CallIcon className='bg-green-300 text-5xl' style={{marginLeft:"10px",padding:"4px",borderRadius:"50%",fontSize:"30px"}}/>01110094460</h2>
<h2 className='font-bold text-green-600 ' style={{marginTop:"5px",marginRight:"20px"}} ><AttachEmailIcon className='bg-green-300 text-5xl' style={{marginLeft:"10px",padding:"4px",borderRadius:"50%",fontSize:"30px"}}/>mmnabill211@gmail.com</h2>
<h2 className='font-bold text-green-600 ' style={{marginTop:"5px",marginRight:"20px"}} ><AddLocationAltIcon className='bg-green-300 text-5xl' style={{marginLeft:"10px",padding:"4px",borderRadius:"50%",fontSize:"30px"}}/>جمهورية مصر العربية</h2>
     </div>
    </div>
        </div>
 
  </div>
  )
}
