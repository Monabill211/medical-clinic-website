import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
export default function Thankyou() {
  return (
    <div style={{padding:"200px"}}>

   
    <div className=' h-550px bg-white rounded-3xl shadow-2xl' style={{margin:"auto",height:"650px",padding:"60px",width:"700px"}}>
      <div className='text-center '><CheckIcon className='bg-green-600 w-28 shadow-2xl text-white  ' style={{borderRadius:"50%",width:"90px ",marginBottom:"35px" ,height:"90px",boxShadow:"0 10px 30px 15px rgba(16, 185, 129, .3);"}} /></div>
      <h1 className='text-center text-gray-900 text-3xl font-extrabold' style={{lineHeight:"1.3",marginBottom:"12px"}}> ! شكراً لتواصلك معنا 
</h1>
<p className='text-gray-500 text-center text-lg fo' style={{marginBottom:"50px"}}>تم استلام رسالتك بنجاح. سيقوم فريقنا بمراجعتها والتواصل معك في أقرب وقت ممكن.
</p>
<div>
<h3 className='text-center text-2xl font-bold text-gray-800' style={{marginBottom:"16px"}} > ماذا يمكنك أن تفعل الآن؟
</h3>
<div className='flex justify-around'>
    <div style={{padding:"15px"}} className='box flex justify-around items-center flex-col text-gray-800 w-40 bg-gray-100 h-28 rounded-2xl hover:bg-white hover:text-green-400 hover:-translate-y-1 hover:border-1 hover:border-green-400 transition-all duration-300 ease-in-out ' > 
        <span className='bg-white w-12 h-12 flex justify-center items-center shadow-sm' style={{borderRadius:"50%"}}><AddLocationIcon/></span>
        <span className='font-medium'> زيارة العيادة</span>
    </div>
    <div style={{padding:"15px"}} className='box flex justify-around items-center flex-col text-gray-800 w-40 bg-gray-100 h-28 rounded-2xl hover:bg-white hover:text-green-400 hover:-translate-y-1 hover:border-1 hover:border-green-400 transition-all duration-300 ease-in-out ' > 
        <span className='bg-white w-12 h-12 flex justify-center items-center shadow-sm' style={{borderRadius:"50%"}}><WhatsAppIcon/></span>
        <span className='font-medium'> الارسال الي الوتساب</span>
    </div>
    <div style={{padding:"15px"}} className='box flex justify-around items-center flex-col text-gray-800 w-40 bg-gray-100 h-28 rounded-2xl hover:bg-white hover:text-green-400 hover:-translate-y-1 hover:border-1 hover:border-green-400 transition-all duration-300 ease-in-out ' > 
        <span className='bg-white w-12 h-12 flex justify-center items-center shadow-sm' style={{borderRadius:"50%"}}><LocalPhoneIcon/></span>
        <span className='font-medium'>يمكنك الاتصال بنا</span>
    </div>
</div>

</div>
<div style={{marginTop:"50px",textAlign:"center"}}>
    <Link href="/">
    
    <button className=' transition-all duration-400 ease-in-out text-white hover:-translate-y-1 text-center rounded-4xl font-bold text-2xl w-48 cursor-pointer' style={{padding:"20px",background:"#0f766e",boxShadow:"0 4px 20px rgba(13, 148, 136, .3);"}}>العودة للرئسية</button>
</Link>
</div>
    </div> 
    </div>
  )
}
