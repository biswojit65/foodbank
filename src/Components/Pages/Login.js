import React,{useState} from 'react'
import five from "../../Images/blue.jpg"
import { Link,useNavigate } from 'react-router-dom'
export default function Signup() {
    const [user,setuser]=useState({email:"",password:""})
    let navigate=useNavigate();
    const handler=async(e)=>{
        e.preventDefault();
        const res=await fetch("http://localhost:5000/new/loginuser",{
            method : 'POST',
            headers :{
                'Content-type' : 'application/json'
            },
            body:JSON.stringify({email:user.email,password:user.password})
        })
        const json=await res.json();
        console.log(json);
        if(json.success!='yes'){
            alert('Invalid Login Credentials');
        }else{
            localStorage.setItem("userEmail",user.email);
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"))
            navigate('/');
        }
    }
    const changehandler=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    return (
        <section class="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <div class="card rounded-3 text-black">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body p-md-5 mx-md-4">

                                        <div class="text-center">
                                            <img src={five}
                                                style={{width: "185px"}}alt="logo"/>
                                                <h4 class="mt-1 mb-5 pb-1">Login to your FoodBank Account</h4>
                                        </div>

                                        <form onSubmit={handler}>
                                            <div class="form-outline  mt-5">
                                                <input type="email" id="form2Example11" class="form-control"
                                                    placeholder="Email address" name="email" value={user.email} onChange={changehandler}/>
                                                <label class="form-label" for="form2Example11">Username</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="password" id="form2Example22"  name="password" class="form-control" placeholder="Password" value={user.password} onChange={changehandler}/>
                                                <label class="form-label" for="form2Example22">Password</label>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center pb-4">
                                                <button type="submit" className="btn btn-primary m-3">Login</button>
                                                <Link type="button" class="btn btn-outline-danger" to='/signup'>New User ?</Link>
                                            </div>
                                            
                                        </form>

                                    </div>
                                </div>
                                <div class="col-lg-6 d-flex align-items-center gradient-custom-2" style={{backgroundColor: "blue"}}>
                                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 class="mb-4">We are more than just a company</h4>
                                        <p class="small mb-0 text-justify">Welcome to FoodBank, your premier food delivery company that brings delectable dishes right to your doorstep. At FoodBank, we understand the joy of savoring a delicious meal, whether it's a quick bite or a gourmet feast, and we believe that everyone deserves access to exceptional food without the hassle of cooking or going out.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
