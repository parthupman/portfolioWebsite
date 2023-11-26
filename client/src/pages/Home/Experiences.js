// import React, { useState } from "react"
// import SectionTitle from "../../components/SectionTitle"
// import { experiences } from "../../resources/experiences";
// function Experiences() {
//     const [selectedItemIndex, setSelectedItemIndex] = useState(0)
//     return (
//         <div>
//             <SectionTitle title="Experience"/>
//             <div className="flex py-10">
//                 <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82]">
//                   {  experiences.map((experience,index)=> (
//                     <div onClick={()=>{
//                         setSelectedItemIndex(index)
//                     }}
//                     className="cursor-pointer"
//                     >
//                         <h1 className={`text-xl px-5 ${selectedItemIndex===index?'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3':'text-white'}`}>{experience.period}</h1>
//                     </div>
//                   )) }
//                 </div>
//                 <div></div>
//             </div>
//         </div>
//     )
// }

// export default Experiences


import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  const [selectedItemIndex , setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                     : "text-white"
                 } `}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 ml-20">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            expedita accusantium nulla ad odio quisquam consequuntur laudantium
            saepe ratione consectetur optio necessitatibus ut, impedit ducimus
            corrupti ullam veniam error non.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences; 
 