import React from 'react';
import heroImage from "../../../assets/hero.jpg";

const Hero = () => {
    return (
      <div className='grid justify-items-center content-center'>
        <div className="py-32 my-4">
          <div className="flex flex-col md:flex-row-reverse  md:justify-between md:items-center gap-8">
            <img src={heroImage} className="max-w-sm lg:max-w-xl rounded-lg shadow-2xl px-3" />
            <div className='px-3'>
              <h1 className="text-3xl lg:text-5xl font-bold">Healthy Food</h1>
              <p className="py-6 max-w-[500px]">Eating a wide variety of nutritious foods, including fruit, vegetables, nuts, seeds, and lean protein can help support your overall health. A vast number of foods are both healthy and tasty. By filling your plate with fruits, vegetables, quality protein sources, and other whole foods, you’ll have meals that are colorful, versatile, and good for you.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;