

const PopularManuCard = ({ manu }) => {
    const { name, recipe, image, category, price } = manu || {}
    return (
        <div className="flex gap-4">
            <div>
                <img
                    className="h-28 w-44 rounded-tr-full rounded-br-full rounded-bl-full "
                    src={image} alt="" />
            </div>
            <div>
                <div className="flex justify-between  mb-3">
                    <h2 className="font-semibold text-2xl">{name} ____________</h2>
                    <p className="font-bold text-yellow-600">${price}</p>
                </div>
                <p >{recipe}</p>
            </div>
        </div>
    );
};

export default PopularManuCard;