"use client"
import React, { useEffect, useState } from 'react'
import Mlahotha from '../mlahotha'

export default function Piernts() {

  const [patients, setPatients] = useState([])

 useEffect(() => {
    fetch("https://backendmedcilo-production.up.railway.app/api/bookings")
      .then(res => res.json())
      .then(data => {
        setPatients(data)
      })
      .catch(err => {
        console.log("Error fetching patients:", err)
      })
  }, [])

  return (
    <div>
      <Mlahotha />

      <div className='shadow-2xs bg-white rounded-2xl mx-auto' style={{ padding: "25px", margin: "30px",}}>

        <div className='flex justify-between'>
          <h1 className='text-right font-bold mb-4'>المرضى </h1>
        </div>

        <div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
          <h2>اسم المريض</h2>
          <h2>العمر</h2>
          <h2>رقم الهاتف</h2>
          <h2>تاريخ التسجيل </h2>
          <h2>الحالة</h2>
        </div>

        {patients.map((patient, index) => (
          <div key={index} className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
            <h2 className='cursor-pointer text-green-400 font-medium'>
              {patient.name}
            </h2>
            <h2>{patient.age}</h2>
            <h2>{patient.phone}</h2>
            <h2>{new Date(patient.createdAt).toLocaleDateString()}</h2>
            <h2>
              <span className='text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm cursor-pointer'>
                تاكيد
              </span>
            </h2>
          </div>
        ))}

      </div>
    </div>
  )
}