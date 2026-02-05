import React from 'react'
import Loader from './loder';
import Input from './input';
import Inputph from './inputnu';
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Contact() {
  return (
    <div>
       <div style={{margin:"50px"}}>
   
 
        <h1 className='text-4xl text-blue-800 text-center'>تواصل معانا</h1>
        <h2 className='text-2xl text-green-800 text-center m-4 ' >نحن هنا لخدمتك تواصل معانا ولاا تردد</h2> 
        <Loader  />     </div>
      <div  className='flex justify-around flex-col items-center md:flex-row'  >

  <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md " style={{padding:"15px",marginBottom:"90px" }}>
      
      {/* العنوان */}
      <h2 className="text-center   mb-6 flex items-center justify-center gap-2 text-blue-500 font-black text-3xl" style={{marginBottom:"25px"}}>
         ارسل لنا رسالتك
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
            <option> اختر الموضوع</option>
            <option>استفسار عام</option>
            <option>استشارة طبية</option>
            <option>حجز موعد</option>
            <option> شكوي و اقتراح</option>
            <option> اخري</option>
          </select> 
        
        </div>

        {/* ملاحظات */}
        <table className='text-blue-500 font-medium '>الرسالة:
        <textarea
          rows="4"
          placeholder="  اكت رسالتك هنا..."

          className="input w-full resize-none border-green-400 border-2  rounded-3xl "
          style={{width:"190% " }}
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
          ارسال رسالة  <SendIcon className='rotate-3'/>
        </button>

      </form>

    </div>
       <div className='  w-96 h-52 bg-white p-6 rounded-xl shadow-md ' style={{marginBottom:"360px"}}>
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
    <a href="tel:+201021219588"
    ><div className=' flex justify-end items-center gap-12  cursor-pointer     hover:shadow-lg 
             transition-all duration-300 ease-in-out
    hover:-translate-x-2
    hover:border
     border-transparent
    hover:border-green-400
      w-96 h-16 bg-white p-6
       rounded-xl shadow-md ' style={{marginTop:"90px" , padding:"15px"}}>
        <div className='text-end'>
             <h1 className='text-gray-500 '>:رقم الهاتف</h1>
     <h2 className='font-bold'>01021219588</h2>
        </div>
    <CallIcon style={{padding:"4px",borderRadius:"50%"}} className='text-6xl bg-green-300 text-green-600
     hover:text-white hover:bg-green-600  

      '/>
     </div> </a>

       
     <a href="https://wa.me/201021219588">
      <div className=' flex justify-end items-center gap-12  cursor-pointer     hover:shadow-lg 
             transition-all duration-300 ease-in-out
    hover:-translate-x-2
    hover:border
     border-transparent
    hover:border-green-400
      w-96 h-16 bg-white p-6
       rounded-xl shadow-md ' style={{marginTop:"10px" , padding:"15px"}}>
        <div className='text-end'>
             <h1 className='text-gray-500 '>:الوتساب</h1>
     <h2 className='font-bold'>01021219588</h2>
        </div>
    <WhatsAppIcon style={{padding:"4px",borderRadius:"50%"}} className='text-6xl bg-green-300 text-green-600
     hover:text-white hover:bg-green-600  

      '/>
     </div>
     </a>
      <a href="mailto:mmnabill211@gmail.com">
        
<div className=' flex justify-end items-center gap-12  cursor-pointer     hover:shadow-lg 
             transition-all duration-300 ease-in-out
    hover:-translate-x-2
    hover:border
     border-transparent
    hover:border-green-400
      w-96 h-16 bg-white p-6
       rounded-xl shadow-md ' style={{marginTop:"10px" , padding:"15px"}}>
        <div className='text-end'>
             <h1 className='text-gray-500 '>:الايميل</h1>
     <h2 className='font-bold'> mmnabill211@gmail.com</h2>
        </div>
    <AttachEmailIcon style={{padding:"4px",borderRadius:"50%"}} className='text-6xl bg-green-300 text-green-600
     hover:text-white hover:bg-green-600  

      '/>
     </div>
      </a>

       
<a href="https://www.google.com/maps/search/القاهرة">


     <div className=' flex justify-end items-center gap-12  cursor-pointer     hover:shadow-lg 
             transition-all duration-300 ease-in-out
    hover:-translate-x-2
    hover:border
     border-transparent
    hover:border-green-400
      w-96 h-16 bg-white p-6
       rounded-xl shadow-md ' style={{marginTop:"10px" , padding:"15px"}}>
        <div className='text-end'>
             <h1 className='text-gray-500 '>:العنوان</h1>
     <h2 className='font-bold'>جمهورية مصر العربية</h2>
        </div>
    <AddLocationAltIcon style={{padding:"4px",borderRadius:"50%"}} className='text-6xl bg-green-300 text-green-600
     hover:text-white hover:bg-green-600  

      '/>
     </div>
     </a>
       
    </div>
        </div>
 
    </div>
  )
}
