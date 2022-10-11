import React from 'react';

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
                    <p className='text-xl mt-4 text-right'>Read more <span>.....</span></p>
                </div>
                </div>
                <div className='w-60  bg-[#EEEEEE] shadow-xl rounded-lg hover:bg-[#F58634]' >
                <img className='w-60 h-52 rounded-lg' src="https://simmifoundation.org/home/images/objectives/livelihood.jpg" alt="Album"/>
                <div className='text-center m-3 hover:text-black'>
                    <h2 className='text-[#F58634] text-xl hover:text-black'>Education</h2>
                    <p className='text-slate-400 hover:text-black'>We provide free academic education, scholarship, training and other incentives to the children.</p>
                    <p className='text-xl mt-4 text-right'>Read more <span>.....</span></p>
                </div>
                </div>
                <div className='w-60  bg-[#EEEEEE] shadow-xl rounded-lg hover:bg-[#F58634]' >
                <img className='w-60 h-52 rounded-lg' src="https://simmifoundation.org/home/images/objectives/healthcare.jpg" alt="Album"/>
                <div className='text-center m-3 hover:text-black'>
                    <h2 className='text-[#F58634] text-xl hover:text-black'>Education</h2>
                    <p className='text-slate-400 hover:text-black'>We provide free academic education, scholarship, training and other incentives to the children.</p>
                    <p className='text-xl mt-4 text-right'>Read more <span>.....</span></p>
                </div>
                </div>
                <div className='w-60  bg-[#EEEEEE] shadow-xl rounded-lg hover:bg-[#F58634]' >
                <img className='w-60 h-52 rounded-lg' src="https://simmifoundation.org/home/images/objectives/women%20empowerment.jpg" alt="Album"/>
                <div className='text-center m-3 hover:text-black'>
                    <h2 className='text-[#F58634] text-xl hover:text-black'>Education</h2>
                    <p className='text-slate-400 hover:text-black'>We provide free academic education, scholarship, training and other incentives to the children.</p>
                    <p className='text-xl mt-4 text-right'>Read more <span>.....</span></p>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Objectives;