import React from 'react';

const Bannar = () => {
    return (
        <div >
            <marquee hight>
                Smart India Multi Management Institute!    स्मार्ट इंडिया बहुद्देश्यीय प्रबन्धन संस्थान!   Registration number : 085953/2020    Niti Aayog (Govt. Of India ) Unique Id : HR/2020/top-1/30258148</marquee>
<div class="carousel w-full h-[550px]" >
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://simmifoundation.org/home/admin/upload/imga75b483924.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://simmifoundation.org/home/admin/upload/img2973827efc.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://simmifoundation.org/home/admin/upload/img71e24d0f53.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://simmifoundation.org/home/admin/upload/img6e825bdb65.jpeg  " class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bannar;