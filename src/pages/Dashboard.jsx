import { useEffect, useState } from "react";
import { getAllGadget, getAllWishlist, removeGadget, removeWishlist } from "../utils";
import Wishlist from "../components/Wishlist";
import Cart from "../components/Cart";
import { Helmet } from "react-helmet-async";



const Dashboard = () => {

    const [gadgets, setGadgets] = useState([])
    
    const handleSort = () => {
        const sorted = [...gadgets].sort((a,b) => b.price - a.price)
        setGadgets(sorted)
    }

    useEffect(()=>{
        const gadget = getAllGadget()
        setGadgets(gadget)
    },[])

    const [Wishlists, setWishlist] = useState([])

    useEffect(()=>{
        const Wishlist = getAllWishlist()
        setWishlist(Wishlist)
    },[])

    const [showCart, setShowCart] = useState(true)

    const handleDashboard = status => {
        if(status === 'cart'){
            setShowCart(true)
        }else{
            setShowCart(false)
        }
    }

    const handleRemove = product_id => {
        removeGadget(product_id)
        const gadget = getAllGadget()
        setGadgets(gadget)
    }

    const handleWishlist = product_id => {
        removeWishlist(product_id)
        const Wishlist = getAllWishlist()
        setWishlist(Wishlist)
    }

    return (
        <div>
            <Helmet>
                <title>Gadget Heaven / Dashboard</title>
            </Helmet>
            <div className="bg-purple-700 text-center rounded-xl space-y-5 p-10">
                <h3 className="text-3xl text-white">Dashboard</h3>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br/> the coolest accessories, we have it all!</p>
                <div className="space-x-5">
                    <button onClick={()=>handleDashboard('cart')} className="btn">Cart</button>
                    <button  onClick={()=>handleDashboard('wish')} className="btn">Wishlist</button>
                </div>
            </div>
            {
              showCart?<Cart gadgets={gadgets} handleRemove={handleRemove} handleSort={handleSort}></Cart>:<Wishlist Wishlists={Wishlists} handleWishlist={handleWishlist}></Wishlist>
            }
        </div>
    );
};

export default Dashboard;