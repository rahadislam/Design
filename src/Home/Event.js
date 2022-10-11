import React from 'react';
 import { ImLocation2 } from 'react-icons/im';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaCalendarAlt} from 'react-icons/fa';
import { AiOutlineArrowRight} from 'react-icons/ai';

const Event = () => {
    return (
        <div className='bg-[#212529]'>
            <h2 className='text-4xl text-center text-[#F58634] py-5 pb-10'>Current and Upcoming events</h2>
            <div className='grid grid-cols-2 w-8/12 mx-auto py-5 pb-10'>
                <div className='w-80 bg-white pb-10'>
                    <img className='w-80' src="https://simmifoundation.org/admin/images/events/bg_3.jpg" alt="" />
                    <h2 className='text-2xl text-[#F58634] py-5 pl-4'>Marathon Event</h2>
                    <p className='flex items-center gap-2 px-3'><span><ImLocation2 className='text-[#F58634]'></ImLocation2></span> Dhile</p>
                    <div className='flex items-center gap-3'>
                        <p className='flex items-center gap-2 px-3'><span><AiFillClockCircle className='text-[#F58634]'></AiFillClockCircle></span> 22:25:00 - 23:25:00</p>
                        <p className='flex items-center gap-2 px-3'><span><FaCalendarAlt className=' text-[#F58634]'></FaCalendarAlt></span> 2020-07-09</p>
                    </div>
                    <p className='px-3'>Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee</p>
                    <p className='text-xl mt-4 text-left text-[#F58634] flex items-center gap-2 px-3'>Read more <span><AiOutlineArrowRight className='text-[#F58634]'></AiOutlineArrowRight></span></p>
                </div>
                <div className='w-80 bg-white pb-10'>
                    <img className='w-80' src="https://simmifoundation.org/admin/images/events/WhatsApp%20Image%202022-01-16%20at%202.55.59%20PM.jpeg" alt="" />
                    <h2 className='text-2xl text-[#F58634] py-5 pl-4'>event-til</h2>
                    <p className='flex items-center gap-2 px-3'><span><ImLocation2 className='text-[#F58634]'></ImLocation2></span> Dhile</p>
                    <div className='flex items-center gap-3'>
                        <p className='flex items-center gap-2 px-3'><span><AiFillClockCircle className='text-[#F58634]'></AiFillClockCircle></span> 22:25:00 - 23:25:00</p>
                        <p className='flex items-center gap-2 px-3'><span><FaCalendarAlt className=' text-[#F58634]'></FaCalendarAlt></span> 2020-07-09</p>
                    </div>
                    <p className='px-3'>Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee</p>
                    <p className='text-xl mt-4 text-left text-[#F58634] flex items-center gap-2 px-3'>Read more <span><AiOutlineArrowRight className='text-[#F58634]'></AiOutlineArrowRight></span></p>
                </div>
            </div>
        </div>
    );
};

export default Event;