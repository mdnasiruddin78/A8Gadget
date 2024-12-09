

const Footer = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
                <footer className="flex justify-around text-neutral-content p-10">
                <nav>
                    <h6 className="font-bold text-black"></h6>
                    <br/>
                    <a className="link link-hover text-gray-500">Product Support</a>
                    <br/>
                    <a className="link link-hover text-gray-500">Order Tracking</a>
                    <br/>
                    <a className="link link-hover text-gray-500">Shipping & Delivery</a>
                    <br/>
                    <a className="link link-hover text-gray-500">Returns</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-black">Company</h6>
                    <br/>
                    <a className="link link-hover text-gray-500">About us</a>
                    <br/>
                    <a className="link link-hover text-gray-500">Contact</a>
                    <br/>
                    <a className="link link-hover text-gray-500">Jobs</a>
                    <br/>
                    <a className="link link-hover text-gray-500">Press kit</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-black">Legal</h6>
                    <br/>
                    <a className="link link-hover text-gray-500">Terms of use</a>
                    <br/>
                    <a className="link link-hover text-gray-500">Privacy policy</a>
                    <br/>
                    <a className="link link-hover text-gray-500">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;