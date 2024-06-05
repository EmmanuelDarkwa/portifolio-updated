import React from "react";
import JavaScript from '../assets/javascript.png'
import Tailwind from '../assets/tailwind.png'
import Css from '../assets/css.png'
import Html from '../assets/html.png'
import Node from '../assets/node.png'
import react from '../assets/react.png'
import Github from '../assets/github.png'
import express from '../assets/express-js.png'
import mongo from '../assets/mongo.png'


const Skills = () => {
    return (
       <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
            {/*Container */}
            <div className="max-w-[1000px] p-4 flex flex-col justify-center w-full h-full mx-auto">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-400 ">Skills</p>
                    <p className="py-4">// These are the technologies I've worked with.</p>
                </div>
                <div className="w-full grid-cols-2 grid sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Html} alt="HTML icon"/>
                        <p className="my-4">Html</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Node} alt="Node icon"/>
                        <p className="my-4">Node.js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={react} alt="React icon"/>
                        <p className="my-4">React.js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Css} alt="CSS icon"/>
                        <p className="my-4">Css</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND icon"/>
                        <p className="my-4">Tailwind</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JavaScript} alt="JAVASCRIPT icon"/>
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Github} alt="Github icon"/>
                        <p className="my-4">Github</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={react} alt="React icon"/>
                        <p className="my-4">React Native</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={mongo} alt="React icon"/>
                        <p className="my-4">Mongo Database</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={express} alt="React icon"/>
                        <p className="my-4">Express js</p>
                    </div>
                    
                </div>
            </div>
       </div>
    )
};
export default Skills;