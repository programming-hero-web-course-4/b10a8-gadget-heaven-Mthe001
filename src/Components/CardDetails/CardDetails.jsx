
// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai'; // Import heart icon
import { GrLogin } from 'react-icons/gr';
import { IoCartOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/product.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                const foundProduct = data.find(item => item.id === parseInt(id));
                setProduct(foundProduct);
            })
            .catch(err => console.error('Error fetching product details:', err));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (

        <div>

            <div>
                <nav className='flex  items-center w-8/12  mt-5  text-black font-semibold px-4 justify-between   mx-auto'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <h3 className='text-gray-700 font-semibold px-2 py-3'>Menu</h3>

                                <li>
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/statistics">Statistics</NavLink>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                    <NavLink className="text-xl" to="/login"><GrLogin /></NavLink>

                                </li>

                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Gadget</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu gap-4 menu-horizontal px-4 ">
                            <NavLink to="/">Home</NavLink>

                            <NavLink to="/statistics">Statistics</NavLink>

                            <NavLink to="/dashboard">Dashboard</NavLink>
                            <NavLink className="text-xl" to="/login"><GrLogin /></NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end flex justify-end mr-2 ">
                        <button className="btn btn-ghost text-xl"><IoCartOutline /></button>
                        <button className='btn btn-ghost text-xl'><CiHeart /></button>
                    </div>

                </nav>

            </div>

            <div className='w-[80%] mx-auto bg-purple-600 rounded-xl h-[300px] md:h-[350px] lg:h-[450px]'>



            </div>




            <div className="md:max-w-2xl lg:max-w-4xl max-w-96  relative -top-[60px] mx-auto px-4 md:px-8 py-5 rounded-xl bg-gray-100 flex flex-col md:flex-row">

                <div className="flex-shrink-0 md:w-1/2 mb-5 md:mb-0">
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>

                <div className="md:w-1/2 md:pl-5">
                    <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
                    <p className="text-lg mt-2">Price: ${product.price}</p>
                    <p className="mt-2 text-gray-700">{product.description}</p>
                    <h3 className="font-semibold mt-4">Specifications:</h3>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                        {product.Specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                    <div className="mt-4 flex items-center space-x-4">
                        <button className="btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                            Add to Cart
                        </button>
                        <button className="btn bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center">
                            <AiFillHeart className="mr-2" />
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>




        </div>

    );
};

export default ProductDetail;
