import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../logo.svg';
import './Home.css';

function Home() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const menu = [];

    // const fetchData = () => {
    //   fetch("http://localhost:4000/product")
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(data => {
    //         setProducts(data.data)
    //     })
    // }

    useEffect(() => {
        const getProducts = async () => {
            const res = await (await fetch("http://localhost:4000/product")).json();
            setProducts(res.data);
        };

        const getCategories = async () => {
            const res = await (await fetch("http://localhost:4000/category")).json();
            setCategories(res.data);
        };
    
        getCategories();
        getProducts();
    }, []);

    return (

        <section className="text-gray-600 body-font bg-gray-50 h-screen flex justify-center items-start">
            <div className="container px-5 py-24 mx-auto">

                {categories.length > 0 && (

                    <div className="flex flex-wrap -m-4 mb-6 text-center">                    

                        {categories.map((category: any) => (
                            <div key={category._id} className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
                                <div className="flex items-center text-center justify-center h-56 p-4 border-2 rounded-lg bg-white shadow-indigo-50 shadow-md">
                                    <div className='text-center w-100'>
                                        <h2 className="text-gray-900 text-lg font-extrabold">{category.name}</h2>
                                    </div>
                                    <div className="">
                                        <img src={ 'http://localhost:4000/' + category.image} className="mr-3 max-h-28" alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                )}

                {products.length > 0 && (

                    <div className="flex flex-wrap -m-4 text-center">                    
                    
                        {products.map((product: any) => (
                            <div key={product._id} className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
                                <div className="flex items-center justify-between p-4 border-2 rounded-lg bg-white shadow-indigo-50 shadow-md">
                                    <div>
                                        <h2 className="text-gray-900 text-lg text-left font-bold">{product.name}</h2>
                                        <h3 className="mt-2 text-xl font-bold text-yellow-500 text-left">{product.price} &euro;</h3>
                                        {/* <p className="text-sm font-semibold text-gray-400">{product.description}</p> */}
                                        <button className="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">Add to cart</button>
                                    </div>
                                    <div className="">
                                        <img src={ 'http://localhost:4000/' + product.image} className="mr-3 max-h-28" alt="" />
                                    </div>
                                    {/* <div
                                        className="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-32 h-32  rounded-full shadow-2xl shadow-yellow-400 border-white  border-dashed border-2  flex justify-center items-center ">
                                        <div>
                                            <h1 className="text-white text-2xl">Basic</h1>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}

                    </div>

                )}

            </div>
        </section>
    );

}

export default Home;
