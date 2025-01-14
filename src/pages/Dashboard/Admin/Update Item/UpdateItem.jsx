import React from 'react';
import SectionTitle from '../../../../component/SectionTitle';
import { FaUtensils } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../provider/useAxiosSecure';

const UpdateItem = () => {

    const params = useParams()
    const axiosSecure = useAxiosSecure()
    console.log(params);
     const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm();
        
    const onSubmit = async (data)=>{
        console.log(data);
    }
    return (
        <div>
        
            <div>
                <SectionTitle heading={"Update Item"} subHeading={"Make a new look"}></SectionTitle>
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
                                
                                <div className='flex justify-center'>
                                <button className="btn bg-yellow-600">Update Recipe Details <FaUtensils /> </button>
                                </div>
            
                            </form>
                        </div>
        </div>
    );
};

export default UpdateItem;