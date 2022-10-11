import React from 'react';

const Help = () => {
    return (
        <div className='bg-[url("https://simmifoundation.org/home/images/help-bg.png")]'>
           <h1 className='text-4xl py-10 text-center text-white'>How can you help us</h1>
           <div className='grid grid-cols-3 w-11/12 mx-auto py-5 pb-10'>
            <div className='w-72  bg-transparent shadow-xl rounded-lg text-center p-3'>
                <h1 className='text-[#F58634] text-xl py-5 border-b-2 border-white'>Collaborate</h1>
                <p className='text-white pt-4'>Simmi Foundation serves in the collaboration with schools, colleges and other institutions.</p>
                <p className='text-xl my-4 text-right text-white'>Collaborate with us <span>.....</span></p>
            </div>
            <div className='w-72  bg-transparent shadow-xl rounded-lg text-center p-3'>
                <h1 className='text-[#F58634] text-xl py-5 border-b-2 border-white'>Donate Money</h1>
                <p className='text-white pt-4'>Your donation will further our mission of ensuring a happy and healthy life of those in need.</p>
                <p className='text-xl my-4 text-right text-white'>Donate now <span>.....</span></p>
            </div>
            <div className='w-72  bg-transparent shadow-xl rounded-lg text-center p-3'>
                <h1 className='text-[#F58634] text-xl py-5 border-b-2 border-white'>Be a Volunteer</h1>
                <p className='text-white pt-4'>Even the all-powerful Pointing has no control about the blind texts.</p>
                <p className='text-xl my-4 text-right text-white'>Read More<span>.....</span></p>
            </div>
           </div>
        </div>
    );
};

export default Help;