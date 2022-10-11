import React from 'react';
import Bannar from './Bannar';
import Event from './Event';
import Footer from './Footer';
import Help from './Help';
import Info from './Info';
import Objectives from './Objectives';
import Partners from './Partners';

const Home = () => {
    return (
        <div>
            <div class="navbar bg-black text-white ">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a> About</a></li>
      <li><a> Donate</a></li>
      <li><a> Blog</a></li>
      <li><a> Gallery</a></li>
      <li><a> Volunteer</a></li>
      <li><a> Events</a></li>
      <li><a> Careers</a></li>
      <li><a> Contact</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">
        <img className='w-12 mr-4' src="https://simmifoundation.org/home/images/logo.png" alt="" />
    SIMMI FOUNDATION   
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a>Home</a></li>
      <li><a> About</a></li>
      <li><a> Donate</a></li>
      <li><a> Blog</a></li>
      <li><a> Gallery</a></li>
      <li><a> Volunteer</a></li>
      <li><a> Events</a></li>
      <li><a> Careers</a></li>
      <li><a> Contact</a></li>
    </ul>
  </div>
</div>     

<Bannar></Bannar>
<Info></Info>
<Objectives></Objectives>
<Help></Help>
<Event></Event>
<Partners></Partners>
<Footer></Footer>
        </div>
    );
};

export default Home;