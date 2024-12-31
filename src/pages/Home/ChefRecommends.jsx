import SectionTitle from "../../component/SectionTitle";
import saladImg from '../../assets/home/slide1.jpg'


const ChefRecommends = () => {
    return (
        <div className="max-w-6xl mx-auto my-20">
            <div>
                <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">
                <div>
                    <img
                        className="h-64 w-full object-cover"
                        src={saladImg} alt="" />
                    <div className="bg-base-200">
                        <h2 className="font-semibold pt-4 text-2xl text-center">Caeser Salad</h2>
                        <p className="my-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, totam?</p>
                        <div className="grid justify-center">
                            <button className="uppercase text-lg my-6 font-semibold py-3 px-5 border border-yellow-600 border-b-2 rounded-lg">Add to cart</button>
                        </div>

                    </div>
                </div>
                <div>
                    <img
                        className="h-64 w-full object-cover"
                        src={saladImg} alt="" />
                    <div className="bg-base-200">
                        <h2 className="font-semibold pt-4 text-2xl text-center">Caeser Salad</h2>
                        <p className="my-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, totam?</p>
                        <div className="grid justify-center">
                            <button className="uppercase text-lg my-6 font-semibold py-3 px-5 border border-yellow-600 border-b-2 rounded-lg">Add to cart</button>
                        </div>

                    </div>
                </div>
                <div>
                    <img
                        className="h-64 w-full object-cover"
                        src={saladImg} alt="" />
                    <div className="bg-base-200">
                        <h2 className="font-semibold pt-4 text-2xl text-center">Caeser Salad</h2>
                        <p className="my-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, totam?</p>
                        <div className="grid justify-center">
                            <button className="uppercase text-lg my-6 font-semibold py-3 px-5 border border-yellow-600 border-b-2 rounded-lg">Add to cart</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChefRecommends;