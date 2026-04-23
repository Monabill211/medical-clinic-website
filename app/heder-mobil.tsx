"use client";

import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import AddCallIcon from '@mui/icons-material/AddCall';
import CloseIcon from '@mui/icons-material/Close';

export default function Hedermobil({ open, close }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  const menuItems = [
    { icon: <HomeIcon fontSize="small" />, label: "الرئيسية",            id: null       },
    { icon: <MedicalServicesIcon fontSize="small" />, label: "الخدمات الطبية",    id: "serves"   },
    { icon: <AccountCircleIcon fontSize="small" />, label: "معلومات عن الدكتور", id: "about"    },
    { icon: <CalendarMonthIcon fontSize="small" />, label: "حجز موعد",           id: "booking"  },
    { icon: <InfoIcon fontSize="small" />, label: "الأسئلة الأكثر شيوعاً", id: "faqs"    },
    { icon: <AddCallIcon fontSize="small" />, label: "اتصل بنا",            id: "contact"  },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={close}
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
            onClick={close}
            className="p-2 rounded-full hover:bg-teal-50 text-teal-700 transition"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.id ? scrollTo(item.id) : close()}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-teal-50 hover:text-teal-700 text-gray-700 font-bold transition text-right w-full"
            >
              <span className="text-teal-600">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* زرار الحجز في الأسفل */}
        <div className="p-4 mt-auto border-t border-teal-100">
          <button
            onClick={() => scrollTo("booking")}
            className="w-full flex items-center justify-center gap-2 text-white rounded-xl py-3 font-bold transition hover:opacity-90"
            style={{ background: "#0E7D33" }}
          >
            <CalendarMonthIcon fontSize="small" />
            احجز موعد
          </button>
        </div>
      </div>
    </>
  );
}