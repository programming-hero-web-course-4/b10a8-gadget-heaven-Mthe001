import React from 'react';

export default function CategoryList({ onSelectCategory, selectedCategory }) {
    const categories = [
        "All Products",
        "Electronics",
        "Furniture",
        "Outdoor",
        "Clothing",
        "Toys",
        "Sports Equipment",
        "Books",
        "Beauty Products",
        "Recipe"

    ];

    return (
        <div className='bg-gray-200 rounded-lg relative top-[50px] w-8/12 mx-auto'>
            <nav className="flex flex-col gap-2 w-full max-w-xs p-4">
                <h2 className='text-gray-600 font-bold py-1 px-1'>Category</h2>
                {categories.map((item) => (
                    <button
                        key={item}
                        className={`btn btn-ghost w-full justify-start ${selectedCategory === item ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'} hover:bg-gray-200`}
                        onClick={() => onSelectCategory(item)}
                    >
                        {item}
                    </button>
                ))}
            </nav>
        </div>
    );
}
