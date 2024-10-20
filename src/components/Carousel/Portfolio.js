
import './Carousel.css';

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from './EmblaCarousel'

// import work1 from './images/work1.png'
// import work2 from './images/work2.png'
// import work3 from './images/work3.png'
// import work4 from './images/work4.png'
// import work5 from './images/work5.png'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function Portfolio() {
  return (
    <div id="section3"className="section3">
      <div class="portfolio-heading">
      <div class="line inline-block"> </div>
      <p class="bebas inline-block" >Recent</p>
      <div class="line inline-block"> </div>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default Portfolio;


