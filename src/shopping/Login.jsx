import { useState } from "react"


function Login(){
    const[username,setUsername] =useState("");
    const[password,setPassword] =useState("")
    return(
        <section className="flex flex-col justify-evenly w-[700px] h-[300px] m-4">
            <h1 className="text-xl">Login</h1>
            <input 
            className="border border-black rounded-md p-2" type="text" 
            placeholder="Username"
            value={username}
            onChange={()=> setUsername(e.target.value)}
            />
            
            <input 
            className="border border-black rounded-md p-2"   type="password" 
            placeholder="Password"
            value={password}
            onChange={()=> setPassword(e.target.value)}


            
            />
            <button className="bg-yellow-500 rounded-md p-2 text-black">Login</button>


        </section>
    )
}
export default Login