import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home(){
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    async function fetchProductdata(){
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
            console.log(data);
        }
        catch(error){
            console.log("Somthing went wrong");
            setPosts([]);
        }
        setLoading(false);
    }
    useEffect( () => {
        fetchProductdata();
    },[]);
    return(
        <div>
            {
                loading ? (<Spinner/>) :
                    posts.length !== 0 ?
                    (<div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mb-6">
                        {
                            posts.map( (post) => {
                                return(<Product key={posts.id} post={post}/>);
                            })
                        }
                    </div>) :
                    (<div className="flex justify-center items-center h-[80vh]">
                        <p className="font-bold text-green-500 text-3xl">
                            No Data Found !
                        </p>
                    </div>)
            }
        </div>
    )
}
export default Home;