"use client";

import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import AddCallIcon from '@mui/icons-material/AddCall';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const menuItems = [
    { icon: <HomeIcon fontSize="small" />, label: "الرئيسية",              id: null       },
    { icon: <MedicalServicesIcon fontSize="small" />, label: "الخدمات الطبية",     id: "serves"   },
    { icon: <AccountCircleIcon fontSize="small" />, label: "معلومات عن الدكتور",  id: "about"    },
    { icon: <CalendarMonthIcon fontSize="small" />, label: "حجز موعد",            id: "booking"  },
    { icon: <InfoIcon fontSize="small" />, label: "الأسئلة الأكثر شيوعاً", id: "faqs"     },
    { icon: <AddCallIcon fontSize="small" />, label: "اتصل بنا",             id: "contact"  },
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <div dir="rtl" className="flex items-center justify-around" style={{ boxShadow: "0px -6px 20px 8px rgb(1,1,1,0.5)" }}>

        {/* زرار الهامبرجر - موبايل فقط */}
        <button
          onClick={() => setOpen(true)}
          className="block md:hidden p-2 rounded-lg hover:bg-teal-50 text-teal-700 transition"
        >
          <div className="flex flex-col gap-1.5">
            <span className="block w-6 h-0.5 bg-teal-700 rounded"></span>
            <span className="block w-6 h-0.5 bg-teal-700 rounded"></span>
            <span className="block w-6 h-0.5 bg-teal-700 rounded"></span>
          </div>
        </button>

        {/* اللوجو */}
        <Link href="/">
          <div className="logo cursor-pointer">
            <img src="/img/download.png" className="w-20 h-20" alt="logo" />
          </div>
        </Link>

        {/* القائمة - ديسكتوب فقط */}
        <div className="hidden md:flex gap-7">

          <h4
            className="relative flex items-baseline gap-2.5 cursor-pointer px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-black
              after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-4 after:h-0.5 after:bg-teal-600 after:rounded-full after:-translate-x-1/2 after:opacity-100"
            style={{ padding: "8px" }}
          >
            <HomeIcon style={{ fontSize: "15px" }} />
            الرئيسية
          </h4>

          <h4
            className="relative flex items-baseline gap-2.5 cursor-pointer px-4 py-2 rounded-full hover:bg-teal-50 hover:text-teal-700 font-black transition
              after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-4 after:h-0.5 after:bg-teal-600 after:rounded-full after:-translate-x-1/2 after:opacity-0 after:transition hover:after:opacity-100"
            style={{ padding: "8px" }}
            onClick={() => document.getElementById("serves")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MedicalServicesIcon style={{ fontSize: "15px" }} />
            الخدمات الطبية
          </h4>

          <h4
            className="relative flex items-baseline gap-2.5 cursor-pointer px-4 py-2 rounded-full hover:bg-teal-50 hover:text-teal-700 font-black transition
              after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-4 after:h-0.5 after:bg-teal-600 after:rounded-full after:-translate-x-1/2 after:opacity-0 after:transition hover:after:opacity-100"
            style={{ padding: "8px" }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <AccountCircleIcon style={{ fontSize: "15px" }} />
            معلومات عن الدكتور
          </h4>

          <h4
            className="relative flex items-baseline gap-2.5 cursor-pointer px-4 py-2 rounded-full hover:bg-teal-50 hover:text-teal-700 font-black transition
              after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-4 after:h-0.5 after:bg-teal-600 after:rounded-full after:-translate-x-1/2 after:opacity-0 after:transition hover:after:opacity-100"
            style={{ padding: "8px" }}
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            <CalendarMonthIcon style={{ fontSize: "15px" }} />
            حجز موعد
          </h4>

          <h4
            className="relative flex items-baseline gap-2.5 cursor-pointer px-4 py-2 rounded-full hover:bg-teal-50 hover:text-teal-700 font-black transition
              after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-4 after:h-0.5 after:bg-teal-600 after:rounded-full after:-translate-x-1/2 after:opacity-0 after:transition hover:after:opacity-100"
            style={{ padding: "8px" }}
            onClick={() => document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" })}
          >
            <InfoIcon style={{ fontSize: "15px" }} />
            الأسئلة الأكثر شيوعاً
          </h4>

          <h4
            className="relative flex items-baseline gap-2.5 cursor-pointer px-4 py-2 rounded-full hover:bg-teal-50 hover:text-teal-700 font-black transition
              after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-4 after:h-0.5 after:bg-teal-600 after:rounded-full after:-translate-x-1/2 after:opacity-0 after:transition hover:after:opacity-100"
            style={{ padding: "8px" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <AddCallIcon style={{ fontSize: "15px" }} />
            اتصل بنا
          </h4>

        </div>

        {/* اللغة + زرار الحجز */}
        <div className="lang flex gap-3 items-center">
          <div className="flex items-center gap-1">
            <LanguageIcon />
            <select>
              <option value="ar">AR</option>
              <option value="en">EN</option>
            </select>
          </div>

          <div
            className="text-white rounded-lg cursor-pointer"
            style={{ background: "#0E7D33", padding: "10px" }}
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            <CalendarMonthIcon style={{ fontSize: "15px", margin: "3px" }} /> احجز موعد
          </div>
        </div>

      </div>

      {/* ===== MOBILE DRAWER ===== */}

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        dir="rtl"
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header الدراور */}
        <div className="flex items-center justify-between p-4 border-b border-teal-100">
          <img src="/img/download.png" className="w-14 h-14" alt="logo" />
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full hover:bg-teal-50 text-teal-700 transition"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-5 p-4 ">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.id ? scrollTo(item.id) : setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-teal-50 hover:text-teal-700 text-gray-700 font-bold transition text-right w-full"
            >
              <span className="text-teal-600">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
           {/* اللغة + زرار الحجز */}
        <div className="lang flex gap-3 items-center text-green-600" style={{margin:" 20px auto"}}>
          <div className="flex items-center gap-1">
            <LanguageIcon />
            <select>
              <option value="ar">AR</option>
              <option value="en">EN</option>
            </select>
          </div>
          </div>

        {/* زرار الحجز في الأسفل */}
        <div className="p-4 mt-auto border-t border-teal-100">
          <button
            onClick={() => scrollTo("booking")}
            className="w-4/5 flex items-center justify-center gap-2 text-white rounded-3xl py-3 font-bold transition hover:opacity-90"
            style={{ background: "#0E7D33",padding:"15px",margin:"auto" }}
          >
            <CalendarMonthIcon fontSize="small" />
            احجز موعد
          </button>
        </div>
      </div>
    </>
  );
}