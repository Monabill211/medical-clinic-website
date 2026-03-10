import Admincnrol from "./Admincntrol";
import Navbar from "./navbar";
import Contact from "./contact";
import Mlahotha from "./mlahotha";

export default function Home() {
  return (
    <div dir='rtl' className="flex">
    <Admincnrol />
    <div className="flex flex-col w-full bg-#d3d3d3" style={{background:"#d3d3d3"}}>
    <Navbar />
     <Mlahotha /> 
     <Contact/>
    </div>

    </div>
  );
}
