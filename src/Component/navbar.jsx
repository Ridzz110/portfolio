import React from 'react';

function Navbar() {
  return (
    <>
    <div className='relative top-0 w-full bg-black h-16 flex flex-row justify-between items-center p-4'>
      <h1 className='font-poppins font-bold text-2xl tracking-wide text-purple-300'>RIDZZ</h1>
      <a 
        href="/ResumeUpdated.pdf" 
        download 
        className="bg-purple-300 text-black px-4 py-2 rounded-lg"
      >
        Resume
      </a>
      
    </div>
    {/*<hr className='w-full relative bottom-0'></hr>*/}
    </>
  );
}

export default Navbar;
