import React from 'react';
import { Link } from 'react-router-dom';
import AreaDoc from './AreaDoc';

const Area = () => {
  return (
        <div className="container ">
          <div className="lg:w-[470px] mx-auto">
            <h2 className='heading text-center'>Places in Bengaluru</h2>
            <p className='text__para text-center'>
              Bengaluru near by places
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 border-[2px]">
            <Link to='/AreaDoc' >
              <div className='flex items-center justify-center'>
                <div className="bgImage1 text-[22px] md:text-[42px]  py-1 my-1 w-[300px] md:w-[700px] md:h-[400px] h-[200px]  border-[2px] hover:scale-105 transition-all duration-500  cursor-pointer shadow-2xl" >
                  <h3 className='text-white text-center' >Kengeri </h3>
                </div>
              </div>
              </Link>
            </div>


            <div className="py-[30px] px-5 border-[2px]">
            <Link to='/AreaDoc' >
              <div className='flex items-center justify-center'>
                <div className="bgImage text-[22px] md:text-[42px]  py-1 my-1 w-[300px] md:w-[700px] md:h-[400px] h-[200px] hover:scale-105 transition-all duration-500  cursor-pointer shadow-2xl" >
                  <h3 className='text-white text-center' >Rajarajeshwari Nagar </h3>
                </div>
              </div>
              </Link>
            </div>


            <div className="py-[30px] px-5 border-[2px]">
            <Link to='/AreaDoc' >
              <div className='flex items-center justify-center'>
                <div className="bgImage2 text-[22px] md:text-[42px]  py-1 my-1 w-[300px] md:w-[700px] md:h-[400px] h-[200px] border-[2px] hover:scale-105 transition-all duration-500  cursor-pointer shadow-2xl" >
                  <h3 className='text-white text-center' >Sundakatte </h3>
                </div>
              </div>
              </Link>
            </div>


            <div className="py-[30px] px-5 border-[2px]">
            <Link to='/AreaDoc' >
              <div className='flex items-center justify-center'>
                <div className="bgImage3 text-[22px] md:text-[42px]  py-1 my-1 w-[300px] md:w-[700px] md:h-[400px] h-[200px] border-[2px] hover:scale-105 transition-all duration-500  cursor-pointer shadow-2xl" >
                  <h3 className='text-white text-center' >Vijayanagar </h3>
                </div>
              </div>
              </Link>
            </div>

            
            <div className="py-[30px] px-5 border-[2px]">
            <Link to='/AreaDoc' >
              <div className='flex items-center justify-center'>
                <div className="bgImage4 text-[22px] md:text-[42px] py-1 my-1 w-[300px] md:w-[700px] md:h-[400px] h-[200px] border-[2px] hover:scale-105 transition-all duration-500  cursor-pointer shadow-2xl" >
                  <h3 className='text-white text-center' >Bidadi </h3>
                </div>
              </div>
              </Link>
            </div>


            
          </div>
        </div>


 

    
  )
}

export default Area