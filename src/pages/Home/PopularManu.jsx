import { useEffect, useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import PopularManuCard from "../../component/PopularManuCard";


const PopularManu = () => {
    const [manus, setManues] = useState([])

    useEffect(()=>{
        fetch(`menu.json`)
        .then(res=> res.json())  
        .then(data=>{
            const popularData = data.filter(manu=> manu.category === "popular")
            setManues(popularData)})
    },[])
    console.log(manus);
    return (
        <div className="max-w-6xl my-20 mx-auto">
            <div>
                <SectionTitle heading={"FROM OUR MENU"} subHeading={'Check it out'}></SectionTitle>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    manus.map(manu => <PopularManuCard key={manu._id} manu={manu}></PopularManuCard>)
                }
            </div>
            <div className="grid justify-center my-9">
                <button className="py-3 px-5 border-b-2 rounded-lg border-black font-semibold text-xl">View Full Manu</button>
            </div>
            <div className="py-20 grid justify-center bg-gray-900">
                <h2 className="text-white font-semibold lg:text-5xl">Call Us: +880 <span className="font-serif">01789478967</span></h2>
            </div>
            
        </div>
    );
};

export default PopularManu;