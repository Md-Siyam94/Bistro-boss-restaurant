import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../../component/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIP_PAYMENT_GETWAY_KEY}`)

const Payment = () => {
    return (
        <div>
            uira uira taka ase thake na pokete
            <div>
                <SectionTitle heading={"Paymen"} subHeading={"Pay to eat"}></SectionTitle>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;