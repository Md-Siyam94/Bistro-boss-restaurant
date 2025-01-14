import { GrTrash } from "react-icons/gr";
import SectionTitle from "../../../../component/SectionTitle";
import useCart from "../../../../provider/useCart";
import Swal from "sweetalert2";
import axios from "axios";

import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../provider/useAxiosPublic";


const Cart = () => {
    const axiosPublic = useAxiosPublic()
    const [cart ,refetch] = useCart()
    const totalPrice = cart.reduce((pre, cur) => pre + cur?.price, 0)


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })

            }
        });
    }
    return (
        <div>
            <SectionTitle heading={'WANNA ADD MORE?'} subHeading={"My Cart"}></SectionTitle>
            <div className="bg-base-100 p-6 border">
                <div className="flex justify-evenly">
                    <h2 className="text-3xl">Total orders: {cart.length}</h2>
                    <h2 className="text-3xl">Total orders: ${totalPrice}</h2>
                    {
                       cart.length ? <Link to={"/dashboard/payment"}>
                        <button  className="btn bg-yellow-700 bg-opacity-60 mb-4 text-white">Pay</button>
                        </Link> :
 <button disabled className="btn bg-yellow-700 bg-opacity-60 mb-4 text-white">Pay</button>
                    }
                </div>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-yellow-700 bg-opacity-60  text-white">
                            <tr>
                                <th>
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item?._id}  >
                                    <th>
                                        <label>
                                            <p>{index + 1}</p>
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item?.name}

                                    </td>
                                    <td>${item?.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="py-2 px-2 rounded-lg bg-red-500 text-white text-xl"><GrTrash></GrTrash></button>
                                    </th>
                                </tr>)
                            }




                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;