import React from "react";
import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const Infosection=()=>{
    const infoitems=[
        {
            icon:<FaShippingFast className="text-3xl text-red-600"/>,
            title:'free shipping',
            description:'Get your orders delivered with no extra cost',
        },
        {
            icon:<FaHeadset className="text-3xl text-red-600"/>,
            title:'Support 24/7',
            description:'We are here to assist you anytime',
        },
        {
            icon:<FaMoneyBill1Wave className="text-3xl text-red-600"/>,
            title:'100% Money Back',
            description:'full refund if ypu are not satisfied',
        },
        {
            icon:<FaLock className="text-3xl text-red-600"/>,
            title:'Payment Secure',
            description:'Your payment information is safe with us',
        },
        {
            icon:<FaTag className="text-3xl text-red-600"/>,
            title:'Discount',
            description:'Enjoy the best prices on our products',
        },
        

    ]
return(
    <div className="bg-white" pb-8 pt-12>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoitems.map((item,index)=>(
            <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-gray-100 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                {item.icon}
                <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
        ))}
    </div>
    </div>
)
}
export default Infosection;
