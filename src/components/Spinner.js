function Spinner(){
    return(
        <div className="flex flex-col justify-center items-center mt-10 h-[80vh]">
            <div className="spinner"></div>
            <p className="font-semibold text-green-600">Loading...</p>
        </div>
    )
};
export default Spinner;