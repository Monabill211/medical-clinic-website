import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PersonIcon from '@mui/icons-material/Person';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Hero() {
  return (
    <div className='flex justify-around p-14' style={{padding:"50px"}}>
      <div className='img relative inline-block'>
<img src="\img\image 1.png" style={{boxShadow: "-1px 3px 20px 2px rgb(1, 1, 1, 0.5)", borderRadius:"15px"}}/>
 <div
    className="
      absolute
      -top-4
      -left-10
      w-40
      h-15
      rounded-lg
      bg-white
      flex
      justify-around
      items-center
    "
 style={{    boxShadow: "1px 1px 17px rgb(1, 1, 1, 0.5)"}} >
 
    <div>
            <h2>المرضي الراضون</h2>
    <h2 className='text-blue-800'>+15000</h2>
    </div>
   <Diversity3Icon   style={{background:"#DBEAFE", color:"#1E40AF", borderRadius:"50%"}}/>
  </div>
 <div
    className="
      absolute
      bottom-28
      -right-10
      w-40
      h-15
      rounded-lg
      bg-white
      flex
      justify-around
      items-center
    "
 style={{    boxShadow: "1px 1px 17px rgb(1, 1, 1, 0.5)"}} >
 
    <div>
            <h2>نسبة نجاح العمليات</h2>
    <h2 className='text-green-800'>99%</h2>
    </div>
   <FavoriteIcon   style={{background:"#rgb(5 150 105 / 30%);", color:"#059669", borderRadius:"50%", }}/>
  </div>
      </div>
      <div className='body'>
        <div className='text'>
            <h2 className='text-blue-600 font-medium text-4xl text-end'>رعاية طبية</h2>
            <h2 className='text-green-600 font-medium text-5xl text-end'> متقدمة وشاملة</h2>
            <p className='text-end'> نقدم خدمات طبية  عالية الجودة مع فريق من افضل الاطباء<br></br> المختصصين لضمان صحتك و راحتك  </p>
        </div>
        <div dir="rtl" className='boxs flex gap-8' style={{margin: "60px 0px 60px 10px"}}>
            <div className='box1 flex flex-col items-center  w-32 h-44 rounded-2xl'
             style={{padding:"10px" ,boxShadow: "1px 1px 9px 2px rgb(1, 1, 1, 0.5)",background:"#ffff"
   }}><PersonIcon style={{background:"#DBEAFE", color:"#1E40AF", borderRadius:"50%"}}/> 
   <h3 className='font-bold'>اطباء متخصصون</h3> 
   <p className='' style={{color:"rgb(69 71 75)", textAlign:"right"}}>فريق من افضل الاطباء ذو الخدمة العملية</p>
   </div>
           <div className='box1 flex flex-col items-center  w-32 h-44 rounded-2xl'
             style={{padding:"10px" ,boxShadow: "1px 1px 9px 2px rgb(1, 1, 1, 0.5)",background:"#ffff"
   }}><AccessTimeIcon style={{background:"#rgb(5 150 105 / 30%);", color:"#059669", borderRadius:"50%", padding:"5px"}}/> 
   <h3 className='font-bold'>اطباء متخصصون</h3> 
   <p className='' style={{color:"rgb(69 71 75)", textAlign:"right"}}> متاحين في خدمتك في اي وقت تحتاج اليه</p>
   </div>
           <div className='box1 flex flex-col items-center  w-32 h-44 rounded-2xl'
             style={{padding:"10px" ,boxShadow: "1px 1px 9px 2px rgb(1, 1, 1, 0.5)",background:"#ffff"
   }}><LocalHospitalIcon style={{background:"#DBEAFE", color:"#1E40AF", borderRadius:"50%"}}/> 
   <h3 className='font-bold'>اطباء متخصصون</h3> 
   <p className='' style={{color:"rgb(69 71 75)", textAlign:"right"}}> معدات  طبية متطورة و تقنيات حديثة</p>
   </div>
    
        </div>
        <div className='buttons flex justify-evenly'>
    <button className=" border-solid border-2 border-blue-600 rounded-4xl       cursor-pointer
" style={{padding: "10px" ,boxShadow:"0px 5px 25px 0px rgb(1, 1, 1, 0.5)"}}>  اتصل بنا <AddIcCallIcon style={{ fontSize: "15px" }}/></button>
 <button className="bg-blue-600 text-white rounded-4xl       cursor-pointer
" style={{padding: "10px " ,boxShadow:" 0px 5px 25px 0px rgb(1, 1, 1, 0.5)"}}> احجز موعدك الان < AssignmentTurnedInIcon style={{ fontSize: "15px" }}/></button>
        </div>
      </div>
    </div>
  )
}
