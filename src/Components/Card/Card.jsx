// import React from 'react';

// const Card = ({ card }) => {
//     const { title, image, price } = card;

//     return (
//         <div className="card max-w-sm bg-base-100 shadow-lg rounded-lg overflow-hidden">
//             {/* Image Section */}
//             <figure>
//                 <img src={image} alt={title} className="w-full h-48 object-cover p-4" />
//             </figure>

//             {/* Card Content */}
//             <div className="card-body p-4 space-y-3">
//                 <h2 className="text-xl font-semibold">{title}</h2>
//                 <p className="text-lg text-gray-500">Price: ${price}</p>

//                 {/* Action Button */}
//                 <div className="card-actions">
//                     <button className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700">
//                         View Details
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;

// import React, { useState } from 'react';

// const Card = ({ card }) => {
//     const { title, image, price, description, Specification, availability, rating } = card;
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleModal = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="card max-w-sm bg-base-100 shadow-lg rounded-lg overflow-hidden">
//             {/* Image Section */}
//             <figure>
//                 <img src={image} alt={title} className="w-full h-48 object-cover p-4" />
//             </figure>

//             {/* Card Content */}
//             <div className="card-body p-4 space-y-3">
//                 <h2 className="text-xl font-semibold">{title}</h2>
//                 <p className="text-lg text-gray-500">Price: ${price}</p>
//                 <div className="card-actions">
//                     <button onClick={toggleModal} className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700">
//                         View Details
//                     </button>
//                 </div>
//             </div>

//             {/* Modal */}
//             {isOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50">
//                     <div className="modal bg-white rounded-lg shadow-lg p-4">
//                         <h3 className="text-2xl font-semibold">{title}</h3>
//                         <img src={image} alt={title} className="w-full h-48 object-cover my-4" />
//                         <p>{description}</p>
//                         <p className="font-bold">Price: ${price}</p>
//                         <p>Availability: {availability ? "In Stock" : "Out of Stock"}</p>
//                         <h4 className="font-semibold mt-4">Specifications:</h4>
//                         <ul className="list-disc ml-4">
//                             {Specification.map((spec, index) => (
//                                 <li key={index}>{spec}</li>
//                             ))}
//                         </ul>
//                         <p className="mt-2">Rating: {rating} ⭐</p>
//                         <button onClick={toggleModal} className="btn mt-4 bg-red-500 hover:bg-red-600 text-white">
//                             Close
//                         </button>
//                     </div>
//                     <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Card;


// // Card.js
// import React from 'react';

// const Card = ({ product }) => {
//     const { title, image, price } = product;

//     return (
//         <div className="card max-w-sm bg-base-100 shadow-lg rounded-lg overflow-hidden">
//             {/* Image Section */}
//             <figure>
//                 <img src={image} alt={title} className="w-full h-48 object-cover p-4" />
//             </figure>

//             {/* Card Content */}
//             <div className="card-body p-4 space-y-3">
//                 <h2 className="text-xl font-semibold">{title}</h2>
//                 <p className="text-lg text-gray-500">Price: ${price}</p>
//                 <p className="text-gray-600">{product.description}</p>

//                 {/* Action Button */}
//                 <div className="card-actions">
//                     <button className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700">
//                         View Details
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;

// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { id, title, image, price } = product;

    return (
        <div className="card max-w-sm bg-base-100 shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <figure>
                <img src={image} alt={title} className="w-full h-48 object-cover p-4" />
            </figure>

            {/* Card Content */}
            <div className="card-body p-4 space-y-3">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-lg text-gray-500">Price: ${price}</p>
                <p className="text-gray-600">{product.description}</p>

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

