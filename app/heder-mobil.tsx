'use client'
import CloseIcon from "@mui/icons-material/Close";

export default function Hedermobil({ open, close }) {
  return (
    <div
      className={`
        fixed inset-0 z-[999] bg-white
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b">
        <button
          onClick={close}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <CloseIcon />
        </button>

        <h2 className="font-bold text-green-600">
          د. عمرو أمل
        </h2>
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-6 text-right px-6 py-10 text-gray-700">
        <li className="font-semibold">الرئيسية</li>
        <li>عن دكتور عمرو أمل</li>
        <li>المقالات</li>
        <li>ميديا</li>
      </ul>

      {/* Buttons */}
      <div className="absolute bottom-6 left-0 w-full px-6 space-y-4">
        <button className="w-full py-4 rounded-full bg-teal-600 text-white font-semibold">
          احجز موعد
        </button>

        <button className="w-full py-4 rounded-full bg-green-500 text-white font-semibold flex items-center justify-center gap-2">
          واتساب
        </button>
      </div>
    </div>
  );
}
