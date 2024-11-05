import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
    const productData = [

        {
            "id": 1,
            "title": "Wireless Noise-Canceling Headphones",
            "category": "Electronics",
        },
        {
            "id": 2,
            "title": "4K Ultra HD Streaming Device",
            "category": "Electronics",
        },
        {
            "id": 3,
            "title": "Smart Home Speaker",
            "category": "Electronics",
        },
        {
            "id": 4,
            "title": "Portable Bluetooth Speaker",
            "category": "Electronics",
        },
        {
            "id": 5,
            "title": "Smartphone Stand with Wireless Charger",
            "category": "Electronics",
        },
        {
            "id": 6,
            "title": "Fitness Tracker",
            "category": "Electronics",
        },

        {
            "id": 7,
            "title": "Wooden Coffee Table",
            "category": "Furniture",
        },
        {
            "id": 8,
            "title": "Ergonomic Office Chair",
            "category": "Furniture",
        },
        {
            "id": 9,
            "title": "Bookshelf",
            "category": "Furniture",
        },
        {
            "id": 10,
            "title": "Dining Table",
            "category": "Furniture",
        },

        {
            "id": 11,
            "title": "Portable Camping Stove",
            "category": "Outdoor",
        },
        {
            "id": 12,
            "title": "Camping Tent",
            "category": "Outdoor",
        },
        {
            "id": 13,
            "title": "Hiking Backpack",
            "category": "Outdoor",
        },
        {
            "id": 14,
            "title": "Outdoor Sleeping Bag",
            "category": "Outdoor",
        },

        {
            "id": 15,
            "title": "Men's Jacket",
            "category": "Clothing",
        },
        {
            "id": 16,
            "title": "Women's Dress",
            "category": "Clothing",
        },
        {
            "id": 17,
            "title": "Kids' T-Shirt",
            "category": "Clothing",
        },
        {
            "id": 18,
            "title": "Unisex Sneakers",
            "category": "Clothing",
        },

        {
            "id": 19,
            "title": "Building Blocks Set",
            "category": "Toys",
        },
        {
            "id": 20,
            "title": "Remote Control Car",
            "category": "Toys",
        },
        {
            "id": 21,
            "title": "Puzzle Game",
            "category": "Toys",
        },
        {
            "id": 22,
            "title": "Stuffed Animal",
            "category": "Toys",
        },

        {
            "id": 23,
            "title": "Yoga Mat",
            "category": "Sports Equipment",
        },
        {
            "id": 24,
            "title": "Tennis Racket",
            "category": "Sports Equipment",
        },
        {
            "id": 25,
            "title": "Bicycle",
            "category": "Sports Equipment",
        },
    ];


    const categoryCounts = productData.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
    }, {});


    const categories = Object.keys(categoryCounts);
    const quantities = Object.values(categoryCounts);


    const categoriesData = {
        labels: categories,
        datasets: [
            {
                label: 'Number of Products',
                data: quantities,
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                borderColor: '#fff',
                borderWidth: 1,
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Product Category Wise Quantity',
            },
        },
    };

    return (
        <div>
            <div className="p-5">
                <h1 className="text-3xl font-bold text-center mb-4 text-blue-300 ">Stats Of Products</h1>
                <p className='text-center w-[60%] mx-auto text-gray-400'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="max-w-4xl mx-auto">
                    <Bar data={categoriesData} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Statistics;
