import React,{useState} from 'react'
import one from '../Images/1.jpeg'
import two from '../Images/2.jpg'
import three from '../Images/3.jpg'
import Carousel from 'react-bootstrap/Carousel'
function Bootstrapcarouel() {
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height : "500px"}}
          src={one}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="text-white mb-3">
           <div className="input-group row">
              <div className="form-outline col-md-9 my-2 ">
                 <input type="search" id="form1" className="form-control" />
              </div>
              <div className='col-md-2 mt-2'>
                  <button type="button" className="btn btn-default btn-primary  btn-block responsive-width">
                    Search
                  </button>
              </div>
            </div>
        </div>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height : "500px"}}
          src={two}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className="text-white mb-3">
        <div className="input-group row">
              <div className="form-outline col-md-9 my-2 ">
                 <input type="search" id="form1" className="form-control" />
              </div>
              <div className='col-md-2 mt-2'>
                  <button type="button" className="btn btn-default btn-primary  btn-block responsive-width">
                    Search
                  </button>
              </div>
            </div>
        </div>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height : "500px"}}
          src={three}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="text-white mb-3">
        <div className="input-group row">
              <div className="form-outline col-md-9 my-2 ">
                 <input type="search" id="form1" className="form-control" />
              </div>
              <div className='col-md-2 mt-2'>
                  <button type="button" className="btn btn-default btn-primary  btn-block responsive-width">
                    Search
                  </button>
              </div>
            </div>
        </div>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );

}

export default Bootstrapcarouel
