import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import AddCallIcon from '@mui/icons-material/AddCall';
import LanguageIcon from '@mui/icons-material/Language';

export default function Navbar() {
  return (
    <div dir="rtl" className="flex items-center justify-around" style={{    boxShadow: "0px -6px 20px 8px rgb(1, 1, 1, 0.5)"}}>
      <div className='logo cursor-pointer
'>
        <img src="\img\download.png" className='w-20 h-20' />
      </div>
      <div className="serves flex gap-7">

  {/* الرئيسية – Active */}
  <h4
    className="
      relative
      flex items-baseline gap-2.5
      cursor-pointer
      px-4 py-2
      rounded-full
      bg-teal-50
      text-teal-700
      font-medium
  font-black
      after:content-['']
      after:absolute
      after:left-1/2
      after:-bottom-1
      after:w-4
      after:h-0.5
      after:bg-teal-600
      after:rounded-full
      after:-translate-x-1/2
      after:opacity-100
   

    "
    style={{padding:"8px"}}
  >
    <HomeIcon style={{ fontSize: "15px" }} />
    الرئسية
  </h4>

  <h4
    className="
      relative
      flex items-baseline gap-2.5
      cursor-pointer
      px-4 py-2
      rounded-full
      hover:bg-teal-50
      transition

      after:content-['']
      after:absolute
      after:left-1/2
      after:-bottom-1
      after:w-4
      after:h-0.5
      after:bg-teal-600
      hover:text-teal-700

      after:rounded-full
      after:-translate-x-1/2
      after:opacity-0
      after:transition
      hover:after:opacity-100
     font-black

    "
    style={{padding:"8px"}}
  >
    <MedicalServicesIcon style={{ fontSize: "15px" }} />
    الخدمات الطبية
  </h4>

  <h4 className="relative flex items-baseline gap-2.5 cursor-pointer px-4 
  py-2 rounded-full hover:bg-teal-50 transition after:content-[''] after:absolute after:left-1/2 after:-bottom-1
   after:w-4 after:h-0.5 after:bg-teal-600 after:rounded-full after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100  
       font-black       hover:text-teal-700

"     style={{padding:"8px"}}
>
    <AccountCircleIcon style={{ fontSize: "15px" }} />
    الاطباء
  </h4>

  <h4 className="relative flex items-baseline gap-2.5 cursor-pointer px-4 py-2 rounded-full hover:bg-teal-50 transition 
  after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-4 after:h-0.5 after:bg-teal-600 after:rounded-full 
  after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100      font-black        hover:text-teal-700

"     style={{padding:"8px"}}
>
    <CalendarMonthIcon style={{ fontSize: "15px" }} />
    حجز موعد
  </h4>

  <h4 className="relative flex items-baseline gap-2.5 cursor-pointer px-4 py-2 rounded-full hover:bg-teal-50 transition 
  after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-4 after:h-0.5 after:bg-teal-600 after:rounded-full 
  after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100      font-black        hover:text-teal-700

"     style={{padding:"8px"}}
>
    <InfoIcon style={{ fontSize: "15px" }} />
    من نحن
  </h4>

  <h4 className="relative flex items-baseline gap-2.5 cursor-pointer px-4 py-2 rounded-full hover:bg-teal-50 transition 
  after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-4 after:h-0.5 after:bg-teal-600 after:rounded-full 
  after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100      font-black        hover:text-teal-700

 "     style={{padding:"8px"}}
>
    <AddCallIcon style={{ fontSize: "15px" }} />
    اتصل بنا
  </h4>

</div>

      <div className='lang flex gap-3 items-center' >
        <div>
          <LanguageIcon /> 
       <select
    >  
      <option value="ar">AR</option>
      <option value="en">EN</option>
  
    </select>
        </div>
       
        <div className='teckt text-white rounded-lg cursor-pointer

 ' style={{background:"#0E7D33", padding:"10px"}}>
        <CalendarMonthIcon style={{fontSize:"15px" , margin: "3px;"}} /> احجز موعد 
      </div>
      </div>

  
    </div>
  )
}
