import React from "react";
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import profile from '../../assets/images/profile.jpg';
import 'swiper/css/pagination';
import patientAvatar from "../../assets/images/patient-avatar.png";
import {HiStar} from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
        <Swiper 
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{clickable:true}}
            breakpoints={{
                640:{
                    slidesPerView:1,
                    spaceBetween:0,
                },
                768:{
                    slidesPerView:2,
                    spaceBetween:20,
                },
                1024:{
                    slidesPerView:3,
                    spaceBetween:30,
                },
            }}
        >
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={profile} alt="" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                Vinay Sundar
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        "Very friendly doctor.. Understands the issue very quickly and gives treatment.. I Had been to him for my low back pain. Now after his treatment i am completely fit and fine.. Thank you sir.. Much recommended"
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={profile} alt="" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                Harish376 Kumar
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        "Dr. Dayananda Prabhuswamy is an excellent Physical Rehabilitation consultant who helped me recover from knee pain with great expertise."
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={profile} alt="" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                            Abirami Anand
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        "I am from Chennai Dr. Is very friendly and smart too.while giving treatment his way of handling a patient makes a patient feel free of pain.very professional in his treatment."
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                Muhibur Rahman
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                                <HiStar className="text-yellowColor w-[18px] h-5"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        "I have taken medical services from them. They treat so well and they are provding the best medical services"
                    </p>
                </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
  )
}

export default Testimonial