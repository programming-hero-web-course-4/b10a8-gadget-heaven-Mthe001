

import React, { useState } from 'react';
import Cards from '../Cards/Cards';  // Make sure the path is correct
import CategoryList from '../Categorylist/CategoryList';  // Make sure the path is correct

function Home() {
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='text-center relative md:top-[150px] top-[150px] lg:top-[100px]'>
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
