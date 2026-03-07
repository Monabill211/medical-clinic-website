import React from "react";

export default function BookingPopup({ open, onClose, onSubmit }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" style={{padding:"30px"}}>
      <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-lg relative" style={{padding:"30px"}}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">حجز موعد</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.();
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            className="border rounded-xl p-3 outline-none focus:border-green-500"
                  style={{padding:"5px"}}
          />

          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            className="border rounded-xl p-3 outline-none focus:border-green-500"
            style={{padding:"5px"}}
          />
      <div className="flex justify-around">
          <input
            type="date"
            name="date"
            className="border rounded-xl p-3 outline-none focus:border-green-500"
          />
<select>
    <option>السبت</option>
    <option>الاحد</option>
    <option>الاتنين</option>
</select>
<select>
    <option>09:00</option>
    <option>10:00</option>
    <option>11:00</option>
</select>
           </div>

          <textarea
      
            name="note"
            placeholder="ملاحظات"
            className="border rounded-xl p-3 outline-none focus:border-green-500"
          />

          <button
            type="submit"
            className="bg-green-500 text-white py-3 rounded-3xl font-bold hover:bg-green-600 transition"
            style={{padding:"15px"}}
          >
            تأكيد الحجز
          </button>
        </form>
      </div>
    </div>
  );
}
