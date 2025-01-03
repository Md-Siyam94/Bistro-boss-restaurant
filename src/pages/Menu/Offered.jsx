
import PopularManuCard from "../../component/ManuCard";
import SectionTitle from "../../component/SectionTitle";
import useMenu from "../../hooks/useMenu";



const Offered = () => {
    const {menu} = useMenu()
    const offered = menu.filter(e=> e.category === "offered")
    return (
        <div className="max-w-6xl my-20 mx-auto ">
            <div>
                <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    offered.map(manu => <PopularManuCard key={manu._id} manu={manu}></PopularManuCard>)
                }
            </div>
        </div>
    );
};

export default Offered;