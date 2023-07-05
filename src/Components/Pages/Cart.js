import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector,useDispatch } from 'react-redux';

const Cart = () => {
    const myState=useSelector((state)=>state.reducer)
const dispatch=useDispatch();
const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    console.log(userEmail);
    let response = await fetch("http://localhost:5000/new/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: myState,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  if(myState.length===0){
    return(
        <div>
        <div className='m-auto text-center fs-3'>The Cart is Empty!</div>
       </div>
    )
  }
  let totalPrice = myState.reduce((total, food) => total + food.price, 0)
  return (
      <div>
          {console.log(myState)}
          <div className='container m-auto mt-5 table-responsive' >
              <table className='table '>
                  <thead className=' text-success fs-4'>
                      <tr>
                          <th scope='col' >#</th>
                          <th scope='col' >Name</th>
                          <th scope='col' >Quantity</th>
                          <th scope='col' >Option</th>
                          <th scope='col' >Amount</th>
                          <th scope='col' ></th>
                      </tr>
                  </thead>
                  <tbody className='text-secondary'>
                      {myState.map((food, index) => (
                          <tr>
                              <th scope='row' >{index + 1}</th>
                              <td >{food.name}</td>
                              <td>{food.qty}</td>
                              <td>{food.size}</td>
                              <td>{food.price}</td>
                              <td ><button type="button" className="btn p-0 text-danger" onClick={()=>{dispatch({type:"REMOVE",index:{index}})}}><DeleteIcon /></button> </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
              <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
              <div>
                  <button className='btn bg-success mt-5 ' onClick={handleCheckOut}> Check Out </button>
              </div>
          </div>
      </div>
  )
}

export default Cart