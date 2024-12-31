import Banner from "./Banner";
import BristoBoss from "../../component/BristoBoss";
import CategorySlider from "./CategorySlider";
import BristoBossImg from '../../assets/home/chef-service.jpg'
import PopularManu from "./PopularManu";
import ChefRecommends from "./ChefRecommends";
import Featured from "./Featured";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <CategorySlider></CategorySlider>
            </section>
            <section>
                <BristoBoss bgImg={BristoBossImg} heading={"Bristo Boss"} subHeading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."}></BristoBoss>
            </section>
            <section>
                <PopularManu></PopularManu>
            </section>
            <section>
                <ChefRecommends></ChefRecommends>
            </section>
            <section>
                <Featured></Featured>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;