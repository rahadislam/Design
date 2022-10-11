import React from 'react';

const Info = () => {
    return (
        <div class="flex bg-[#212529]">
 
  <div class="card-body text-center w-1/2 text-white">
    <h2 class="text-center text-4xl mb-5 font-medium">Welcome to <span className='text-[#F58634]'>SIMMI</span></h2>
    <p className='w-72 mx-auto text-xl'>Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.</p>
   
  </div>
  <figure><img height={450} width={350} src="https://simmifoundation.org/home/images/home/map-dark.png" alt="Album"/></figure>
</div>
    );
};

export default Info;