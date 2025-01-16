import React, { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../utils/Context';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const backHandler = () => {
        navigate(-1);
    };

    const [productData, setProductData] = useContext(ContextApi);
    const [product, setProduct] = useState(null);

    const [formData, setFormData] = useState({
        image: "",
        title: "",
        category: "",
        price: "",
        des: "",
    });

    useEffect(() => {
        if (productData) {
            const selectedProduct = productData.find((p) => p.id == id);
            if (selectedProduct) {
                setProduct(selectedProduct);
                setFormData({
                    image: selectedProduct.image || "",
                    title: selectedProduct.title || "",
                    category: selectedProduct.category || "",
                    price: selectedProduct.price || "",
                    des: selectedProduct.des || "",
                });
            }
        }
    }, [id, productData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const updatedProductData = productData.map((p) =>
            p.id == id ? { ...p, ...formData } : p
        );

        setProductData(updatedProductData);

        localStorage.setItem("product", JSON.stringify(updatedProductData));

        backHandler();
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
                    <h1 className="text-2xl font-medium mb-4">Edit Product</h1>
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
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Edit;
