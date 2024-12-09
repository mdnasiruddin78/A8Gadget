import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addGadget, addWishlist, getAllGadget } from "../utils";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { Helmet } from "react-helmet-async";


const GadgeDetails = () => {

    const data = useLoaderData()
    
    const {product_id} = useParams()
    
    const [gadget, setGadget] = useState({})

    const [isGadget,setIsGadget] = useState(false)

    useEffect(()=>{
        const singleData = data.find(gadget => gadget.product_id === product_id)
        setGadget(singleData)
        const gadgets = getAllGadget()
        const isExiest = gadgets.find(item => item.product_id === singleData.product_id)
        if(isExiest){
            setIsGadget(true)
        }
    },[data,product_id])

    const {
        product_title,
        product_image,
        price,
        description,
        Specification,
        rating
    } = gadget

    const handleGadget = gadget => {
        addGadget(gadget)
        setIsGadget(true)
    }

    const handleWish = gadget => {
        addWishlist(gadget)  
    }

    return (
        <div className="mb-[370px] relative">
            <Helmet>
                <title>Gadget Heaven / GadgeDetails</title>
            </Helmet>
            <div className="bg-purple-700 text-center pt-6 pb-40 rounded-xl">
                <h3 className="text-white text-3xl">Product Details</h3>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br/> the coolest accessories, we have it all!</p>
            </div>
                <div className='absolute left-[160px] top-[110px] border-2 p-4 rounded-xl'>
                <div className='w-[800px] h-[380px] rounded-xl bg-white'>
                      <div className="grid grid-cols-2">
                        <div>
                        <img className="w-[380px] h-[350px] rounded-xl" src={product_image} alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">{product_title}</h3>
                            <p className="font-bold">price: {price}$</p>
                            <p className="bg-green-300 p-2 rounded-2xl w-[100px] text-center border-2 border-green-600">in stock</p>
                            <p className="text-gray-500">{description}</p>
                            <p className="text-black">Specification: {Specification}</p>
                            <div>
                                <p>Rating: {rating}</p>
                                <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button disabled={isGadget} onClick={()=>handleGadget(gadget)} className="btn btn-outline btn-primary">Add to Card <PiShoppingCart className="text-2xl"/></button>
                                <FaRegHeart onClick={()=>handleWish(gadget)} className="text-2xl cursor-pointer"/>
                            </div>
                        </div>
                    </div>  
                </div>
            </div> 
        </div>
    );
};

export default GadgeDetails;