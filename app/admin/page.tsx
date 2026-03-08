import Admincnrol from "./Admincntrol";
import Navbar from "@/app/navbar";
import Contact from "@/app/contact";

export default function Home() {
  return (
    <div dir='rtl' className="flex">
    <Admincnrol />
    <div className="flex flex-col w-full bg-#d3d3d3" style={{background:"#d3d3d3"}}>
    <Navbar />
     <Contact /> 
    </div>

    </div>
  );
}
