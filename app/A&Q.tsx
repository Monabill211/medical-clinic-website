"use client";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import Loader from './loder';


export default function AQ() {
  const [openIndex, setOpenIndex] = useState(null);
const faqs = [
    {
      q: " ما هي عملية تغيير مفصل الفخذ؟       ",
      a: 
      `
     هي إجراء جراحي يستبدل فيه مفصل تالف بمفصل آخر صناعي لاستعادة الحركة وتخفيف شعور المريض بالألم.
      `
    },
    {
      q: " ما هي عملية تغيير مفصل الفخذ؟       ",
      a: 
      `
     هي إجراء جراحي يستبدل فيه مفصل تالف بمفصل آخر صناعي لاستعادة الحركة وتخفيف شعور المريض بالألم.
      `
    },
    {
      q: " ما هي عملية تغيير مفصل الفخذ؟       ",
      a: 
      `
     هي إجراء جراحي يستبدل فيه مفصل تالف بمفصل آخر صناعي لاستعادة الحركة وتخفيف شعور المريض بالألم.
      `
    },
    {
      q: "عمليات كسور العظام: ما هي الأسباب والأنواع؟",
      a: `تحدث كسور العظام نتيجة الحوادث أو السقوط،
      وتتنوع بين كسور بسيطة، مركبة، أو كسور تحتاج تدخل جراحي.`
    }
  ];

  return (
    <> 
     <h1 className='text-4xl text-blue-800 text-center' style={{marginTop:"25px"}}>الاسئلة الاكثر شيوعا</h1>
        <h2 className='text-2xl text-green-800 text-center m-4 ' >      إجابات على أكثر الأسئلة شيوعاً حول جراحات العظام والمفاصل</h2> 
        <Loader />
      <div className=" mx-auto mt-10 space-y-4">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            {/* السؤال */}
            <div
        dir="rtl"
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
              className={`flex items-center w-11/12 md:w-w-2/3 justify-between cursor-pointer rounded-3xl border px-6 py-5 transition hover:border-green-400 hover:text-green-400   hover:shadow-lg 
             transition-all duration-300 ease-in-out
    hover:-translate-y-1 
                ${isOpen ? "border-teal-500" : "border-gray-200"}
                bg-white`}
                style={{margin:"20px auto",padding:"10px"}}
            >
              <h3 className="text-lg font-medium text-right">
                {item.q}
              </h3>

              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white
                  ${isOpen ? "bg-red-500" : "bg-teal-600"}`}
              >
                {isOpen ? "×" : "+"}
              </div>
            </div>

            {/* الإجابة */}
            {isOpen && (
              <div style={{margin:"10px auto",padding:"15px"}} className="mt-4 w-11/12 md:w-w-2/3 
              text-center rounded-2xl border border-teal-500 bg-white px-6 py-5 text-gray-700 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
    </>
  )
}
