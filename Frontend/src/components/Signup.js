import React, { useState, useTransition } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
const Signup = () => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("normal");

    const handleSubmit = (e) => {
        e.preventDefault();
        let fullName = fname + ' ' + lname
        let obj = {
            name:fullName,
            email:email,
            password:password,
            userType:userType
        }

        console.log(obj)
        if (confirmPassword !== password) {
            alert('Invalid info')
        } else {
            // console.log(fname, lname, email, password);
            axios.post("https://online-book-exibition-and-sales.onrender.com/api/user", obj
            )
                .then((res) => {
                    console.log(res.data, "userRegister");
                    // if (data.status === "ok") {
                    //     alert("Registration Successful");
                    // } else {
                    //     alert("Something went wrong");
                    // }
                    window.location = '/signin';
                }).catch((err) => {
                    console.log(err)
                })
        }
    }
    return (
        <div className='h-fit w-screen px-5 py-10  flex justify-center items-center'>
            <div className='h-fit w-full md:w-1/2 py-6 bg-orange-400 flex flex-col justify-center items-center rounded-lg shadow-xl'>
                <h1 className='text-2xl pb-2 text-white font-semibold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='h-fit w-full flex flex-col items-center px-5 gap-5'>
                    <div className='w-full md:w-1/2 flex flex-col '>
                        <label className='text-xl font-semibold text-white' htmlFor='fname'>First name</label>
                        <input className='h-9 w-full px-5 text-base rounded-lg' type='text' name='fname' placeholder='Enter first name' required value={fname} onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col '>
                        <label className='text-xl font-semibold text-white' htmlFor='lname'>Last name</label>
                        <input className='h-9 w-full px-5 text-base rounded-lg' type='text' name='lname' placeholder='Enter last name' required value={lname} onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col '>
                        <label className='text-xl font-semibold text-white' htmlFor='email'>Email</label>
                        <input className='h-9 w-full px-5 text-base rounded-lg' type='email' name='email' placeholder='Enter email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col '>
                        <label className='text-xl font-semibold text-white' htmlFor='password'>Password</label>
                        <input className='h-9 w-full px-5 text-base rounded-lg' type='password' name='password' placeholder='Enter password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col '>
                        <label className='text-xl font-semibold text-white' htmlFor='confirmPassword'>Confirm Password</label>
                        <input className='h-9 w-full px-5 text-base rounded-lg' type='password' name='confirmPassword' placeholder='Enter confirm password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col '>
                        <label className='text-xl font-semibold text-white' htmlFor='userType'>User type</label>
                        <select className='h-9 w-full px-5 text-base rounded-lg bg-white' value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="normal">Normal</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-5 items-center'>
                        <button className='h-9 w-28 rounded-md bg-bgColor pb:2 font-semibold hover:bg-orange-100'>Sign up</button>
                        <p className='text-white text-lg'>Already Registered ? <Link to='/signin'><span className='text-blue-700 font-bold'>Sign in</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup