import React,{useEffect} from 'react';
import DoctorCard from './../../components/Doctors/DoctorsCard';
import {doctors} from './../../assets/data/doctors';

const AreaDoc = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <section>
      <div className="container">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {doctors.map((doctor, index)=>(
            <DoctorCard key={index} doctor={doctor}/>
        ))}
    </div>
      </div>
    </section>
  )
}

export default AreaDoc