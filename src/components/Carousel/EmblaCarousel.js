import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import work1 from './images/work1.png'
import work2 from './images/work2.png'
import work3 from './images/work3.png'
import work4 from './images/work4.png'
import work5 from './images/work5.png'

const EmblaCarousel = (props) => {
  const {  options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
         

            <div className="embla__slide inline-block" >
                <img id= "embla-img"src={work1} />
                <div class="overlay">
                <p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                rhoncus quam.</p>
                </div>
            </div>
            <div className="embla__slide" >
                <img id= "embla-img" src={work2} />
                <div class="overlay">
                <p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                rhoncus quam.</p>
                </div>
            </div>
            <div className="embla__slide" >
                <img id= "embla-img" src={work3} />
                <div class="overlay">
                <p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                rhoncus quam.</p>
                </div>
            </div>
            <div className="embla__slide" >
                <img id= "embla-img" src={work4} />
                <div class="overlay">
                <p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                rhoncus quam.</p>
                </div>
            </div>
            <div className="embla__slide" >
                <img id= "embla-img" src={work5} />
                <div class="overlay">
                <p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                rhoncus quam.</p>
                </div>
            </div>
            
            
          
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      
      </div>
    </section>
  )
}

export default EmblaCarousel;
