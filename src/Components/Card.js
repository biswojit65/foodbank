import {useState,useContext,useEffect,useRef} from 'react'
// import { useCart,useDispatchCart } from './ContextReducer';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
const nums=[1,2,3,4,5];
export default function Login(props){
    const [quantity,setquantity]=useState(1);
    const [size,setsize]=useState("");
    const options=props.options;
    const foodItem=props.fooddata;
    const optionname=Object.keys(options);
    const myState=useSelector((state)=>state.reducer)
    const dispatch=useDispatch();
    const priceRef=useRef();
    useEffect(() => {
        setsize(priceRef.current.value)
    }, [])
    const handleAddToCart=async()=>{
        let food=[]
        for (const item of myState) {
            if (item.id === foodItem._id) {
                food = item;
                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: quantity })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: quantity, size: size,img:foodItem.img})
                console.log("Size different so simply ADD one more to the list")
                return
            }
            return
        }
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: quantity, size: size ,img:foodItem.img})
        // console.log(myState)
        // console.log("Yes")
    }
    const handleQty = (e) => {
        setquantity(e.target.value);
    }
    const handleOptions = (e) => {
        setsize(e.target.value);
    }
    let finalPrice=quantity*parseInt(options[size]);
    return(
        <div className="card">
           <img className="card-img-top w-100" src={props.fooddata.img} alt="Card image" style={{ height: "200px", objectFit: "fill" }} />
           <div className="card-body bg-secondary">
              <h4 className="card-title">{props.fooddata.name}</h4>
              <div className="row justify-content-around">
                    <div className="col-5">
                        <select className="form-select bg-success" onChange={handleQty}>
                            {
                                nums.map((e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-6">
                        <select className="form-select bg-success" ref={priceRef} onChange={handleOptions}>  
                          {optionname.map((value,index)=>{
                            return <option key={index} value={value}>{value}</option>
                          })}
                        </select>
                    </div>
              </div>
                <div className=' mt-2  fs-5 rounded text-white' >
                    Total Price ₹{finalPrice}/-
                </div>
           </div>
           
           <div className=' m-2'>
           <Link className="btn input-block-level form-control  rounded bg-dark text-white" style={{objectFit: "fill"}} onClick={handleAddToCart}>Add To Cart</Link>
           </div>
        </div>
    )
}