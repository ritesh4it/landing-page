import React from 'react';
import '../App.css';

var eatWrapperDetails = [
    {
        "tab": 0,
        "image": "images/burger.png",
        "text": "Burger"
    },
    {
        "tab": 1,
        "image": "images/pizza.png",
        "text": "Pizza"
    },
    {
        "tab": 2,
        "image": "images/sandwitch.png",
        "text": "Sandwitch"
    },
    {
        "tab": 3,
        "image": "images/spagatti.png",
        "text": "Spagatti"
    },
    {
        "tab": 4,
        "image": "images/fries.png",
        "text": "Fries"
    },
    {
        "tab": 5,
        "image": "images/cupcake.png",
        "text": "Cupcake"
    },
]

class EatWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabCategory: 0
        };
    }
    changeTab = data => {
        this.setState({
            tabCategory: data
        });
    };
    render() {
        return (
            <div className="eatWrapper">
                <div className="container">
                    <h3>Want to Eat?</h3>
                    <img src="images/line.PNG" className="img" alt="" />
                    <p>Try our most delicious food and it usually take minutes to deliver </p>
                    <ul className="row eat">
                        {eatWrapperDetails && eatWrapperDetails.length > 0
                            ? eatWrapperDetails.map((data, index) => (
                                <li
                                    key={index}
                                    className={
                                        index === this.state.tabCategory ? "col-xs-6 col-sm-4 col-md-4 col-lg-2 activeFood" : "col-xs-6 col-sm-4 col-md-4 col-lg-2"
                                    }
                                    onClick={() => this.changeTab(data.tab)}>
                                    <div className="card">
                                        <div className="padd">
                                            <img className="" src={data.image} alt="" />
                                            <div className="custom-card-tag">{data.text}</div>
                                        </div>
                                    </div>
                                </li>
                            ))
                            : null}
                    </ul>
                </div>
            </div>

        );
    }
}

export default EatWrapper;