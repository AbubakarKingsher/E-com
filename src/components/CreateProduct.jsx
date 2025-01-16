import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../utils/Context";
import { toast } from "react-toastify";

function CreateProduct() {
    const navigate = useNavigate();
    const [productData, setProductData] = useContext(ContextApi);
    const [randomNumber, setRandomNumber] = useState("");

    const [formData, setFormData] = useState({
        image: "",
        title: "",
        category: "",
        price: "",
        des: "",
    });

    const backHandler = () => {
        navigate(-1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        const generateRandomNumber = () => {
            const number = Math.floor(Math.random() * 100) + 21;
            setRandomNumber(number);
        };
        generateRandomNumber();
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const addNewProduct = {
            id: randomNumber,
            ...formData,
        };

        const updatedProductData = [...productData, addNewProduct];

        setProductData(updatedProductData); // Update context
        toast.success("Product added successfully!");

        setFormData({
            image: "",
            title: "",
            category: "",
            price: "",
            des: "",
        });

        navigate("/");
    };

    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="h-full w-[80%] p-5">
                <button
                    onClick={backHandler}
                    className="border-[0.5px] border-red-500 py-1 rounded text-red-500 px-5 font-medium text-lg"
                >
                    Back
                </button>
                <form onSubmit={submitHandler} className="p-3 mt-5 px-10">
                    <h1 className="text-2xl font-medium mb-4">Add New Product</h1>
                    <input
                        onChange={handleChange}
                        value={formData.image}
                        name="image"
                        required
                        className="w-full bg-[#f1f1f1] h-10 p-2 rounded outline-none"
                        type="url"
                        placeholder="Image link"
                    />

                    <input
                        onChange={handleChange}
                        value={formData.title}
                        name="title"
                        required
                        className="w-full bg-[#f1f1f1] my-3 h-10 p-2 rounded outline-none"
                        type="text"
                        placeholder="Title"
                    />

                    <div className="flex justify-between mb-3">
                        <input
                            onChange={handleChange}
                            value={formData.category}
                            name="category"
                            required
                            className="w-[48%] bg-[#f1f1f1] h-10 p-2 rounded outline-none"
                            type="text"
                            placeholder="Category"
                        />

                        <input
                            onChange={handleChange}
                            value={formData.price}
                            name="price"
                            required
                            className="w-[48%] bg-[#f1f1f1] h-10 p-2 rounded outline-none"
                            type="text"
                            placeholder="Price"
                        />
                    </div>
                    <textarea
                        onChange={handleChange}
                        value={formData.des}
                        name="des"
                        required
                        className="w-full bg-[#f1f1f1] h-40 rounded resize-none outline-none p-2"
                        placeholder="Enter product description here..."
                    ></textarea>
                    <button
                        type="submit"
                        className="text-center border-blue-400 font-semibold text-blue-400 rounded-md px-3 mt-2 mx-auto border-[1.5px] inline-block py-2 cursor-pointer"
                    >
                        Add New Product
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;
