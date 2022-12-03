import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const LogIn = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
            });
    }

    const googleLogin = () => {
        console.log('click')

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
            });
    }

    return (
        <div>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered"  {...register("email", { required: true })} />
                                    {errors.email && <span className='text-[10px] text-red-500 text-start mt-1'>Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered"  {...register("password", { required: true })} />
                                    {errors.password && <span className='text-[10px] text-red-500 text-start mt-1'>Password is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        <Link to={'/signup'}><a href="#" className="label-text-alt link link-hover">Create a account?</a></Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <button className="btn btn-outline" onClick={() => googleLogin()}>Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;