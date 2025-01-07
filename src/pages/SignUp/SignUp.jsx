import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Helmet } from "react-helmet";
import { useContext } from "react";
// import auth from "../../firebase_init";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { signupUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        const photoURL = data.photoURL;
        const name = data.name;
        const updateDetails = {displayName:name,photoURL: photoURL}
        signupUser(data.email, data.password)
            .then(result => {
                console.log("user from sign up", result);
                updateUserProfile(updateDetails)
                    .then(() => {
                        navigate("/")
                        Swal.fire({
                            title: "Login successfully!",
                            showClass: {
                                popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                            },
                            hideClass: {
                                popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                            }
                        });
                    })
                    .catch(err => {
                        console.log("error from update profile", err.message);
                    })

            })
            .catch(err => {
                console.log("error from sign up", err.message);
            })
    };





    return (

        <div className="hero bg-base-100 min-h-screen max-w-6xl my-20 mx-auto ">
            <Helmet>
                <title>Sign up - Bristo Boss</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center font-bold">Sign up now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            <div className="mt-2">
                                {errors.name && <span className="text-red-500">please fill this field!</span>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })}  placeholder="photo url" className="input input-bordered" />
                            <div className="mt-2">
                                {errors.photoURL && <span className="text-red-500">please fill this field!</span>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            <div className="mt-2">
                                {errors.email && <span className="text-red-500">please fill this Email field!</span>}
                            </div>
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 32,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} name="password" placeholder="password" className="input input-bordered" />
                            <div className="mt-2 text-red-600">
                                {errors.password?.type === "required" && (
                                    <p role="alert">Fill this password field</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p role="alert">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p role="alert">Password must be under 32 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p role="alert">Password must have one upper case, one lower case, one number and one speacial character</p>
                                )}
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#D1A054B3] hover:bg-[#D1A054]">Sign up</button>
                        </div>
                    </form>
                    <div>
                        <p><small>Already have an account</small><Link to={"/login"}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

// disabled={disabled}