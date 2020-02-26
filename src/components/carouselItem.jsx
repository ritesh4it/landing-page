import React from 'react';
import '../App.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var carouselDetail = [
    {
        "carouselId": 1,
        "carouselImg": "images/Group1416.png",
        "carouselTitle": "30 minute delivery",
        "carouselText": "Every thing you order will deliver quicky"
    },
    {
        "carouselId": 2,
        "carouselImg": "images/Group1417.png",
        "carouselTitle": "Best quality guarantee",
        "carouselText": "We only use quality product to cook tasty food for you"
    },
    {
        "carouselId": 3,
        "carouselImg": "images/Group1418.png",
        "carouselTitle": "Variety of dishes",
        "carouselText": "In menu you will find a wide variety of dish, dessert"
    },
    {
        "carouselId": 4,
        "carouselImg": "images/Group1415.png",
        "carouselTitle": "Free shipping on first order",
        "carouselText": "Sign up for update and get free shipping"
    }
]

const options = {
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        }
    },
};

class CarouselItem extends React.Component {
    render() {
        return (
            <div className="carouselWrapper" >
                <OwlCarousel
                    items={3}
                    className="owl-carousel owl-theme"
                    autoplay={true}
                    loop={true}
                    navigation="true"
                    {...options}
                >
                    {carouselDetail && carouselDetail.length > 0
                        ? carouselDetail.map((data, index) => (
                            <div
                                key={index}
                                className="carouselBox">
                                <img src={data.carouselImg} className="img" alt="" />
                                <h3 className="title">{data.carouselTitle}</h3>
                                <hr />
                                <p className="text">{data.carouselText}</p>
                            </div>
                        ))
                        : null}
                </OwlCarousel>
            </div >
        );
    }
}

export default CarouselItem;