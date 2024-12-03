import Link from "next/link";
import Home from "@/app/page"

export default function Navbar() { 
  return (
   <div >
    <nav >
    <div className="w-[1432px] h-[91px] bg-[#252B42] flex justify-between items-center w-full mx-auto">

    <h3 className="text-white text-[24px] font-bold px-[135px] "> BrandName </h3>
            <div className="pr-[350px] "> 
              <ul className="flex items-center gap-[21px]">
                <li> Home </li>
                <li> Product </li>
                <li> Pricing </li>
                <li> Contact </li>
              </ul>
            </div>

          <div className="flex items-center gap-[25px] pr-8">
              <button className="text-white "> Login </button>
              <button className="bg-blue-500 rounded text-white h-[47px] w-[90px] mr-[10px] p-[10px]"> JOIN US</button>
        </div>















           
    </div>
    </nav>

    </div>
  );
}