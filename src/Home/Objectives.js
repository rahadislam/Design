import React from 'react';

import { AiOutlineArrowRight} from 'react-icons/ai';

const Objectives = () => {
    return (
        <div>
            <h1 className='text-4xl my-5 text-center'>Objectives</h1>
            <div className='grid grid-cols-4 w-11/12 mx-auto my-5 mb-10'>
                <div className='w-60  bg-[#EEEEEE] shadow-xl rounded-lg hover:bg-[#F58634]' >
                <img className='w-60 h-52 rounded-lg' src="https://simmifoundation.org/home/images/objectives/education.jpg" alt="Album"/>
                <div className='text-center m-3 hover:text-black'>
                    <h2 className='text-[#F58634] text-xl hover:text-black'>Education</h2>
                    <p className='text-slate-400 hover:text-black'>We provide free academic education, scholarship, training and other incentives to the children.</p>
                    <p className='text-xl mt-4 text-left text-[#F58634] flex items-center gap-2 px-3'>Read more <span><AiOutlineArrowRight className='text-[#F58634]'></AiOutlineArrowRight></span></p>
                </div>
                </div>
                <div className='w-60  bg-[#EEEEEE] shadow-xl rounded-lg hover:bg-[#F58634]' >
                <img className='w-60 h-52 rounded-lg' src="https://simmifoundation.org/home/images/objectives/livelihood.jpg" alt="Album"/>
                <div className='text-center m-3 hover:text-black'>
                    <h2 className='text-[#F58634] text-xl hover:text-black'>Livelihood</h2>
                    <p className='text-slate-400 hover:text-black'>We implement various schemes to provide livelihood and uplift the poor in society.</p>
                    <p className='text-xl mt-4 text-left text-[#F58634] flex items-center gap-2 px-3'>Read more <span><AiOutlineArrowRight className='text-[#F58634]'></AiOutlineArrowRight></span></p>
                </div>
                </div>
                <div className='w-60  bg-[#EEEEEE] shadow-xl rounded-lg hover:bg-[#F58634]' >
                <img className='w-60 h-52 rounded-lg' src="https://simmifoundation.org/home/images/objectives/healthcare.jpg" alt="Album"/>
                <div className='text-center m-3 hover:text-black'>
                    <h2 className='text-[#F58634] text-xl hover:text-black'>Healthcare</h2>
                    <p className='text-slate-400 hover:text-black'>We are increasing awareness on Sanitization and providing people with access to better nutrition, clean water and toilets</p>
                    <p className='text-xl mt-4 text-left text-[#F58634] flex items-center gap-2 px-3'>Read more <span><AiOutlineArrowRight className='text-[#F58634]'></AiOutlineArrowRight></span></p>
                </div>
                </div>
                <div className='w-60  bg-[#EEEEEE] shadow-xl rounded-lg hover:bg-[#F58634]' >
                <img className='w-60 h-52 rounded-lg' src="https://simmifoundation.org/home/images/objectives/women%20empowerment.jpg" alt="Album"/>
                <div className='text-center m-3 hover:text-black'>
                    <h2 className='text-[#F58634] text-xl hover:text-black'>Women and Youth Empowerment</h2>
                    <p className='text-slate-400 hover:text-black'>We focus on providing equal opportunities for women in the work field..</p>
                    <p className='text-xl mt-4 text-left text-[#F58634] flex items-center gap-2 px-3'>Read more <span><AiOutlineArrowRight className='text-[#F58634]'></AiOutlineArrowRight></span></p>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Objectives;