"use client";
import React from 'react'
import Loader from './icon'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <div dir="rtl" className='bg-#0f172a' style={{marginTop:"100px",background:"#0f172a" ,color:"white" }}>
        <div className='items-center bg-#0f172a flex flex-col md:grid grid-cols-[1fr_1.5fr_1.5fr_1.5fr]  '>
<div className='1 ' style={{marginBottom:'65px'}} >
    <div className='up flex items-center w-max md:m-auto ' style={{margin:"auto"}}>
        <Loader />


        
          <h2 className='text-2xl'>عيادة الشفاء</h2>
        </div>
    <div className='center font-bold text-gray-300 ' style={{margin:"20px"}}> 
        <h1>نحن نقدم أفضل الخدمات الطبية
             بأحدث التقنيات والمعدات الطبية المتطورة، مع فريق من الأطباء 
            المتخصصين لضمان حصولكم على أفضل رعاية صحية.</h1>
    </div>
    <div className='down flex items-center justify-around text-gray-300  '>
      <span className='transition-all duration-300 ease-in-out hover:-translate-y-2 '>
        <FacebookIcon className='border border-gray-400 hover:text-white hover:bg-green-400 cursor-pointer
' style={{padding:"4px",borderRadius:"7px",fontSize:"35px"}} />
      </span>
       
     <span className='transition-all duration-300 ease-in-out hover:-translate-y-2 '>
        <InstagramIcon className='border border-gray-400 hover:text-white hover:bg-green-400 cursor-pointer
' style={{padding:"4px",borderRadius:"7px",fontSize:"35px"}} />
      </span>
      <span className='transition-all duration-300 ease-in-out hover:-translate-y-2 '>
        <LinkedInIcon className='border border-gray-400 hover:text-white hover:bg-green-400 cursor-pointer
' style={{padding:"4px",borderRadius:"7px",fontSize:"35px"}} />
      </span>
      <span className='transition-all duration-300 ease-in-out hover:-translate-y-2 '>
        <XIcon className='border border-gray-400 hover:text-white hover:bg-green-400 cursor-pointer
' style={{padding:"4px",borderRadius:"7px",fontSize:"35px"}} />
      </span>
    </div>
    </div>
      <div className='2' style={{margin:"auto" ,marginBottom:"79px"}} >
          <div className='up w-max flex items-center ' style={{marginBottom:"40px"}}>
     <h1 className='text-2xl font-bold' style={{position:"relative",top:"-15"}}>خدمتنا الطبية</h1>
            </div>
          <div className='down w-max flex items-center flex-col items-start font-bold text-gray-300 gap-4.5  '>
     <h2 className=' hover:text-green-400 cursor-pointer w-max font-bold transition-all duration-300 ease-in-out hover:-translate-x-2' 
      onClick={() => {
  document.getElementById("serves")
  ?.scrollIntoView({behavior:"smooth"})}} 
  style={{margin:"auto"}}
     >عملية الغضروف</h2>
     <h2 className=' hover:text-green-400 cursor-pointer w-max font-bold transition-all duration-300 ease-in-out hover:-translate-x-2' 
     onClick={() => {
  document.getElementById("serves")
  ?.scrollIntoView({behavior:"smooth"})}} 
    style={{margin:"auto"}}

    >عملية الركبه</h2>
     <h2 className=' hover:text-green-400 cursor-pointer w-max font-bold transition-all duration-300 ease-in-out hover:-translate-x-2' 
     onClick={() => {
  document.getElementById("serves")
  ?.scrollIntoView({behavior:"smooth"})}} 
    style={{margin:"auto"}}

    > العظام</h2>
     <h2 className=' hover:text-green-400 cursor-pointer           
      transition-all duration-300 ease-in-out hover:-translate-x-2 w-max font-bold' 
        onClick={() => {
  document.getElementById("serves")
  ?.scrollIntoView({behavior:"smooth"})}} 
    style={{margin:"auto"}}

      >عملية العظام</h2>

            </div>
      </div>
      <div className='3' style={{marginBottom:"60px"}} > 
        <div className='up flex items-centerw-max '>
               <h1 className='text-2xl   font-bold' style={{margin:"10px " ,position:"relative",top:"-15"}}>روابط سريعة</h1>
        </div>
              <div className='down w-max flex items-center flex-col items-start font-bold text-gray-300 gap-2.5  '>
     <h2 className=' hover:text-green-400 cursor-pointer w-max font-bold transition-all duration-300 ease-in-out hover:-translate-x-2'
      onClick={() => {
  document.getElementById("booking")
  ?.scrollIntoView({behavior:"smooth"})}} 
    style={{margin:"auto"}}

  >حجز موعد</h2>
     <h2 className=' hover:text-green-400 cursor-pointer w-max font-bold transition-all duration-300 ease-in-out hover:-translate-x-2' 
       onClick={() => {
  document.getElementById("serves")
  ?.scrollIntoView({behavior:"smooth"})}} 
    style={{margin:"auto"}}

     >التخصصات</h2>
     <h2 className=' hover:text-green-400 cursor-pointer w-max font-bold transition-all duration-300 ease-in-out hover:-translate-x-2' 
       onClick={() => {
  document.getElementById("about")
  ?.scrollIntoView({behavior:"smooth"})}} 
    style={{margin:"auto"}}

     >عن العيادة</h2>
     <h2 className=' hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-x-2 w-max font-bold' 
       onClick={() => {
  document.getElementById("contact")
  ?.scrollIntoView({behavior:"smooth"})}} 
    style={{margin:"auto"}}

     > اتصل بنا</h2>
     <h2 className=' hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-x-2 w-max font-bold '   style={{margin:"auto"}}
