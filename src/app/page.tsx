import Navbar from "@/app/components/navbar" 


export default function Home () { 
  return(
   
      
    <div className="mx-auto  p-[80px] gap-[80px] bg-[#252B42] flex flex-col items-center justify-center">{/* Parentdiv of whole page except navbar */}
    <div className="w-[701px] h-[496px] p-[40px] gap-[40px] flex flex-col items-center">
    <h5 className="w-[77px] h-[24px] text-[16px] font-montserrat text-[#23A6F0] flex justify-center items-center">
    Welcome
    </h5>
    <div className="w-[542px] h-[160px] text-[58px] weight-[700] text-white text-center font-montserrat">
    Selling on the internet like a pro
    </div>
    <div className="w-[536px] h-[60px] text-[20px] text-white text-center font-montserrat">
    We know how large objects will act, but things on a small scale just do not act that way
    </div>


     {/* Button */}
    <div className="flex gap-[10px] mt-[20px]">
      <button className="w-[193px] h-[52px] rounded-[5px] bg-[#23A6F0] text-white">
        Get quote now
      </button>
      <button className="w-[193px] h-[52px] rounded-[5px] border-[1px] border-[#23A6F0] text-[#23A6F0]">
        Learn More
      </button>
    </div>


</div>





         {/* parent div */}
<div className="h-[292px] w-[1046px] gap-[30px] flex justify-center items-center ">

      {/* 1 div */}
      <div className="w-[500px] h-[292px] p-[35px] gap-[20px] bg-white bg-accentued-drop-shadow">
      <div className="w-[70px] h-[76px] rounded-[10px] p-[22px] m-[19px] gap-[10px] bg-[#FFDCD1] "></div>
      <h5 className="h-[24px] m-[19px] text-[#252B42] text-montserrat weight-700 font-bold    text-montserrat text-[15px]"> training Courses </h5>
        
      <div className="w-[50px] h-[2px] m-[19px] bg-[#E74040]  line"></div>
      <p className="text-[#737373] w-[222px] h-[60px] text-Montserrat text-[14px] m-[19px]  ">The gradual accumulation of 
        information about atomic and 
        small-scale behaviour...</p>
          </div>




        {/* 2 div */}
      <div className="w-[500px] h-[292px] p-[35px] bg-white bg-accentued-drop-shadow">
      <div className="w-[70px] h-[76px] rounded-[10px] p-[22px] m-[19px] gap-[10px] bg-[#B9EAA8] "></div>
      <h5 className="h-[24px] m-[19px] text-[#252B42] text-montserrat weight-700 font-bold  text-montserrat text-[15px]"> 2,769 online courses </h5>
      <div className="w-[50px] h-[2px] m-[19px] bg-[#E74040]  line"></div>
      <p className="text-[#737373] w-[222px] h-[60px] text-Montserrat text-[14px] m-[19px]  ">The gradual accumulation of 
      information about atomic and 
      small-scale behaviour...</p>
      </div>






        {/* 3 div */}
      <div className="w-[500px] h-[292px] p-[35px] bg-[#23A6F0] bg-accentued-drop-shadow">
      <div className="w-[70px] h-[76px] rounded-[10px] p-[22px] m-[19px] gap-[10px] bg-white "></div>
      <h5 className="h-[24px] m-[19px] text-white text-montserrat weight-700 font-bold    text-montserrat text-[15px]"> training Courses </h5>
      <div className="w-[50px] h-[2px] m-[19px] bg-white  line"></div>
      <p className="text-white w-[222px] h-[60px] text-Montserrat text-[14px] m-[19px]  ">The gradual accumulation of 
      information about atomic and 
      small-scale behaviour...</p>
      </div>
</div>




</div>

  )
}


  
