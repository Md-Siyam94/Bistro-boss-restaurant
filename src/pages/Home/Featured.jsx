import SectionTitle from "../../component/SectionTitle";
import bgImg from "../../assets/home/featured.jpg"
import "./Featured.css"


const Featured = () => {
    return (
        <div className="  my-20">
            <div className=" featured-item  bg-fixed  pb-20 pt-10">
                <div className="text-white">
                    <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
                </div>
                <div className="flex gap-5 px-52">
                    <img className="h-60 w-96 object-cover" src={bgImg} alt="" />
                    <div>
                        <h2 className="text-lg font-semibold text-white">March 20, 2023 <br />
                            WHERE CAN I GET SOME?
                        </h2>
                        <p className="text-white my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="uppercase py-3 px-5 border-b-2 hover:bg-slate-800 rounded-lg my-6 border-white text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;