> سياسة الخصوصية</h2>
     <h2 className=' hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-x-2 w-max font-bold'   style={{margin:"auto"}}
   > اخلاء المسؤلية الطبية</h2>

            </div>
         </div>
      <div className='4' >
        <div className='up flex items-center w-max ' style={{marginBottom:"10px"}} >
               <h1 className='text-2xl  font-bold'>تواصل معانا</h1>
        </div>
       <div className='down w-max flex items-center flex-col items-start font-bold text-gray-300 gap-2.5  '>
              <a href="mailto:mmnabill211@gmail.com">


    <h2 style={{marginTop:"8px"}} className=' hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-x-2 w-max font-bold'> <AddLocationAltIcon style={{padding:"4px",borderRadius:"7px",marginLeft:"5px"}} className='text-6xl bg-green-300 text-green-600
     hover:text-white hover:bg-green-600  
      '/> جمهورية مصر العربية</h2>
                       </a>

    <a href="tel:+201021219588">

    <h2 style={{marginTop:"8px"}} className=' hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-x-2 w-max font-bold'> <CallIcon style={{padding:"4px",borderRadius:"7px",marginLeft:"5px"}} className='text-6xl bg-green-300 text-green-600
     hover:text-white hover:bg-green-600  
      '/> 01021219588</h2>
        </a>
              <a href="mailto:mmnabill211@gmail.com">
    <h2 style={{marginTop:"8px"}} className=' hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-x-2 w-max font-bold'> <AttachEmailIcon style={{padding:"4px",borderRadius:"7px",marginLeft:"5px"}} className='text-6xl bg-green-300 text-green-600
     hover:text-white hover:bg-green-600  
      '/>  mmnabill211@gmail.com  </h2>
</a>
         <a href="https://wa.me/201021219588">

    <h2  style={{marginTop:"8px"}} className=' hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-x-2 w-max font-bold'> <WhatsAppIcon style={{padding:"4px",borderRadius:"7px",marginLeft:"5px"}} className='text-6xl bg-green-300 text-green-600
     hover:text-white hover:bg-green-600  
      '/>  01021219588  </h2>
      </a>
    <h2 style={{marginTop:"8px"}} className=' hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-x-2 w-max font-bold'> <AccessTimeIcon style={{padding:"4px",borderRadius:"7px",marginLeft:"5px"}} className='text-6xl bg-green-300 text-green-600
     hover:text-white hover:bg-green-600  
      '/> الاحد-الاثنين-الخميس</h2>
    <h2 style={{marginTop:"8px"}} className=' hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-x-2 w-max font-bold'> <AccessTimeIcon style={{padding:"4px",borderRadius:"7px",marginLeft:"5px"}} className='text-6xl bg-green-300 text-green-600
     hover:text-white hover:bg-green-600  
      '/> 09:00-10:00-11:00</h2>

            </div>
      </div>

        </div>
<div className="w-full h-[2px] bg-gray-600 my-6" style={{margin:"10PX"}}></div>
<div className='flex justify-around'>
      <div><p className="text-center text-gray-400 text-sm pb-4">
  © 2026 Your Company Name. All rights reserved.
</p></div>
      <div><p className="text-center text-gray-400 text-sm pb-4">
  معتمد من وزارة الصحة
</p></div>
</div>
  
    </div>
  )
}
