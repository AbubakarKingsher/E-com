import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {

    return (
        <Link
            to={`/details/${item.id}`}
            className="card shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[350px] w-[230px] p-3 cursor-pointer bg-white rounded flex flex-col gap-5"
        >
            <div className="h-[220px] w-full hover:scale-110 duration-200 transition-[0.7s]">
                <img
                    className="h-full w-full object-contain"
                    src={item.image}
                />
            </div>
            <h2 className="text-base font-medium text-center">{item.title}</h2>
        </Link>
    );
}

export default Card;
