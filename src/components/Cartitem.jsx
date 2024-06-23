import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/slices/cartSlice";

function Cartitem({item, itemIndex}){
    const dispatch =useDispatch();
    const removeFromcart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }
    return(
        <div className="flex mb-[20px] gap-4 p-5 w-full h-[200px]">
            <div className="h-full w-1/4">
                <img src={item.image} alt="cartitem" className="w-full h-full"/>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div>
                <h1 className="font-bold text-gray-700">{item.title}</h1>
                </div>
                <div>
                    <h1>{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
                </div>
                <div className="flex justify-between mr-5">
                    <p className="font-bold text-green-500">${item.price}</p>
                    <div onClick={removeFromcart}>
                        <FcDeleteDatabase className="text-3xl cursor-pointer hover:scale-125 transition duration-200 ease-out"/>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Cartitem;