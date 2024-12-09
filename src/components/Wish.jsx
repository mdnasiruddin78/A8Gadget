/* eslint-disable react/prop-types */
import { TiDeleteOutline } from "react-icons/ti";


const Wish = ({wish,handleWishlist}) => {
    const {product_id,description,product_title,product_image,price} = wish;
    return (
            <div className="border-2 p-4 flex items-center justify-between mt-4 rounded-xl">
             <div className="flex items-center space-x-4">
                 <div>
                     <img className="w-40 rounded-xl" src={product_image} alt="" />
                 </div>
                 <div className="space-y-3">
                     <h3>{product_title}</h3>
                     <p>{description}</p>
                     <p>price: {price}</p>
                 </div>
             </div>
             <div>
                 <TiDeleteOutline onClick={()=>handleWishlist(product_id)} className="text-4xl text-red-500 cursor-pointer"/>
             </div>
         </div>
    );
};

export default Wish;