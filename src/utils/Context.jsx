import React, { createContext, useEffect, useState } from 'react';

export const ContextApi = createContext();

function Context({ children }) {
    const [productData, setProductData] = useState([]);

    const initializeLocalStorage = () => {
        try {
            const existingData = localStorage.getItem('product');
            if (!existingData) {
                localStorage.setItem('product', JSON.stringify([]));
            }
        } catch (error) {
            console.error('Local storage error:', error);
        }
    };

    useEffect(() => {
        initializeLocalStorage();
        const product = JSON.parse(localStorage.getItem('product')) || [];
        setProductData(product);
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('product', JSON.stringify(productData));
        } catch (error) {
            console.error('Error syncing with local storage:', error);
        }
    }, [productData]);

    return (
        <ContextApi.Provider value={[productData, setProductData]}>
            {children}
        </ContextApi.Provider>
    );
}

export default Context;
