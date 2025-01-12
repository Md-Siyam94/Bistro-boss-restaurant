import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../../provider/useAxiosSecure'
import SectionTitle from '../../../../component/SectionTitle';
import { GrTrash } from 'react-icons/gr';
import { FaUsers } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Users = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [] , refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin =(id)=>{
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Make Admin Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDelete =(id)=>{
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
                        axiosSecure.delete(`/users/${id}`)
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
        <div className="">
            <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How Many?"}></SectionTitle>


            <div className="bg-base-100 p-6 border">
                <div className="">
                    <h2 className="text-3xl">Total users : {users.length}</h2>

                </div>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-yellow-700 bg-opacity-60  text-white">
                            <tr>
                                <th>
                                </th>
                                <th>Item Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user?._id}  >
                                    <th>
                                        <label>
                                            <p>{index + 1}</p>
                                        </label>
                                    </th>
                                   
                                    <td>
                                        {user?.name}

                                    </td>
                                    <td>{user?.email}</td>
                                    <td>
                                       {
                                        user.role === "admin" ? "Admin" :  <button  onClick={() => handleMakeAdmin(user._id)} className="py-2 px-2 rounded-lg bg-yellow-700 text-white text-xl"><FaUsers></FaUsers></button>
                                       }
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(user._id)} className="py-2 px-2 rounded-lg bg-red-500 text-white text-xl"><GrTrash></GrTrash></button>
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

export default Users;