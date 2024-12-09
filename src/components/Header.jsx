import homeImg from '../assets/banner.jpg'


const Header = () => {
    return (
        <div className="mb-[370px] relative">
            <div className="text-center space-y-6 bg-purple-700 rounded-b-2xl pb-40">
                <h2 className="text-4xl font-bold text-white">Upgrade Your Tech Accessorize with<br/> Gadget Heaven Accessories</h2>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br/> the coolest accessories, we have it all!</p>
                <button className="border-2 px-6 py-3 rounded-3xl bg-white text-purple-700 font-bold">Shop Now</button>
            </div>
            <div className='absolute left-[220px] top-[270px] border-2 p-4 rounded-xl'>
                <img className='w-[700px] h-[350px] rounded-xl' src={homeImg} alt="" />
            </div> 
        </div>
    );
};

export default Header;