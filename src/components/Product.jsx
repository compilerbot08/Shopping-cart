
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {add, remove} from "../redux/slices/cartSlice"

function Product({post}){
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();
    const addTocart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }
    const removeFromcart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    }
    return(
        <div className="flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-15 rounded-xl shadow-lg
        hover:scale-110 hover:shadow-2xl transition duration-200 ease-in">
            <div>
                <p className="text-gray-700 font-semiboldtext-lg text-left truncate w-40 mt-1">{post.title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            </div>
            <div className="h-[180px]">
                <img src={post.image} alt="product" className="w-full h-full"/>
            </div>
            <div className="flex justify-between gap-12 items-center w-full mt-5">
                    <div>
                        <p className="text-green-600 font-semibold">${post.price}</p>
                    </div>
                    {
                        cart.some((p) => p.id === post.id) ?
                        (<button onClick={removeFromcart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                        text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-200 ease-in">
                            Remove Item
                        </button>) :
                        (<button onClick={addTocart}
                        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                        text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                            Add to Cart
                        </button>)
                    }
            </div>
        </div>
    );
};
export default Product;