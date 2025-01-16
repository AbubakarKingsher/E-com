import React, { useContext } from "react";
import { ContextApi } from "../utils/Context";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Navigation() {
    const [productData, setProductData] = useContext(ContextApi);


    let category = productData && productData.reduce((acc, item) => [...acc, item.category], []);

    category = [...new Set(category)];

    const color = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };

    return (
        <nav className="h-full w-[270px] bg-slate-200 p-5 flex-shrink-0">
            <Link to='/create' className="text-center border-blue-400 font-semibold text-blue-400 rounded-md w-full mx-auto border-[1.5px] inline-block py-2 cursor-pointer">
                Add New Product
            </Link>
            <hr className="w-full bg-blue-400 h-0.5 mt-7" />
            <h2 className="py-2 text-xl font-semibold mb-2">Category Filter</h2>

            <Link to="/" className="flex items-center gap-2 mb-2">
                <span
                    style={{ backgroundColor: color() }}
                    className="h-3 w-3 rounded-full inline-block"
                ></span>
                <h2 className="font-medium">Home</h2>
            </Link>

            {!productData ? <Loading /> : category.map((item, idx) => (
                <Link
                    to={`?/category/${item}`}
                    key={idx}
                    className="flex items-center gap-2 mb-2"
                >
                    <span
                        style={{ backgroundColor: color() }}
                        className="h-3 w-3 rounded-full inline-block"
                    ></span>
                    <h2 className="font-medium">{item}</h2>
                </Link>
            ))}
        </nav>
    );
}

export default Navigation;
