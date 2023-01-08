import React, { useState } from 'react'
import './styles/sliderImg.css'

const SliderImg = ({listImgs}) => {

  const [indexImg, setIndexImg] = useState(0)

  const styleContainer = {
    transform: `translateX(calc(100% * -${indexImg}/3))`
  }

  const handleBack = () => {
    if (indexImg - 1 < 0) {
        setIndexImg(2)
    } else {
        setIndexImg(indexImg - 1)
    }
  }

  const handleNext = () => {
    if (indexImg + 1 > 2) {
        setIndexImg(0)
    } else {
        setIndexImg(indexImg + 1)
    }
  }

  return (
    <div className='slider'>
        <button onClick={handleBack} className='slider_back'>&#60;</button>
        <div style={styleContainer} className='slider-container'>
            {
                listImgs?.map(url => (
                    <div className='slider_img-container' key={url}>
                        <img className='slider_img' src={url} alt="" />
                    </div>
                ))
            }
        </div>
        <button onClick={handleNext} className='slider_next'>&#62;</button>
        <ul className='slider_ul' >
            {
                listImgs?.map((url, index) => (
                    <li 
                        className={`slider_img-container ${index == indexImg && 'slider_border'}`} 
                        onClick={() => setIndexImg(index)}
                        key={url}
                        >
                        <img className='slider_img' src={url} alt="" />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SliderImg