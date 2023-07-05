import react, { useState } from 'react'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from './Pages/Cart.js';
import Modal from '../Modal.js';
import { useSelector,useDispatch } from 'react-redux';
// import Badge from "@material-ui/core/Badge";
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
    const myState=useSelector((state)=>state.reducer)
    const dispatch=useDispatch();
    let navigate = useNavigate();
    const [cartView, setCartView] = useState(false)
    const handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate("/login")
    }
    const loadCart = () => {
        setCartView(true)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
                style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3 ml-2" to="/">FoodBank</Link>
                    <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder" >My Orders</Link>  {/* index.css - nav-link color white */}
                                </li> : ""}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <form className="d-flex">
                                <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
                            </form> :
                            <div>
                                <button className="btn bg-white text-success m-2" onClick={loadCart}>
                                    <Badge color="secondary" badgeContent={myState.length} >
                                        <AddShoppingCartIcon />
                                    </Badge>
                                    <p className='ml-3 d-inline text-dark'>Cart</p>
                                </button>
                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                                <button onClick={handleLogout} className="btn bg-white text-success m-1" >Logout</button>
                            </div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

