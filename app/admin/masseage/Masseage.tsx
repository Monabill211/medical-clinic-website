import React from 'react'
import Mlahotha from '../mlahotha'

export default function Masseage() {
  return (
    <div>
        <Mlahotha />
    
       
           <div className='shadow-2xs bg-white rounded-2xl mx-auto' style={{ padding: "25px", margin: "30px",}}>
            <div className='flex justify-between'>
                        <h1 className='text-right font-bold mb-4'>المرضى </h1>
    
            </div>
    <div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
        <h2>اسم المريض</h2>
        <h2>الرسالة</h2>
        <h2>رقم الهاتف</h2>
            <h2>نوع الاستفسار</h2>
        <h2>الرد</h2>
    </div>
    <div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
        <h2 className='cursor-pointer text-green-400 font-medium'> محمد نبيل </h2>
        <h2 className='w-40 text-center'> كنت عاوز اسال علي سعر عملية </h2>
        <h2>01110094460</h2>
        <h2>استفسار عام</h2>
       <select className='bg-green-400 rounded-2xl text-white font-black'>
      <option>لم يتم الرد</option>
      <option>تم الرد</option>
     
     </select>
    </div>
    <div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
           <h2 className='cursor-pointer text-green-400 font-medium'> محمد صلاح</h2>
           <h2 className='w-40 text-center'> كنت عاوز اسال علي سعر عملية </h2>
        <h5>01021219588 </h5>
      <h2>استفسار عام</h2>
     <select className='bg-green-400 rounded-2xl text-white font-black'>
      <option>لم يتم الرد</option>
      <option>تم الرد</option>
     
     </select>
    </div>
    <div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
         <h2 className='cursor-pointer text-green-400 font-medium'> محمد صلاح</h2>
         <h2 className='w-40 text-center'> كنت عاوز اسال علي سعر عملية </h2>
        <h5>01021219588 </h5>
               <h2>استفسار عام</h2>

            <select className='bg-green-400 rounded-2xl text-white font-black'>
      <option>لم يتم الرد</option>
      <option>تم الرد</option>
     
     </select>
    </div>
    <div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
           <h2 className='cursor-pointer text-green-400 font-medium'>محمد صلاح</h2>
          <h2 className='w-40 text-center'> كنت عاوز اسال علي سعر عملية </h2>
        <h5>01021219588 </h5>
               <h2>استفسار عام</h2>

        <select className='bg-green-400 rounded-2xl text-white font-black'>
      <option>لم يتم الرد</option>
      <option>تم الرد</option>
     
     </select>
    </div>
    <div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
            <h2 className='cursor-pointer text-green-400 font-medium'> محمد صلاح</h2>
         <h2 className='w-40 text-center'> كنت عاوز اسال علي سعر عملية </h2>
        <h5>01021219588 </h5>
             <h2>استفسار عام</h2>

          <select className='bg-green-400 rounded-2xl text-white font-black'>
      <option>لم يتم الرد</option>
      <option>تم الرد</option>
     
     </select>
    </div>
           
          </div>
        </div>
  )
}
