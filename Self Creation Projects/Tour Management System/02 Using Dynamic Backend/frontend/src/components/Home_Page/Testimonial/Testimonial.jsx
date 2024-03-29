import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import useHttp from '../../../hooks/useHttp.jsx';
import Error from '../../UI/Error/Error.jsx';
import "./Testimonial.css";
import TestimonialContent from './TestimonialContent.jsx';

const requestConfig = {};

export default function Testimonial() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        draggable: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        ],
    };

    const {
        data: testimonialsData,
        isLoading,
        error
    } = useHttp('http://localhost:3000/testimonials', requestConfig, []);

    return (
        <section id="homePageTestimonial">
            <div className="row heading">
                <nobr><span>Our</span> Testimonials</nobr>
            </div>
            <div className="row ts-slider" id="ts-slider">
                <div className="ts-area">
                    <div className="testimonial-slider">
                        {isLoading && (<p className="center">Fetching testimonials...</p>)}
                        {!testimonialsData && (<Error message='No testimonials found.' />)}
                        {error && (<Error message='Failed to fetch testimonials.' />)}
                        {!error && (
                            <Slider {...settings}>
                                {testimonialsData.map((testimonial) => (
                                    <TestimonialContent
                                        key={testimonial.name}
                                        imgSrc={`http://localhost:3000/${testimonial.image}`}
                                        feedBack={testimonial.feedBack}
                                        name={testimonial.name}
                                        designation={testimonial.designation}
                                    />
                                ))}
                            </Slider>
                        )}
                    </div>
                    <div className="row hr-line">
                        <hr className="hr-1" />
                        <span><hr className="hr-2" /></span>
                    </div>
                </div>
            </div>
        </section>
    );
};
