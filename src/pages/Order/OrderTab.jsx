import FoodCard from "../../component/FoodCard";


const OrderTab = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;