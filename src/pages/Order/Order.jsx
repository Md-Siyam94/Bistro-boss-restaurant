import Cover from '../../component/Cover'
import OrderCoverImg from '../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
// import FoodCard from '../../component/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks", "offered"]
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [ menu ] = useMenu()
   

    // console.log(category);
    const offered = menu.filter(item => item.category === "offered")
    const drinks = menu.filter(item => item.category === "drinks")
    const desserts = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salads = menu.filter(item => item.category === "salad")
    const soups = menu.filter(item => item.category === "soup")

    return (
        <div>
            {/* Order Banner */}
            <section>
                <Cover bgImage={OrderCoverImg} heading={'Order Food'} subHeading={'Would you like to try a dish?'}></Cover>
            </section>
            {/* food card section */}
            <section className="max-w-6xl mx-auto my-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList style={{}}>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                        <Tab>offered</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={offered}></OrderTab>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default Order;