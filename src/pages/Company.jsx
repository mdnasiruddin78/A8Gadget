import { FaFacebook } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import bgImg from '../assets/grand-offer-sale-and-discount-banner-template-vector-14299635.jpg'
import { Helmet } from "react-helmet-async";


const Company = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Gadget Heaven / Company</title>
                </Helmet>
            </div>
            <div className="flex items-center justify-around mb-7 mt-10">
                <h2 className="text-5xl font-bold text-green-500">First Come In<br /> Our Shop To Get<br /> This Offer</h2>
                <img className="w-[500px] rounded-xl" src={bgImg} alt="" />
            </div>
            <div className="bg-purple-700 mb-[100px] p-10 rounded-xl">
                <div className="text-center space-y-3">
                    <h1 className="text-5xl font-bold">Contract us</h1>
                    <h2 className="text-2xl text-white">Name: Gadget Heaven Bangladesh</h2>
                    <p className="text-2xl text-white">Email: Gadgetmail@gmail.com</p>
                    <p className="text-2xl text-white">Address: Dhaka Bangladesh</p>
                    <p className="text-2xl text-white">Our Sales: 4000</p>
                </div>
                <br />
                <div className="space-x-3 flex justify-center">
                    <input type="text" placeholder="Type your Email" className="input w-full max-w-xs" />
                    <button className="btn btn-outline">Submit</button>
                </div>
                <br />
                <div className="flex space-x-3 justify-center">
                    <FaFacebook className="text-4xl" />
                    <RiYoutubeLine className="text-4xl" />
                    <FaInstagram className="text-4xl" />
                </div>
            </div>
        </div>
    );
};

export default Company;