// // ProductDetail.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetail = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         fetch('/product.json')
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 const foundProduct = data.find(item => item.id === parseInt(id));
//                 console.log(foundProduct);
//                 setProduct(foundProduct);
//             })
//             .catch(err => console.error('Error fetching product details:', err));
//     }, [id]);

//     if (!product) return <div>Loading...</div>;

//     return (
//         <div className="max-w-4xl mx-auto p-5">
//             <h1 className="text-3xl font-bold">{product.title}</h1>
//             <img src={product.image} alt={product.title} className="w-full h-64 object-cover my-4" />
//             <p className="text-lg">Price: ${product.price}</p>
//             <p className="mt-2">{product.description}</p>
//             <h3 className="font-semibold mt-4">Specifications:</h3>
//             <ul className="list-disc ml-5 mt-2">
//                 {product.Specification.map((spec, index) => (
//                     <li key={index}>{spec}</li>
//                 ))}
//             </ul>
//             <div className="mt-4">
//                 <button className="btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Add to Cart</button>
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;


// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai'; // Import heart icon

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
        <div className="max-w-4xl mx-auto p-5">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover my-4" />
            <p className="text-lg">Price: ${product.price}</p>
            <p className="mt-2">{product.description}</p>
            <h3 className="font-semibold mt-4">Specifications:</h3>
            <ul className="list-disc ml-5 mt-2">
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
    );
};

export default ProductDetail;
