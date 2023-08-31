import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';

const Home = () => {

    return (
        <>
            <Banner />
            <div className='my-8 box-border container mx-auto'>

                <Hero />
                <Chef />
                <Contact />
            </div>
        </>
    );
};

export default Home;