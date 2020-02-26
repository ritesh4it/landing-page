import React from 'react';
import '../App.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var testimonialDetail = [
    {
        "id": 1,
        "image": "images/client.png",
        "icon": "images/Group1346.png",
        "statement": "Cashify.in is an e-commerce platform for reselling used electronic gadgets. Cashify, formerly ReGlobe, is a registered trademark of Manak Waste Management Pvt Ltd. Cashify believes in offering a complete solution wherein customers can sell old or used gadgets hassle-free.",
        "title": "Mandeep Manocha ",
        "text": "CEO, Cashify"
    },
    {
        "id": 2,
        "image": "images/client.png",
        "icon": "images/Group1346.png",
        "statement": "Max Life Insurance Company Limited is a life insurance company in India. The company is a subsidiary of the publicly listed Max Financial Services Limited and is the largest non-bank private-sector life insurer in India.",
        "title": "Suhail Ghai ",
        "text": "IT Head, Max Life Insurance"
    },
    {
        "id": 3,
        "image": "images/client.png",
        "icon": "images/Group1346.png",
        "statement": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "title": "Ritesh Kumar ",
        "text": "CTO, ABC Company"
    }
]

class Testimonial extends React.Component {
    render() {
        return (
            < div className="testimonial" >
                <div className="container">
                    <h3>Client Testimonial</h3>
                    <img src="images/line.PNG" className="img" alt="" />
                    <p>Try our most delicious food and it usually take minutes to deliver </p>


                    <OwlCarousel
                        items={1}
                        className="owl-carousel owl-theme"
                        autoplay={true}
                        loop={true}
                        navigation="true"
                    >
                        {testimonialDetail && testimonialDetail.length > 0
                            ? testimonialDetail.map((data, index) => (
                                <div
                                    key={index}
                                    className="item active">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <figure className="clearfix">
                                                <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                                    <img className="img-responsive media-object" src={data.image} alt="" />
                                                </div>
                                                <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 padd20">
                                                    <div className="caption text-left">
                                                        <img className="crouser-img" src={data.icon} alt="" />
                                                        <h6 className="text-brand lead no-margin">{data.statement} </h6>

                                                        <blockquote className="no-margin no-border">
                                                            <p className="nameTag">{data.title}<small className="arrow"></small></p>
                                                            <h6>{data.text}</h6>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                            ))
                            : null}
                    </OwlCarousel>
                </div>
            </div >

        );
    }
}

export default Testimonial;