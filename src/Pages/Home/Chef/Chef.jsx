import { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://world-master-chef-server-zrakib-dev.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))

    }, [])

    return (
        <div className='lg:mx-20 mb-10 grid justify-items-center'>
            <h2 className='text-2xl lg:text-3xl font-bold text-center mb-20'>Meet Our Chefs</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef} />)
                }
            </div>
        </div>
    );
};

export default Chef;