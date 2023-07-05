import react from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PrintIcon from '@mui/icons-material/Print';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsApp from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
export default function Login(){
    return(
        <div>
            <footer className='bg-dark text-white py-5 mt-5'>
                <div className='container'>
                    <div className='row  justify-content-around '>
                        <div className='col-md-3 px-5 py-3 bg-success rounded m-2'>
                            <div className='row'>
                                <h5 className='text-uppercase my-4 text-warning text-center font-weight-bold'>OUR VISION</h5>
                            </div>
                            <div className='row'>
                                <p className="text-justify">The Lorem Ipsum Generator quickly delivers default text to complement your amazing design. The default settings are optimized to be used right after installation, but you can easily customize a few settings to get the perfect text for your taste. Each sentence is randomly generated to simulate real text.</p>
                            </div>
                        </div>
                        <div className='col-md-3 px-5 py-3 bg-success rounded m-2'>
                            <div className='row'>
                                <h5 className='text-uppercase my-4 text-warning text-center font-weight-bold'>OUR VISION</h5>
                            </div>
                            <div className='row'>
                                <p className="text-justify">The Lorem Ipsum Generator quickly delivers default text to complement your amazing design. The default settings are optimized to be used right after installation, but you can easily customize a few settings to get the perfect text for your taste. Each sentence is randomly generated to simulate real text.</p>
                            </div>
                        </div>
                        <div className='col-md-3 px-5 py-3 bg-success rounded m-2'>
                            <div className='row'>
                                <h5 className='text-uppercase my-4 text-warning text-center font-weight-bold'>CONTACT US</h5>
                            </div>
                            <div className='row'>
                                <p className='my-3 text-white text-wrap'><HomeIcon sx={{ mr: 2 }} />Kharagpur ,  West Bengal</p>
                                <p className='my-3 text-white text-wrap'><MailIcon sx={{ mr: 2 }} />theexample@gmail.com</p>
                                <pre className='my-3 text-white text-wrap'><PhoneIcon sx={{ mr: 2 }} />+91 8753462690</pre>
                                <pre className='my-3 text-white text-wrap'><PrintIcon sx={{ mr: 2 }} />+01 345 674 90</pre>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-5" />
                <div className='container p-2'>
                    <div className='row justify-content-around'>
                        <div className='col-sm-5 text-center'><small>Copyright @2023 All Rights Reserved by :<strong className='text-warning ml-1'>The FoodBank</strong> </small></div>
                        <div className='col-sm-6'>
                            <div className='text-end'>
                                <Link href="http://www.google.com" className='m-3' >
                                    <GoogleIcon />
                                </Link>
                                <Link href="http://www.google.com" className='m-3'>
                                    <FacebookIcon />
                                </Link>
                                <Link href="http://www.google.com" className='m-3'>
                                    <WhatsApp />
                                </Link>
                                <Link href="http://www.google.com" className='m-3'>
                                    <TwitterIcon />
                                </Link>
                                <Link href="http://www.google.com" className='m-3' >
                                    <InstagramIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}