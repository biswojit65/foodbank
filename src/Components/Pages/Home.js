import react, { useState } from 'react'
import Navbar from '../Navbar.js'
import one from '../../Images/1.jpeg'
import two from '../../Images/2.jpg'
import three from '../../Images/3.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Middle from '../Middle.js'
import Footer from '../Footer.js'
export default function Home() {
    const [search, setSearch] = useState('')
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div><Navbar /></div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

                <div className="carousel-inner " id='carousel'>
                    <div className=" carousel-caption " >
                        <div className=" d-flex justify-content-center m-5 z-index-2">  {/* justify-content-center, copy this <form> from navbar for search box */}
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                        </div>
                    </div>
                    <div className="carousel-item active" >
                        <img src={one} className="d-block w-100  " style={{ filter: "brightness(30%)", height: "500px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={two} className="d-block w-100 " style={{ filter: "brightness(30%)", height: "500px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={three} className="d-block w-100 " style={{ filter: "brightness(30%)", height: "500px" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" onChange={handleSelect}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" onChange={handleSelect}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div><Middle search={search}/></div>
            <div><Footer /></div>
        </div >
    )
}