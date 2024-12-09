
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const categories = useLoaderData()
    
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven / Home</title>
            </Helmet>
            <Header></Header>
            <div>
                <h2 className="text-center text-3xl font-bold mb-6">Explore Cutting-Edge Gadgets</h2>
            <div className="flex gap-5">
                <div>
                    <Categories categories={categories}></Categories>
                </div>
                <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default Home;