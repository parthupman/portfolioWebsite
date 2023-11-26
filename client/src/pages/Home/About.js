import React from "react"
import SectionTitle from "../../components/SectionTitle"


function About() {
    const skills = ["Javascript","MongoDB","Express","React","Node","Firebase"]
    return (
    <div>
        <SectionTitle title="About"/>

        <div className="flex w-full items-center sm:flex-col">
            <div className="h-[50vh] w-1/2 sm:w-full">
                <dotlottie-player src="https://lottie.host/3e1b5d6f-7cc0-4578-8607-823713bf326b/Uqm3O2kDUl.json" background="transparent" speed="1"  autoplay></dotlottie-player>
            </div>
            <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                <p className="text-white">
                    Hello! My name is Parth Upman.I love to create applications for mobile and web.My full stack developer journey started back in 2020 when i became curious to understand how websites like amazon are designed and ended up building my own website for e-commerce
                </p>
                <p className="text-white">
                    Fast Forward to today, my main focus is to build accessible, inclusive products and digital experiences at upstatement for variety of clients Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati consequuntur ipsum optio dolorum perspiciatis ea? Laboriosam, repellendus? Consequuntur dolores ipsum deleniti rerum labore laudantium porro facere nisi saepe dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>
        </div>

        <div className="py-5">
            <h1 className="text-tertiary text-xl py-5">
                Here are few technologies I've been working recently:
            </h1>
           <div className="flex flex-wrap gap-10">
             {skills.map((skill,index)=>(
            <div className="border border-tertiary py-3 px-10">
                <h1 className="text-tertiary">{skill}</h1>    
            </div>
            ))}
           </div>
        </div>
    </div>
    )
}

export default About
