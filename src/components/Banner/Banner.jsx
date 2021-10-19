import React from "react";
import { Carousel} from "react-bootstrap";
import banner1 from "../../images/banner/resize/banner-1.jpg";
import banner2 from "../../images/banner/resize/banner-3.jpg";
import banner3 from "../../images/banner/resize/banner-4.jpg";
import './Banner.css';


const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='bannerHeader text-capitalize'>We have Fantastic Doctors and Dentist</h3>
            <p className='bannerPara'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className='bannerHeader text-capitalize'>We always provide best service</h3>
            <p className='bannerPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className='bannerHeader text-capitalize'>High Quality Medicines at Lowest Rates</h3>
            <p className='bannerPara'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
