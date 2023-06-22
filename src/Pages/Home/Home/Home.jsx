import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import Hero from '../Hero/Hero';

const Home = () => {
   
    return (
        <div className='lg:mx-20 my-8'>
            <Banner />
            <Hero />
            <Chef />
        </div>
    );
};

export default Home;