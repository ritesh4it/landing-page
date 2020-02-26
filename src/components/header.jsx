import React from 'react';
import '../App.css';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var headerDetails = [
    {
        "id": 1,
        "title": "Party Time!",
        "image": "images/Untitled-1.png",
        "text": "Buy any 2 burger  ",
        "text2": "and  get 1.5L pepsi free ",
        "button": "order now",
        "img": "images/Group1389.png",
    },
    {
        "id": 2,
        "title": "Party Time!",
        "image": "images/Untitled-1.png",
        "text": "Buy any 2 burger  ",
        "text2": "and  get 1.5L pepsi free ",
        "button": "order now",
        "img": "images/Group1389.png",
    },
    {
        "id": 3,
        "title": "Party Time!",
        "image": "images/Untitled-1.png",
        "text": "Buy any 2 burger  ",
        "text2": "and  get 1.5L pepsi free ",
        "button": "order now",
        "img": "images/Group1389.png",
    }
]

class Header extends React.Component {
    render() {
        return (
            <div className="topHeader">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        {/*  Brand and toggle get grouped for better mobile display  */}
                        <div className="navbar-header logo">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <img src="images/Group1312.png" alt="" className="navbar-brand img-responsive box" />
                        </div>

                        {/*  Collect the nav links, forms, and other content for toggling  */}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                            <ul className="nav navbar-nav navbar-right shadow">
                                <li>Home</li>
                                <li>Menu</li>
                                <li>Gallery</li>
                                <li>Testimonial</li>
                                <li>Contact Us</li>

                                <li className="bg-color">
                                    <img src="images/Group1300.png" alt="..." className="img-responsive" />
                                </li>
                                <li className="bg-color">
                                    <img src="images/Group1399.png" alt="..." className="img-responsive" />
                                </li>
                                <li className="bg-color">
                                    <img src="images/Group1398.png" alt="..." className="img-responsive" />
                                </li>
                            </ul>
                        </div>
                        {/*  /.navbar-collapse  */}
                    </div>
                    {/*  /.container-fluid  */}
                </nav>
                {/*  sliderHeader  */}
                <div className="sliderHeader">
                    <div className="container-fluid">
                        <OwlCarousel
                            items={1}
                            className="owl-carousel owl-theme"
                            autoplay={true}
                            loop={false}
                            dots={false}
                            nav={true}
                            navText={[
                                "<img src=images/left.png>",
                                "<img src=images/right.png>"
                            ]}
                        >
                            {headerDetails && headerDetails.length > 0
                                ? headerDetails.map((data, index) => (
                                    <div
                                        key={index}
                                        className="item active">
                                        <img src={data.image} alt="" className="img-responsive" />
                                        <div className="carousel-caption">
                                            <h1>{data.title}</h1>
                                            <img src={data.img} alt="" className="img-responsive" />
                                            <h5 className="party-time"> {data.text} <br />{data.text2}</h5>
                                            <button className="order-now">{data.button}</button>
                                        </div>
                                    </div>
                                ))
                                : null}
                        </OwlCarousel>
                    </div>
                </div>
                {/*  /.sliderHeader  */}
            </div>
        );
    }
}

export default Header;