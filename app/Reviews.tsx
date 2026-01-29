import React from 'react'
import Loader from './loder';
import StarIcon from '@mui/icons-material/Star';
export default function Reviews() {
  return (
    <div>
       <div style={{margin:"50px",}}>
   
 
        <h1 className='text-4xl text-blue-800 text-center'> اراء عملائنا</h1>
        <h2 className='text-2xl text-green-800 text-center m-4 '  >اراء عملاءنا عنا </h2> 
        <Loader  />     </div>
        <div className='flex justify-around flex-wrap '>
            <div className='  justify-end items-center gap-12  cursor-pointer     hover:shadow-lg 
             transition-all duration-300 ease-in-out
    hover:-translate-y-2
    hover:border
     border-transparent
    hover:border-green-400
          w-80 h-40 bg-white  bg-white p-6
       rounded-xl shadow-md ' style={{marginTop:"10px" , padding:"15px"}}>
        <div className='text-center'>
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
             <h1 className='text-gray-500 font-bold ' style={{margin:"20px"}}>التعامل رائع جدا و كل شيء ممتاز</h1>
     <h2 className='font-bold text-2xl text-end'>محمد نبيل</h2>
     <h4 className=' text-gray-500 text-end'> مريض لدينا</h4>
        </div>
    
     </div>
             <div className='  justify-end items-center gap-12  cursor-pointer     hover:shadow-lg 
             transition-all duration-300 ease-in-out
    hover:-translate-y-2
    hover:border
     border-transparent
    hover:border-green-400
          w-80 h-40 bg-white  bg-white p-6
       rounded-xl shadow-md ' style={{marginTop:"10px" , padding:"15px"}}>
        <div className='text-center'>
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
             <h1 className='text-gray-500 font-bold ' style={{margin:"20px"}}>التعامل رائع جدا و كل شيء ممتاز</h1>
     <h2 className='font-bold text-2xl text-end'>محمد نبيل</h2>
     <h4 className=' text-gray-500 text-end'> مريض لدينا</h4>
        </div>
    
     </div>
             <div className='  justify-end items-center gap-12  cursor-pointer     hover:shadow-lg 
             transition-all duration-300 ease-in-out
    hover:-translate-y-2
    hover:border
     border-transparent
    hover:border-green-400
          w-80 h-40 bg-white  bg-white p-6
       rounded-xl shadow-md ' style={{marginTop:"10px" , padding:"15px"}}>
        <div className='text-center'>
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
            <StarIcon className='text-yellow-400' />
             <h1 className='text-gray-500 font-bold ' style={{margin:"20px"}}>التعامل رائع جدا و كل شيء ممتاز</h1>
     <h2 className='font-bold text-2xl text-end'>محمد نبيل</h2>
     <h4 className=' text-gray-500 text-end'> مريض لدينا</h4>
        </div>
    
     </div>

        </div>
    </div>
  )
}
