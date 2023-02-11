import React, { useState, useEffect } from 'react';
import './Orders.css';

function Orders() {

    const [orders, setOrders] = useState([] as any);

    useEffect(() => {
        const dataFetch = async () => {
          const res = await (await fetch("http://localhost:4000/order")).json();
          setOrders(res.data);
        };
        dataFetch();
    }, []);

    return (
        <>

            <section className="text-gray-600 body-font bg-gray-50 h-screen flex justify-center items-start">
                <div className="container px-5 py-12 mx-auto">
                    <div className="container mx-auto mt-10">
                        <div className="flex shadow-md my-10">
                            <div className="w-3/4 bg-white px-10 py-10">
                                <div className="flex justify-between border-b pb-8">
                                    <h1 className="font-semibold text-2xl">Orders ({orders.length})</h1>
                                </div>
                                <div className="flex mt-10 mb-5">
                                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-100">Order Code</h3>
                                </div>

                                {orders.length > 0 && (
                                            
                                    <div>

                                        {orders.map((order: any) => (

                                            <div key={order._id} 
                                                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                                <div className="flex w-100">
                                                    <div className="w-20">
                                                        {/* <img src={ 'http://localhost:4000/' + cartItem.productId.image} className="mr-3 max-h-28" alt="" /> */}
                                                    </div>
                                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                                        <span className="font-bold text-sm">{order._id}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}

                                    </div>

                                )}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );

}

export default Orders;
