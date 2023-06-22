import React from 'react';
import slide1 from '../../../assets/slide/slide1.jpg'
import slide2 from '../../../assets/slide/slide2.jpg'
import slide3 from '../../../assets/slide/slide3.jpg'

const Banner = () => {
    return ( 
        <div className='my-10 lg:mx-20'>
            <div className="carousel w-full h-[500px] rounded-md overflow-hidden">
  <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide1} className="w-full object-cover mix-blend-overlay" />
                    <div className="absolute z-10 top-0 right-0 bottom-0 left-0 m-auto max-w-[500px] text-white h-[200px] text-center">
                    <h3 className='text-3xl mb-5 font-bold '>Hello There</h3>
                        <p className='text-gray-300 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere reprehenderit molestias, iure dolore provident dolor repudiandae totam numquam aut!</p>
                        <button className='btn btn-outline btn-primary text-white hover:text-white'>Check out</button>
                    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 sm:z-20">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full object-cover mix-blend-overlay" />
                    <div className="absolute z-10 top-0 right-0 bottom-0 left-0 m-auto max-w-[500px] text-white h-[200px] text-center">
                    <h3 className='text-3xl mb-5 font-bold '>Hello There</h3>
                        <p className='text-gray-300 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere reprehenderit molestias, iure dolore provident dolor repudiandae totam numquam aut!</p>
                        <button className='btn btn-outline text-white hover:text-white'>Check out</button>
                    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full object-cover mix-blend-overlay" />
                    <div className="absolute z-10 top-0 right-0 bottom-0 left-0 m-auto max-w-[500px] text-white h-[200px] text-center">
                    <h3 className='text-3xl mb-5 font-bold '>Hello There</h3>
                        <p className='text-gray-300 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere reprehenderit molestias, iure dolore provident dolor repudiandae totam numquam aut!</p>
                        <button className='btn btn-outline text-white hover:text-white'>Check out</button>
                    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 sm:-translate-y-2/3">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;