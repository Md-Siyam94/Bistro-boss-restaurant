import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../component/SectionTitle'
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from '../../../../provider/useAxiosPublic'
import useAxiosSecure from '../../../../provider/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // console.log(data)
        // image uploade to imgbb and get the url
        const imageFile = {image: data.image[0]}
       const res =await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type' : "multipart/form-data"
            }
        } )
        // console.log(res.data);
        if(res.data.success){
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                price: parseFloat(data.price),
            }
            const menuRes = await axiosSecure.post("/menu", menuItem)
            console.log(menuRes.data);
            if(menuRes.data.insertedId){  
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been saved`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    };
    return (
        <div>
            <div>
                <SectionTitle subHeading={"What's new?"} heading={"ADD AN ITEM"}></SectionTitle>
            </div>
            <div className='bg-base-200 p-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Recipe name<span className='text-red-600'>*</span></span>
                        </div>
                        <input type="text" {...register("name", {required: true})} placeholder="Recipe name" className="input input-bordered w-full " />
                    </label>


                    <div className='flex gap-4 items-center'>
                        {/* category */}
                        <label className="form-control w-full my-3">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <select defaultValue={"select a category"} {...register("category", {required: true})} className="select select-bordered w-full ">
                                <option disabled value={"select a category"}>Select a category</option>
                                <option value={"salad"}>Salad</option>
                                <option value={"pizza"}>Pizza</option>
                                <option value={"soup"}>Soup</option>
                                <option value={"dessert"}>Dessert</option>
                                <option value={"drinks"}>Drinks</option>
                               
                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Price<span className='text-red-600'>*</span></span>
                            </div>
                            <input type="number" {...register("price", {required: true})} placeholder="price" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <label className="form-control my-3" >
                        <div className="label">
                            <span className="label-text">Recipe details</span>                        
                        </div>
                        <textarea {...register("recipe", {required: true})} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
                    </label>
                    <div>
                        <input type="file" {...register("image", {required: true})} className="file-input file-input-bordered w-full max-w-xs my-4" />
                    </div>
                    <div>
                    <button className="btn btn-outline">Add Item <FaUtensils /> </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddItems;