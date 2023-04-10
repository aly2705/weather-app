import React, { useState, useRef, useEffect } from "react";
import classes from "./Slider.module.scss";
import icons from "../../assets/icons/icons.svg";

const Slider = ({ CSSclasses, children, initialSlides }) => {
  const [slides, setSlides] = useState([]);
  const lastSlideRef = useRef();

  useEffect(() => {
    initialSlides.forEach((slide, i) => (slide.position = i));

    setSlides(initialSlides);
  }, [initialSlides]);

  const translateBackHandler = () => {
    // Stops when first card is in the initial position
    setSlides((previous) => {
      const repositioned = previous.map((slide, i) => {
        if (i === slide.position) return slide;
        return { ...slide, position: slide.position + 1 };
      });

      return repositioned;
    });
  };
  const translateNextHandler = (e) => {
    // Stops when last card is visible
    const btnDistance = e.target.getBoundingClientRect().x;
    const cardDistance = lastSlideRef.current.getBoundingClientRect().x;
    if (cardDistance < btnDistance) {
      return;
    }

    setSlides((previous) => {
      const repositioned = previous.map((slide, i) => {
        return { ...slide, position: slide.position - 1 };
      });

      return repositioned;
    });
  };
  return (
    <div className={`${classes.slider} ${CSSclasses}`}>
      <button
        type="button"
        className={`${classes.slider__btn} ${CSSclasses.buttonBack}`}
        onClick={translateBackHandler}
      >
        <svg>
          <use href={`${icons}#icon-keyboard_arrow_left`}></use>
        </svg>
      </button>
      <button
        type="button"
        className={`${classes.slider__btn} ${CSSclasses.buttonNext}`}
        onClick={translateNextHandler}
      >
        <svg>
          <use href={`${icons}#icon-keyboard_arrow_right`}></use>
        </svg>
      </button>
      <div className={`${classes.slider__slider} ${CSSclasses}`}>
        {slides &&
          slides.map((slide, i) => {
            if (i + 1 === slides.length) {
              return (
                <div
                  className={`${classes.slider__card} ${CSSclasses.card}`}
                  data-position={slide.position}
                  key={i}
                  style={{
                    transform: `translateX(${slide.position * 115}%)`,
                  }}
                  ref={lastSlideRef}
                >
                  {children}
                </div>
              );
            } else {
              return (
                <div
                  className={`${classes.slider__card} ${CSSclasses.card}`}
                  data-position={slide.position}
                  key={i}
                  style={{
                    transform: `translateX(${slide.position * 115}%)`,
                  }}
                >
                  {children}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Slider;
