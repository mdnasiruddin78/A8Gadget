import toast from "react-hot-toast"

const getAllGadget = () => {
    const all = localStorage.getItem('gadgets')
    
    
    if(all){
        const gadgets = JSON.parse(all)
        return gadgets 
    }else{
        return []
    }
}


const getAllWishlist = () => {
    const all = localStorage.getItem('wishlist')
    
    if(all){
        const wishlist = JSON.parse(all)
        return wishlist 
    }else{
        return []
    }
}


const addGadget = gadget => {
    const gadgets = getAllGadget()
    const isExiest = gadgets.find(item => item.product_id === gadget.product_id)
    if(isExiest) return toast.error('Alrady Exist');
    gadgets.push(gadget)
    localStorage.setItem('gadgets',JSON.stringify(gadgets))
    toast.success('Successfully Added');
}


const addWishlist = wish => {
    const wishlist = getAllWishlist()
    const isExiest = wishlist.find(item => item.product_id === wish.product_id)
    if(isExiest) return toast.error('Alrady Exist');
    wishlist.push(wish)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
    toast.success('Successfully Added');
}

const removeGadget = (product_id) => {
    const gadgets = getAllGadget()
    const remaining = gadgets.filter(gadget => gadget.product_id != product_id)
    localStorage.setItem('gadgets',JSON.stringify(remaining))
    toast.success('Successfully removed');
}

const removeWishlist = (product_id) => {
    const wishlist = getAllWishlist()
    const remaining = wishlist.filter(wish => wish.product_id != product_id)
    localStorage.setItem('wishlist',JSON.stringify(remaining))
    toast.success('Successfully removed');
}


export {addGadget,getAllGadget,addWishlist,getAllWishlist,removeGadget,removeWishlist}