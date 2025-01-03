import Banner from "./Banner";

import CategorySlider from "./CategorySlider";
import bristoBoss from '../../assets/home/chef-service.jpg'
import PopularManu from "./PopularManu";
import ChefRecommends from "./ChefRecommends";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import Cover from "../../component/Cover";


const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <CategorySlider></CategorySlider>
            </section>
            <section className="max-w-6xl my-20 mx-auto ">
               <Cover bgImage={bristoBoss} heading={'Bistro Boss'} subHeading={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'}></Cover>
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