/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({gadge}) => {
    
    const {product_id,product_image,product_title,price} = gadge;

    return (
        <div className="card bg-base-100 shadow-xl mb-[100px] hover:scale-105">
        <figure className="px-10 pt-10">
            <img
            src={product_image}
            alt=""
            className="rounded-xl" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <p>{price}$</p>
            <div className="card-actions">
            <Link to={`/gadge/${product_id}`}>
                <button className="btn btn-outline btn-primary">View Details</button>
            </Link>
            </div>
        </div>
    </div>
    );
};

export default Card;