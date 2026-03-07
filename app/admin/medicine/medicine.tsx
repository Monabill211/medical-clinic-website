"use client";
import { useState } from "react";
import html2pdf from "html2pdf.js";

export default function Page() {
 const [medicines, setMedicines] = useState([
  { name: "", dose: "1" },
  { name: "", dose: "1" },
  { name: "", dose: "1" },
  { name: "", dose: "1" },
]);

 const [analysis1, setAnalysis1] = useState("");
  const [analysis2, setAnalysis2] = useState("");
  const [note, setnote] = useState("");
  
  const generatePDF = () => {
    const element = document.getElementById("pdf-content");
    html2pdf().from(element).save("report.pdf");
  };
const updateMedicine = (index, field, value) => {
  const newMeds = [...medicines];
  newMeds[index][field] = value;
  setMedicines(newMeds);
};

  return (
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" style={{margin:"auto"}}>
      
      {/* الفورم */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-4 text-center " style={{marginBottom:"15px"}}>إدخال البيانات</h2>
             <div className="flex flex-col gap-6">
        <div className="flex items-center gap-1 flex-col" style={{padding:"5px"}}>

       {medicines.map((med, i) => (
  <div key={i} className="flex items-center gap-2 p-1 ">
    <label className="block font-semibold">
      اسم الدواء
    </label>
    <input
      type="text"
      value={med.name}
      onChange={(e) => updateMedicine(i, "name", e.target.value)}
      className="w-full border rounded px-3 py-2"
      placeholder="اكتب اسم الدواء"
    />

    <label>الجرعة:</label>
    <select
      className="w-16 border rounded"
      value={med.dose}
      onChange={(e) => updateMedicine(i, "dose", e.target.value)}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>
))}
</div>
        <div className="flex items-center gap-1" style={{padding:"0 15px"}}>
        <label className="block mb-2 font-semibold">اسم التحليل</label>
        <input
          type="text"
          value={analysis1}
          onChange={(e) => setAnalysis1(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="اكتب اسم التحليل"
        />
        
     </div>
        <div className="flex items-center gap-1" style={{padding:"0 15px"}}>
        <label className="block mb-2 font-semibold">اسم التحليل</label>
        <input
          type="text"
          value={analysis2}
          onChange={(e) => setAnalysis2(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="اكتب اسم التحليل"
        />
        
     </div>
        <div className="flex items-center gap-1" style={{padding:"15px 15px"}}>
        <label className="block mb-2 font-semibold">ملحوظة مهمه</label>
        <textarea
          
          value={note}
          onChange={(e) => setnote(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="اكتب ملحوظة"
        />
        
     </div>
        </div> 
      </div>

      {/* المعاينة / التقرير */}
      <div
        id="pdf-content"
        className="bg-white p-6 rounded shadow"
      >


     
        <h1 className="text-xl font-bold mb-4 text-center" style={{marginBottom:"15px"}}>روشتة</h1>
        <div className="flex flex-col gap-12">
<div className="flex justify-between flex-col gap-7  " style={{padding:"0 25px"}}>
     {medicines.map((med, i) => (
  <div key={i} className="flex justify-between px-6">
    <p className="text-lg">
      اسم الدواء: <span className="font-semibold">{med.name || "—"}</span>
    </p>
    <p>
      الجرعة: <span className="font-semibold">{med.dose}</span>
    </p>
  </div>
))}

</div>
       
        <p className="text-lg" style={{padding:"0 25px"}}>
          اسم التحليل: <span className="font-semibold">{analysis1 || "—"}</span>
        </p>
        <p className="text-lg" style={{padding:"0 25px"}}>
          اسم التحليل: <span className="font-semibold">{analysis2 || "—"}</span>
        </p>  
        <p className="text-lg" style={{padding:"0 25px"}}>
           ملحوظة مهمة: <span className="font-semibold">{note || "—"}</span>
        </p>  
         </div>
      </div>

      {/* زرار PDF */}
      <div className="md:col-span-2 flex justify-center">
        <button
          onClick={generatePDF}
          className="bg-blue-700 cursor-pointer text-white px-6 py-2 rounded-2xl w-40 h-12 hover:-translate-y-1 hover:bg-blue-500 transition-all duration-400 ease-in-out hover:shadow-2xl"
        >
          تحميل PDF
        </button>
      </div>
    </div>
  );
}
