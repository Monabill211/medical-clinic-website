import React from 'react'
import Loader from './loder';
import Card from './card';

export default function Certificates() {
  return (
    <div>
       <h1 className='text-4xl text-blue-800 text-center'>الشهادات و الخبرات</h1>
        <h2 className='text-2xl text-green-800 text-center m-4 ' >شهادات خبرات الدكتور المثبته</h2> 
        <Loader  /> 
        <div className='flex flex-wrap justify-around gap-7'>

        <Card title="شهادة الدكتوراه" des="حاصل عليها من جامعة هارفد" img="/img/download.jpg" />
        <Card title="شهادة الدكتوراه" des="حاصل عليها من جامعة هارفد" img="/img/download.jpg" />
        <Card title="شهادة التخرج" des="حاصل عليها من جامعة هارفد" img="/img/download.jpg" />
        <Card title="شهادة التخرج" des="حاصل عليها من جامعة هارفد" img="/img/download.jpg" />
        <Card title="شهادة من جامعة" des="حاصل عليها من جامعة هارفد" img="/img/download.jpg" />
        <Card title="شهادة من جامعة" des="حاصل عليها من جامعة هارفد" img="/img/download.jpg" />
        <Card title="شهادة الماجستير" des="حاصل عليها من جامعة هارفد" img="/img/download.jpg" />
        <Card title="شهادة الماجستير" des="حاصل عليها من جامعة هارفد" img="/img/download.jpg" />
        </div>
    </div>
  )
}
