import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Charith Shalitha, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Proficient in a range of programming languages, including C#, 
                Java, JavaScript, TypeScript, HTML, and CSS. Experienced in developing
                 applications using various frameworks, such as Node.js, Angular, and Spring 
                 Boot. Skilled in database management with a strong command of SQL. Adept at 
                 utilizing these technical skills to build robust and scalable software solutions. 
                 Continuously staying updated with industry best practices and emerging technologies 
                 to ensure the delivery of high-quality code. Strong problem-solving and analytical 
                abilities, with a keen eye for detail and a passion for creating exceptional user experiences.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;