import React from 'react';
import './App.css';
import Header from './components/header.jsx';
import EatWrapper from './components/eatWrapper.jsx';
import CarouselItem from './components/carouselItem.jsx';
import Testimonial from './components/testimonial.jsx';

function App() {
  return (
    <React.Fragment>
      <Header />
      <EatWrapper />
      <CarouselItem />
      <Testimonial />
    </React.Fragment >
  );
}

export default App;
