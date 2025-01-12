import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../provider/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../provider/useAxiosSecure";
import useCart from "../provider/useCart";
// import axios from "axios";


const FoodCard = ({item}) => {
    const {user} = useAuth();
    const [refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const { name, recipe, image, category, price, _id } = item || {}
    const handleAddToCart=()=>{
        if(user && user?.email){
            const cartItem={
                menuId: _id,
                email: user?.email,
                name,
                image,
                category,
                price
            }
            axiosSecure.post(`/carts`, cartItem)
            .then(res=>{
                // console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} added to the cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                //   refetch the ui to update the Item count on navbar
                  refetch()
            })

        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate("/login", location?.state )
                  
                }
              });
        }
        // console.log( user?.email);
    }
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
                    <button onClick={handleAddToCart} className="uppercase text-lg my-6 font-semibold py-3 px-5 border border-yellow-600 border-b-4 hover:bg-gray-950 hover:text-white rounded-lg">Add to cart</button>
                </div>

            </div>
        </div>
    );
};

export default FoodCard;