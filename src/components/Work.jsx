import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full h-max  text-gray-300 bg-[#0a192f] p-4' >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
          Projects
          </p>
          <p className='py-6'>Check out some of my recent Projects</p>
        </div>

{/* container for projects */}
<div className=" sm:grid-cols-2  gap-4">
          
          {/* Gird Item */}
          {project.map((item, index) => (
  <div
    key={index}
  >
    {/* Hover effect for images */}
    <div >
    <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400 font-bold ">
        {item.name}
      </p>
      <span className="mb-3 text-gray-500 dark:text-gray-400 ">
        {item.desc}
      </span>
      <div className="pt-4 pb-8 text-center items-center  w-auto ">
        {/* eslint-disable-next-line */}
        <a  href={item.github} target="_blank">
          <button
           class=" text-white group border-2 px-2 py-1 my-1 flex items-center hover:bg-pink-600 hover:border-white600"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={item.live} target="_blank">
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;