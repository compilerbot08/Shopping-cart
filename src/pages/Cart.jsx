import { useSelector } from "react-redux";
import Cartitem from "../components/Cartitem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart(){
    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalamount] = useState(0);
    useEffect(() => {
        setTotalamount( cart.reduce((acc, curr) => acc + curr.price,0) );
    },[cart]);
    return(
        <div>
            {
                cart.length > 0 ?
                (<div className="flex max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] gap-10">
                    <div className="w-[650px] h-[80vh] overflow-auto mt-[20px] divide-y-2 divide-gray-500">
                    {
                        cart.map( (item,index) => {
                            return(<Cartitem key={item.id} item={item} itemIndex={index}/>);
                        })
                    }
                    </div>
                    <div className="flex flex-col justify-between w-[350px]">
                        <div>
                            <div className="text-green-700 font-semibold">Your Cart</div>
                            <div className="text-4xl font-bold text-green-700">Summary</div>
                            <p className="mt-[15px] font-semibold">
                                <span>Total Items: {cart.length}</span>
                            </p>
                        </div>
                        <div>
                            <p>Total Amount: <span className="font-bold">${totalAmount}</span></p>
                            <button className="w-full bg-green-700 mt-5 py-2 text-white font-medium rounded-md">
                                CheckOut Now
                            </button>
                        </div>
                    </div>
                </div>) :
                (<div className="flex flex-col justify-center items-center h-[80vh]">
                    <h1 className="font-semibold mb-[15px] text-2xl">Cart Empty</h1>
                    <Link to="/">
                        <button className="bg-green-600 px-[20px] py-[10px] font-medium rounded-lg">
                            Shop Now
                        </button>
                    </Link>
                </div>)
            }
        </div>
    )
}
export default Cart;