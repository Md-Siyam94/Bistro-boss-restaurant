import { Helmet } from "react-helmet";

// import Offered from "./Offered";
import Cover from "../../component/Cover";
import menuCoverImg from '../../assets/menu/banner3.jpg'
import dessertCover from '../../assets/menu/dessert-bg.jpeg'
import pizzaCover from '../../assets/menu/pizza-bg.jpg'
import saladCover from '../../assets/menu/salad-bg.jpg'
import soupCover from '../../assets/menu/soup-bg.jpg'
// import PopularManu from "../Home/PopularManu";
// import Offered from "./Offered";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../component/SectionTitle";
import MenuCategory from "./MenuCategory";




const Menu = () => {
    const { menu } = useMenu()
    const offered = menu.filter(item => item.category === "offered")
    const desserts = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salads = menu.filter(item => item.category === "salad")
    const soups = menu.filter(item => item.category === "soup")
    return (
        <div>
            <Helmet>
                <title>Bristo-Boss/Menu</title>
            </Helmet>
            {/* menu Cover section */}
            <section>
                <Cover bgImage={menuCoverImg} heading={'Our Menu'} subHeading={"Would you like to try a dish?"}></Cover>
            </section>
            {/* offered section */}
            <section className="max-w-6xl my-20 mx-auto ">
                <div>
                    <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
                </div>
                <MenuCategory items={offered} title={"offered"}></MenuCategory>
                
            </section>
            {/* desserd section */}
            <section className="max-w-6xl my-20 mx-auto ">
                <MenuCategory items={desserts} title={"dessert"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} coverImg={dessertCover}></MenuCategory>
            </section>
            {/* pizza section */}
            <section className="max-w-6xl my-20 mx-auto ">
                <MenuCategory items={pizza} title={"pizza"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} coverImg={pizzaCover}></MenuCategory>
            </section>
            {/* salad section */}
            <section className="max-w-6xl my-20 mx-auto ">
                <MenuCategory items={salads} title={"salad"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} coverImg={saladCover}></MenuCategory>
            </section>
            {/* soup section */}
            <section className="max-w-6xl my-20 mx-auto ">
                <MenuCategory items={soups} title={"soup"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} coverImg={soupCover}></MenuCategory>
            </section>


        </div>
    );
};

export default Menu;