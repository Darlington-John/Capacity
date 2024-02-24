import  { useState, useEffect } from 'react';
const Carousel = (props) => {
    const images = [props.firstSlide, props.secondSlide, props.thirdSlide, props.fourthSlide];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500); // Change image after 500ms (adjust as needed)
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Cleanup the interval when component unmounts
    };
  }, [images.length]);
    return (  
        <div className="image-carousel relative h-[540px] w-[470px] lg:w-[335px] lg:h-[370px] sm:w-[235px] sm:h-[270px] xs:w-[185px] xs:h-[220px] ease-in-out duration-300 2xs:w-[135px] 2xs:h-[170px] ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="slide"
            className={`
            ${index === currentIndex ? 'active' : ''}
            ${isTransitioning ? 'transitioning' : ''}
          `}
          />
        ))}
      </div>
    );
}
 
export default Carousel;