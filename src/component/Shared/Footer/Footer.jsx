import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGlassMartiniAlt, FaChair, FaCreativeCommonsNd, FaBoxOpen } from 'react-icons/fa';



const Footer = () => {
    return (
        <Container className='bg-dark mt-5'>
            <div>
                <h2 className='text-warning text-center p-2'>KoOkiliCiouS</h2>
                <p className='text-white text-center'>Serves you a marvelous Refreshment.</p>
                <div className='text-white'>
                    {/* <h5 className='text-center text-white-50'>What we Offer</h5> */}
                    <div className='d-flex p-2'>
                        <div>
                            <h4><FaChair /></h4>
                            <h5 className='text-warning'>Catering</h5>
                            <p className='text-white-50'>An event caterer serves food at indoor and outdoor events, including corporate events.</p>
                        </div>
                        <div>
                            <h4><FaGlassMartiniAlt /></h4>
                            <h5 className='text-warning'>Private Dining</h5>
                            <p className='text-white-50'>Planning a special group dining event with friends and family or business.</p>
                        </div>
                        <div>
                            <h2><FaCreativeCommonsNd /></h2>
                            <h5 className='text-warning'>Gift Cards</h5>
                            <p className='text-white-50'>Our gift card system makes the whole journey of selling and redeeming.

                                .</p>
                        </div>
                        <div>
                            <h2><FaBoxOpen /></h2>
                            <h5 className='text-warning'>Order Online</h5>
                            <p className='text-white-50'>the process of ordering food, for delivery or pickup, from a website or other application.</p>
                        </div>


                    </div>


                </div>

            </div>

        </Container>
    );
};

export default Footer;