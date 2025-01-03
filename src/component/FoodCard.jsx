

const FoodCard = ({item}) => {
    const { name, recipe, image, category, price } = item || {}
    return (
        <div>
             <p className="absolute w-12 rounded-xl text-center mt-4 ml-72 font-semibold  bg-yellow-700 text-white">$ {price}</p>
            <img
                className="h-64 w-full object-cover "
                src={image} alt="" />
               
            <div className="bg-base-200 px-2">
                <h2 className="font-semibold pt-4 text-2xl text-center">{name}</h2>
                <p className="my-2 text-center">{recipe}</p>
                <div className="grid justify-center">
                    <button className="uppercase text-lg my-6 font-semibold py-3 px-5 border border-yellow-600 border-b-4 hover:bg-gray-950 hover:text-white rounded-lg">Add to cart</button>
                </div>

            </div>
        </div>
    );
};

export default FoodCard;