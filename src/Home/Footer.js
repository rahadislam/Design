import React from 'react';

import { ImLocation2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';   
import { GoMail } from 'react-icons/go';   

const Footer = () => {
    return (
        <div className='bg-[#252525]'>
           <footer class="footer p-10 text-neutral-content bg-[#252525]">
  <div className='w-60'>
    <span class="footer-title">ABOUT US</span> 
    We envisions to develop a society based on legitimate rights, equity, justice, honesty, social sensitivity and a culture of service in which all are self-reliant.
  </div> 
  <div>
    <span class="footer-title">INITIATIVES</span> 
    <a class="link link-hover">Kalaakaar Manch</a>
    <a class="link link-hover">Sambhav Madad</a>
    <a class="link link-hover">Volunteer</a>
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <a class="link link-hover">Sambhav Madad</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </div>
  <div>
    <span class="footer-title">HAVE QUESTIONS?</span> 
    <a class="link link-hover flex items-center gap-2"><ImLocation2 className='text-[#fefefe]'></ImLocation2>	479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana - 122503, India
</a>
    <a class="link link-hover flex items-center gap-2"> <BsFillTelephoneFill className='text-[#fefefe]'></BsFillTelephoneFill> (+91) 70152 - 95025
</a>
    <a class="link link-hover flex items-center gap-2"><GoMail></GoMail> support@simmifoundation.org</a>
  </div>
</footer> 

<div>
  <div className='flex items-center justify-center'>
  <img className='w-12 mr-4' src="https://simmifoundation.org/home/images/logo.png" alt="" />
  <img className='w-12 mr-4' src="https://simmifoundation.org/home/images/NITI-Aayog-logo.png" alt="" />
  

  </div> 
  <div className='flex items-center justify-center py-5'>
    <div className='text-stone-300'>
        <span>Our Registration number : 085953/2020
</span> 
<br />
<span>Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148
</span>
<br />              
<br />
<span>Copyright ©2022 All rights reserved | rahad islam </span>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Footer;