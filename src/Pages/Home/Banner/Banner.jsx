
import slide1 from '../../../assets/slide/slide1.jpg'
import slide2 from '../../../assets/slide/slide2.jpg'
import slide3 from '../../../assets/slide/slide3.jpg'

const Banner = () => {
  return (
    <div className='my-10 mx-2 mt-20'>
      <div className="carousel w-full h-[500px] rounded-md overflow-hidden">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} className="w-full object-cover mix-blend-overlay" />
          <div className="absolute z-10 top-0 right-0 bottom-0 left-0 m-auto max-w-[500px] text-white h-[200px] text-center">
            <h3 className='text-3xl mb-5 font-bold '>Food Recipe</h3>
            <p className='text-gray-300 mb-5'>Your go-to destination for food and travel inspiration. Discover mouthwatering recipes, exciting travel guides, and connect with fellow foodies and travel enthusiasts. Let’s explore the world together, one bite and adventure at a time.</p>
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
            <h3 className='text-3xl mb-5 font-bold' >Best Chefs</h3>
            <p className='text-gray-300 mb-5'>We are provide best chefs. Instagram includes posts on almost every topic. The network is now also a treasure trove of culinary content. Whether you are an amateur chef or a Michelin-starred professional, there are countless insights behind the scenes, delicious recipes and a wealth of exciting tips & tricks on all aspects of the kitchen.</p>
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
            <h3 className='text-3xl mb-5 font-bold '>Best Kitchen</h3>
            <p className='text-gray-300 mb-5'>Enjoy a dash of true Southern hospitality and authentic down-home cooking at the Blue Dixie Kitchen restaurant. Featuring dishes that will make your taste buds dance, our menu is sure to delight. Start off your meal with one of our finger foods, or dive right on into our signature BDK dishes. Here’s to good eatin’!</p>
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