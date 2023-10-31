import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import icon02 from '../assets/images/icon02.png';
import videoIcon from '../assets/images/video-icon.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png';
import {Link} from 'react-router-dom';
import faqImg from '../assets/images/faq-img.png';
import {BsArrowRight, } from 'react-icons/bs';
import About from '../components/About/About';
import ServicesList from '../components/Services/ServicesList';
import DoctorsList from '../components/Doctors/DoctorsList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
  return (<>
  
  
  {/*================ hero section ===================== */}


  <section className='hero__section pt-[60px] 2xl:h-[800px]'>
    <div className='container'>
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
        {/*========== hero content======= */}
        <div>
          <div className='lg:w-[570px]'>
            <h1 className='text-[20px] leading-[40px] font-popins text-headingColor font-[800] md:text-[36px]
            md:leading-[60px]'>
              "Our bodily movements act as a preventive & curative medicine.
So let's move to keep us moving"
              </h1>
              <p className='text__para'>Physical Rehabilitation , Physiotherapy, Spain Rehablilitation and Sports medicine Rehabilitation</p>

              <button className='btn h-[50px] text-sm'>Request an Appointment</button>
          </div>
          {/*========= hero counter ======= */}
          <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>10+</h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Years of Experience</p>
            </div>


            {/* <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
              <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Clinic Location</p>
            </div> */}

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
              <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>Patient Satisfaction</p>
            </div>
          </div>
          
        </div>

        {/*====== hero content ======= */}
        <div className='flex gap-[30px] justify-end'>
            <div>
              <img className='w-full' style={{height:"auto"}} src={heroImg01} alt="" />
            </div>
            {/* <div className='mt-[30px]'>
              <img src={heroImg02} alt="" className='w-full mb-[30px]'/>
              <img src={heroImg03} alt=""  className='w-full '/>
            </div> */}
          </div>
      </div>
    </div>
  </section>
  
    {/**======== hero section end ======= */}

    <section>
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Providing the best medical services
          </h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health sytem offers unmatched, expert health care.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        <div className="py-[30px] px-5 border-[2px]" >
          <div className='flex items-center justify-center'>
            <img src={icon01} alt="" />
          </div>

          <div className="mt-[30px] ">
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
              Find Doctor 
            </h2>
            <p className="text-[16px] leading-7 text-textColor fotn-[400] mt-4 text-center">
            Welcome to PhysioReach_Bhaarath, your ultimate destination for finding the best medical professionals (Physiotherapy) in your area. 
            </p>
            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
              flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                 <BsArrowRight className='group-hover:text-white w-6 h-5'/> 
            </Link>
          </div>
        </div>


        <div className="py-[30px] px-5 border-[2px]">
          <div className='flex items-center justify-center'>
            <img src={icon02} alt="" />
          </div>

          <div className="mt-[30px]">
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
              Find Location 
            </h2>
            <p className="text-[16px] leading-7 text-textColor fotn-[400] mt-4 text-center">
            Welcome to PhysioReach_Bhaarath your go-to platform for locations where you're searching for door-step Physiotherapy and Rehabilitation Services
            </p>
            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
              flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                 <BsArrowRight className='group-hover:text-white w-6 h-5'/> 
            </Link>
          </div>
        </div>


        <div className="py-[30px] px-5 border-[2px]">
          <div className='flex items-center justify-center'>
            <img src={icon03} alt="" />
          </div>

          <div className="mt-[30px]">
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
              Book Appointment 
            </h2>
            <p className="text-[16px] leading-7 text-textColor fotn-[400] mt-4 text-center">
            PhysioReach_Bhaarath solution for hassle-free appointment booking.
            </p>
            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
              flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                 <BsArrowRight className='group-hover:text-white w-6 h-5'/> 
            </Link>
          </div>
        </div>
      </div>  

      </div>
    </section>

    {/**========== about section ============ */}
        <About/>
    {/**========== about section Ends ============ */}


    {/**============ services section ============ */}
    <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our Medical Services</h2>
          <p className="text__para text-center">
          Your Health, Our Priority: Comprehensive Care for a Better Tomorrow
          </p>
        </div>
        <ServicesList/>
      </div>
    </section>
    {/**============ services section end ============ */}

    {/**========== feature section ========= */}
    <section>
    <div className="container">
      <div className='flex items-center justify-between flex-col lg:flex-row'>
        {/*========== feature content ====== */}
        <div className="xl:w-[670px]">
          <h2 className='heading'>
            Get Door-step Treatment <br /> anytime.
          </h2>
          <ul className='pl-4'>
            <li className="text__para">
              1.Schedule the Appointment directly.
            </li>
            <li className="text__para">
              2.Search for your physiotherapy, Rehabilitation expert, clinical psychologist and Nuturion helath expert.
            </li>
            <li className="text__para">
              3. view our Experts who are accepting new patients, use the online scheduling tool to select an appointment time.
            </li>
          </ul>
          {/* <Link to="/"><button className='btn'>Learn more</button></Link> */}
        </div>

      {/**========= feature img =================*/}
      <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
        <img src={featureImg} className='w-3/4'/>
        <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px]">
          {/* <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px] lg:gap-3">
              <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                Tue,24
              </p>
              <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                10:00AM
              </p>
            </div>
            <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
            bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
              <img src={videoIcon} alt="" />
            </span>
          </div> */}

          <div className='w-[95px] lg-w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor
          font-[500] mt-2 lg:mt-4 rounded-full'>
            Consultation
          </div>

          <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
            <img src={avatarIcon} alt="" />
            <h4 className='text-[10px] leading-3 lg:text-[12px] lg:leading-[20px] font-[700] text-headingColor'>Dr.Dayanand PrabhuSwamy</h4>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
    {/**========== feature section end ========== */}

    {/*============= our great doctors ============= */}
    {/* <section>
      <div className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our Great Doctors</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health sytem offers unmatched, expert health care.
          </p>
        </div>
        <DoctorsList/>
      </div>
    </section> */}
    {/*============= our great doctors ============= */}


    {/*================= faq section ============= */}

    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block">
            <img src={heroImg01} alt="" />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='heading'>Most questions by our beloved patients</h2>
            <FaqList/>
          </div>
        </div>
      </div>
    </section>
    {/*================= faq section End ============= */}


    {/*================= testimonial ================= */}
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">what our patient say</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health System offers unmatched,expert health care.
          </p>
        </div>

        <Testimonial/>
      </div>
    </section>
    {/*================= testimonial end ================= */}

  </>
  )
}

export default Home