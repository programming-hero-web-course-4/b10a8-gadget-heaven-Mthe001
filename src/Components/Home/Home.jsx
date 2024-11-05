
import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import CategoryList from '../Categorylist/CategoryList';
import Banner from '../Banner/Banner';

function Home() {

    document.title = "Gadget Heaven";

    const [selectedCategory, setSelectedCategory] = useState("All Products");
    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='text-center relative md:top-[150px] top-[150px] lg:top-[10px]'>
            <Banner></Banner>
            <h1 className='font-bold md:text-4xl text-2xl lg:text-4xl'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex justify-center md:flex-row lg:flex-row gap-6 lg:gap-0 md:gap-0 flex-col'>
                <div className='md:w-3/12 w-full lg:w-3/12'>
                    <CategoryList
                        onSelectCategory={handleSelectCategory}
                        selectedCategory={selectedCategory}
                    />
                </div>
                <Cards category={selectedCategory} />
            </div>

        </div>

    );
}

export default Home;
