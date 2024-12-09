/* eslint-disable react/prop-types */

import Wish from "./Wish";


const Wishlist = ({Wishlists,handleWishlist}) => {
    return (
        <div className="mb-[100px] mt-5">
            <h3 className="text-2xl font-bold">Wishlist</h3>
            <div>
                {
                    Wishlists.map((wish,idx) => <Wish key={idx} wish={wish} handleWishlist={handleWishlist}></Wish>)
                }
            </div>
        </div>
    );
};

export default Wishlist;