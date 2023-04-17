import react from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
export default function Login(){
    const [count, setCount] = react.useState(0);
    const [push, setPush] = react.useState(false);
    const router = useRouter()
    const submitHandle = async(e)=>{
        e.preventDefault();
        //setCount(count+1)
        const data = {
            email: document.getElementsByName("email")[0].value,
            password: document.getElementsByName("password")[0].value,
        }
        const post = {
            url:router.pathname,
            push:data
        }
        console.log(post)
        await axios.post("/api/auth",post)
        .then((res)=>{
            if (res.data.status){
                localStorage.setItem("authtoken",res.data.token);
                window.location.href = "/showcustomers";
            }
        })
        .catch((err)=>{console.log(err)})
    }
    if(count>2){ setPush(true)}
    return(
        <div style={{backgroundImage:"url(https://img.freepik.com/free-vector/realistic-polygonal-background_23-2148899085.jpg)",backgroundSize: "cover",backgroundRepeat: "no-repeat",height:"38rem", paddingTop:"5rem"}}>

<div classname="" style={{width:"32rem", margin:"auto", paddingTop:"7rem", paddingBottom:"7rem",backgroundColor:"white", padding:"10px",borderRadius:"5px"}}>
    <form className="text-center" onSubmit={submitHandle}>
        <p classNamne="text-2xl font-bold text-grey-900">Login</p>
    <div className="mb-6">
        <label  className="text-left block mb-2 text-sm font-medium text-gray-900">Your email</label>
        <input type="email" name="email" className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 duration-300" placeholder="name@flowbite.com" required/>
    </div>
    <div className="mb-6">
        <label  className="text-left block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
        <input type="password" name="password" className="bg-white border border-white-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 duration-300" required/>
    </div>
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-white-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 duration-300"/>
        </div>
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
    <button type="submit" disabled={push} className="align-center justify-center mx-auto px-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-32 duration-300 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800">Submit</button>
    {count > 0 ? <p className="text-center text-red-500">Invalid Credentials</p> : null}
    { count > 3 ? <p className="text-center text-red-500">Too many attempts</p> : null}
    </form>
</div>

</div>
    )
}