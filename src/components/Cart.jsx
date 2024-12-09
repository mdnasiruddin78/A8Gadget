/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Adjust from "./Adjust";
import modal from '../assets/Group.png'


const Cart = ({gadgets,handleRemove,handleSort}) => {

    const [totalCost, setTotalCost] = useState([])

    useEffect(()=>{
        const total = gadgets.reduce((a,b) => a + b.price,0);
        setTotalCost(total)
    },[gadgets]) 

    return (
       <div className="mb-[100px] mt-5">
        <div className="flex justify-between items-center">
             <div>
                 <h3 className="text-2xl font-bold">Cart</h3>
             </div>
             <div className="space-x-3 flex items-center">
                 <h3 className="text-3xl font-bold">Total cost: {totalCost}$</h3>
                 <button onClick={()=>handleSort()} className="btn btn-outline btn-primary">Short by Price</button>
                 <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Purchase</button>
             </div>
         </div>
         {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <div className="flex justify-center">
                        <img src={modal} alt="" />
                    </div>
                    <div className="text-center space-y-3">
                        <h3 className="font-bold text-3xl">Payment Successfully</h3>
                        <p className="text-gray-500">Thanks for Purchasing</p>
                        <p className="text-gray-500">Total: {totalCost}$</p>
                    </div>
                    <div className="">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn w-full">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
            <div>
                {
                    gadgets.map((gadge,idx) => <Adjust handleRemove={handleRemove} key={idx} gadge={gadge}></Adjust>)
                }
            </div>
       </div>
    );
};

export default Cart;