import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export default function Mlahotha() {
  return (
    
       <div className='boxs flex gap-8 justify-around' style={{ marginTop: "35px" }}>
              <div className='box-1 bg-white shadow-2xs rounded-2xl w-52' style={{ padding: "25px" }}>
                <h2 className='text-center text-gray-600'> اجمالي المرضي</h2>
                <div className='flex justify-between'>
                  <h2 className='text-2xl'>2.111</h2>
                  <span className='text-blue-800 bg-blue-400 w-10 h-10 text-center' style={{ padding: "8px", borderRadius: '10px' }}><AccountCircleIcon /></span>
                </div>
                <p className='text-green-500' style={{ fontSize: "14px" }}>12% هذا الشهر</p>
              </div>
      
              <div className='box-1 bg-white shadow-2xs rounded-2xl w-52' style={{ padding: "25px" }}>
                <h2 className='text-center text-gray-600'> موعيد اليوم</h2>
                <div className='flex justify-between'>
                  <h2 className='text-2xl'>20</h2>
                  <span className='text-blue-800 bg-blue-400 w-10 h-10 text-center' style={{ padding: "8px", borderRadius: '10px' }}><AccessTimeIcon /></span>
                </div>
                <p className='text-blue-500' style={{ fontSize: "14px", color: "#0891B2" }}>5 مواعيد لم يتم تاكيدها</p>
              </div>
      
              <div className='box-1 bg-white shadow-2xs rounded-2xl w-52' style={{ padding: "25px" }}>
                <h2 className='text-center text-gray-600'> اجمالي المرضي</h2>
                <div className='flex justify-between'>
                  <h2 className='text-2xl'>2.111</h2>
                  <span className='text-blue-800 bg-blue-400 w-10 h-10 text-center' style={{ padding: "8px", borderRadius: '10px' }}>ic</span>
                </div>
                <p className='text-green-500' style={{ fontSize: "14px" }}>12% هذا الشهر</p>
              </div>
      
              <div className='box-1 bg-white shadow-2xs rounded-2xl w-52' style={{ padding: "25px" }}>
                <h2 className='text-center text-gray-600'> اجمالي المرضي</h2>
                <div className='flex justify-between'>
                  <h2 className='text-2xl'>2.111</h2>
                  <span className='text-blue-800 bg-blue-400 w-10 h-10 text-center' style={{ padding: "8px", borderRadius: '10px' }}>ic</span>
                </div>
                <p className='text-green-500' style={{ fontSize: "14px" }}>12% هذا الشهر</p>
              </div>
            </div>
    
  )
}
