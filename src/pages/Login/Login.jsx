import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
       const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault()

        const form = new FormData(e.target);
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password);

        loginUser(email, password)
        .then(data=> {
            console.log("user from login", data)
            navigate(location?.state ? location?.state : "/")
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
        .catch(err=> {
            console.log("error from login", err.message);
        })

    }
    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    }



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div className="hero bg-base-100 min-h-screen max-w-6xl my-20 mx-auto ">
            <Helmet>
                <title>Login - Bristo Boss</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <div >
                                <LoadCanvasTemplate />
                            </div>
                            <label className="label">
                                <span className="label-text">Captcha</span>
                            </label>
                            <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="type here the captcha" className="input input-bordered" required />
                            {/* <button  className="btn btn-xs btn-outline mt-4">Verify</button> */}
                        </div>
                        <div className="form-control mt-6">
                            {/* TODDO: disabled the sign up btn */}
                            <button disabled={false} className="btn bg-[#D1A054B3] hover:bg-[#D1A054]">Login</button>
                        </div>
                    </form>
                    <div>
                        <p><small>New Here?</small><Link to={"/signup"}>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;