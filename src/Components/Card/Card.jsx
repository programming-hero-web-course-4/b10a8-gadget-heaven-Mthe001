
// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { id, title, image, price } = product;

    return (
        <div className="card w-[80%] mx-auto bg-base-100 shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <figure>
                <img src={image} alt={title} className="w-full h-48 rounded-xl object-cover p-5" />
            </figure>

            {/* Card Content */}
            <div className="card-body text-start p-4 space-y-3">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-lg text-gray-500">Price: ${price}</p>


                {/* Action Button */}
                <div className="card-actions">
                    <Link to={`/products/${id}`}>
                        <button className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;

