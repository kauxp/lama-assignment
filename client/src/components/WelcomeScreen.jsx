import React, { useState } from 'react';
import QuesLogo from '../assets/QuesLogo';
import Group from '../assets/Group.png';
import QuesLoginLogo from '../assets/QuesLoginLogo';
import GoogleLogo from '../assets/GoogleLogo';
import axios from 'axios';

const WelcomeScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                email: email,
                password: password
            });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                window.location.href = '/create-new-project';
            }
        } catch (err) {
            console.error(err);
            setError(err.response ? err.response.data.message : 'Login failed');
        }
    };

    return (
        <div className="w-screen flex flex-row h-screen">
            <div className="w-[70%] relative bg-custom-gradient h-screen text-white overflow-hidden">
                <img src={Group} alt="Background" className="absolute inset-0 object-cover w-full h-full" />
                <div className="p-16 flex flex-col items-start space-y-6">
                    <QuesLogo className="mx-auto mb-4" width="268.12" height="52.33" />
                    <div className=' font-light text-left gap-y-3'>
                        <div className=" text-8xl   text-white mt-8">Your podcast</div>
                        <div className=" text-8xl  text-white">will no longer</div>
                        <div className=" text-8xl   text-white mb-4">be just a hobby.</div>
                    </div>
                    <div className='text-left'>
                        <div className="text-2xl ">Supercharge Your Distribution</div>
                        <div className="text-2xl ">using your AI assistant</div>
                    </div>
                </div>
            </div>
            <div className="w-[30%] flex flex-col items-center bg-slate-100">
                <QuesLoginLogo width="100.36" height="96.2" marginTop="10vh" />
                <div className="text-[#7E22CE] p-3 text-3xl">
                    <div className='font-light'>Welcome to</div>
                    <div className='font-bold'>Ques.AI</div>
                </div>
                <div className='pt-8'>
                    <form onSubmit={handleLogin}>
                        <div>
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="appearance-none border rounded w-[20vw] py-3 px-6 text-gray-700 leading-tight focus:shadow-outline"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="appearance-none border rounded w-[20vw] py-3 px-6 text-gray-700 leading-tight focus:shadow-outline mt-4"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <div className="text-red-500 mt-2">{error}</div>}
                        <div className='flex flex-row justify-between pt-2 space-x-10'>
                            <div className='pl-24'>
                                <input type="checkbox" className="" />
                                <label htmlFor="rememberMe" className="text-gray-700 text-sm"> Remember me </label>
                            </div>
                            <a href="#" className="text-blue-500 text-sm pr-24"> Forgot password? </a>
                        </div>
                        <button type="submit" className="bg-[#7E22CE] hover:bg-[#4e1b7b] text-white font-bold w-[20vw] py-3 px-6 rounded focus:shadow-outline mt-4">Login</button>
                    </form>
                </div>
                <div className='p-3 w-full flex items-center justify-center'>
                    <div className='w-[30%] bg-[#DBDBDB] h-[1px]'></div>
                    <div className="mx-4 text-gray-600 text-sm">or</div>
                    <div className='w-[30%] bg-[#DBDBDB] h-[1px]'></div>
                </div>
                <div>
                    <button type="button" className="bg-white border-solid hover:bg-gray-100 flex flex-row justify-center items-center text-gray-700 w-[20vw] py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                        <span className="flex flex-row items-center justify-center"><GoogleLogo className="w-6 h-6 mr-2" /> Continue with Google</span>
                    </button>
                </div>
                <div className='space-x-2 pt-5 text-sm'>
                    <span>Don't have an Account? </span><span className='text-blue-500 font-semibold'><a href='#'>Create Account</a></span>
                </div>
            </div>
        </div>
    );
}

export default WelcomeScreen;
