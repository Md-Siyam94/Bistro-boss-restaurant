import { Link } from "react-router-dom";
import Cover from "../../component/Cover";
import ManuCard from "../../component/ManuCard";


const MenuCategory = ({ items, title, subTitle, coverImg }) => {
    console.log(title);
    return (
        <div>
            <div>
                {
                    subTitle && <Cover bgImage={coverImg} heading={title} subHeading={subTitle}></Cover>
                }
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 space-y-5 mt-20">
                {
                    items.map(manu => <ManuCard key={manu._id} manu={manu}></ManuCard>)
                }
            </div>
            <div className="grid justify-center my-9">
                <Link to={`/order/${title}`}>
                    <button className="py-3 px-5 border-b-2 rounded-lg border-black font-semibold text-xl">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;