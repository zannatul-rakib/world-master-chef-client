import React from 'react';
import heroImage from "../../../assets/hero.jpg";

const Hero = () => {
    return (
        <div className='grid justify-center items-center lg:mx-20'>
            <div className="py-32 my-4">
  <div className="flex flex-col md:flex-row-reverse  md:justify-between md:items-center gap-8">
    <img src={heroImage} className="max-w-sm lg:max-w-xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl lg:text-5xl font-bold">Box Office News!</h1>
      <p className="py-6 max-w-[500px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;