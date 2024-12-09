/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const Categories = ({categories}) => {
    
    return (
        <div>
            <div className="bg-gray-300 p-7 rounded-3xl flex flex-col space-y-4">
                    {categories.map(category => (
                <NavLink
                key={category.category}
                to={`/category/${category.category}`}
                
                className={({ isActive }) =>
                    `${isActive ? 'bg-white p-3 rounded-3xl' : ''}`
                }
                >
                {category.category}
                </NavLink>
                    ))}
            </div>
        </div>
    );
};

export default Categories;