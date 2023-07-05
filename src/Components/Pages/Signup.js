import React,{useState} from 'react'
import five from "../../Images/blue.jpg"
import { Link ,useNavigate} from 'react-router-dom'
export default function Signup() {
    const [user,setuser]=useState({name :"",password:"",email:"",location:"",phone:""})
    const navigate=useNavigate();
    const handler=async(e)=>{
        e.preventDefault();
        const res=await fetch("http://localhost:5000/new/createuser",{
            method : 'POST',
            headers :{
                'Content-type' : 'application/json'
            },
            body:JSON.stringify({name:user.name,email:user.email,password:user.password,location:user.location,phone:user.phone})
        })
        const json=await res.json();
        console.log(json);
        if(json.success!='yes'){
            alert('Recheck and Correct your Credentials');
        }else{
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
                                                <h4 class="mt-1 mb-5 pb-1">Signup - Join with us</h4>
                                        </div>

                                        <form onSubmit={handler}>
                                           <div className="mb-3">
                                                <label htmlFor="Name" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="Name" name="name" value={user.name} onChange={changehandler}/>
                                           </div>
                                           <div className="mb-3">
                                                <label htmlFor="Email" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="Email" name="email" value={user.email} onChange={changehandler}/>
                                           </div>
                                           <div className="mb-3">
                                                 <label htmlFor="Phone" className="form-label">Phone</label>
                                                 <input type="number" className="form-control" id="Phone" name="phone" value={user.phone} onChange={changehandler}/>
                                            </div>
                                           <div className="mb-3">
                                                 <label htmlFor="Password" className="form-label">Password</label>
                                                 <input type="password" className="form-control" id= "Password" name="password" value={user.password} onChange={changehandler}/>
                                           </div>
                                            <div className="mb-3">
                                                 <label htmlFor="Location" className="form-label">Location</label>
                                                 <input type="text" className="form-control" id="Location" name="location" value={user.location} onChange={changehandler}/>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-center pb-4">
                                                <button type="submit" className="btn btn-primary m-3">Submit</button>
                                                <Link to='/login' className="btn btn-danger m-3">Already a User ?</Link>
                                            </div>
                                            
                                        </form>

                                    </div>
                                </div>
                                <div class="col-lg-6 d-flex align-items-center gradient-custom-2" style={{backgroundColor: "green"}}>
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
