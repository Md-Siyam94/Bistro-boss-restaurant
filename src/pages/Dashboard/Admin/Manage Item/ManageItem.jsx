import { FaTrash } from "react-icons/fa6";
import SectionTitle from "../../../../component/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import { FiEdit } from "react-icons/fi";
import useAxiosSecure from "../../../../provider/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
   

    // Item delete func
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {   
                                                  
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item?.name} has been deleted.`,
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div>
                <SectionTitle heading={"Manage All Items"} subHeading={"Hurry up"}></SectionTitle>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {
                        menu.map((item, index) => <tbody key={item._id}>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item?.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>


                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td>$ {item?.price}</td>
                                <td>
                                   <Link to={`/dashboard/update-item/${item._id}`}> <button  className="py-2 px-2 rounded-md  bg-yellow-600 text-white"><FiEdit className="text-xl" /></button></Link>
                                </td>
                                <th>
                                    <button onClick={() => handleDeleteItem(item)} className="py-2 px-2 rounded-md bg-red-600 text-white"><FaTrash className="text-lg"></FaTrash></button>
                                </th>
                            </tr>
                        </tbody>)
                    }


                </table>
            </div>


        </div>
    );
};

export default ManageItem;