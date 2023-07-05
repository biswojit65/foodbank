import react, { useState, useEffect } from 'react'
import Card from "./Card.js"
export default function Login(props) {
  const [fooditem, setfooditem] = useState([]);
  const [foodcatagory, setfoodcatagory] = useState([]);
  const loaded = async () => {
    let res = await fetch("http://localhost:5000/new/fooditems", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    res = await res.json();
    setfooditem(res[0])
    setfoodcatagory(res[1])
  }
  useEffect(() => {
    loaded()
  }, [])
  const search=props.search
  return (
    // <div className='container-fluid'>
    //     <div className='container m-auto p-auto  rounded'>
    //        <div className='row rounded bg-primary text-center p-2 my-2'>
    //        <p class="h4 text-center text-decoration-underline text-white">Veg</p>
    //        </div>
    //        <div className='row justify-content-around'>
    //        <div className='col-md-3  p-3'><Card/></div>
    //          <div className='col-md-3  p-3'><Card/></div>
    //          <div className='col-md-3  p-3'><Card/></div>
    //          <div className='col-md-3  p-3'><Card/></div>
    //        </div>
    //        <div className='row rounded bg-primary text-center p-2 my-2'>
    //        <p class="h4 text-center text-decoration-underline text-white">Non-Veg</p>
    //        </div>
    //        <div className='row'>
    //          <div className='col-md-3  p-3'><Card/></div>
    //          <div className='col-md-3  p-3'><Card/></div>
    //          <div className='col-md-3  p-3'><Card/></div>
    //          <div className='col-md-3  p-3'><Card/></div>
    //          <div className='col-md-3  p-3'><Card/></div>
    //          <div className='col-md-3  p-3'><Card/></div>
    //        </div>
    //        <div className='row rounded bg-primary text-center p-2 my-2'>
    //        <p class="h4 text-center text-decoration-underline text-white">Cold-Drinks</p>
    //        </div>
    //        <div className='row'>
    //          <div className='col-md-3  p-3'><Card/></div>
    //          <div className='col-md-3  p-3'><Card/></div>
    //          <div className='col-md-3  p-3'><Card/></div>
    //        </div>
    //     </div>
    // </div><div className='container'>
    <div className='container'>{foodcatagory != [] ?
      foodcatagory.map((value, index) => {
        return (
          <div className="row" key={index}>
            <div className='row rounded  text-center p-2 my-2' >
              <p className="h4 text-center text-decoration-underline bg-danger text-white p-3 mx-1 rounded">{value.CategoryName}</p>
              <div className='row'>
                {fooditem != [] ?
                  fooditem.filter((item) => { return (value.CategoryName === item.CategoryName) && ((item.name.toLowerCase().includes(search.toLowerCase()))) }).map((item, i) => {
                    return (
                      <div className='col-md-3  p-3' key={i}><Card fooddata={item} options={item.options[0]}/></div>
                    )
                  }) : ""}
              </div>
            </div>
          </div>)
      }) : ""}
    </div >
  )
}