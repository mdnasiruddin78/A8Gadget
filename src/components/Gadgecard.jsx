import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const Gadgecard = () => {

    const data = useLoaderData()
    
    const {category} = useParams()

    const [gadgets, setGadgets] = useState([])

    useEffect(()=>{
        if(category){
            const filteredByCategory = [...data].filter(
                gadget => gadget.category === category
            )
            setGadgets(filteredByCategory)
        }else{
            setGadgets(data.slice(0,6))
        }
    },[data,category])
    
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                gadgets.map((gadge,idx) => <Card key={idx} gadge={gadge}></Card>)
            }
        </div>
    );
};

export default Gadgecard;