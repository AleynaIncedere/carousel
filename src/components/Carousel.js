import { useState } from 'react';
import styles from './Carousel.module.css'; 

const images = [
  '/images/img-1.jpg',
  '/images/img-2.jpg',
  '/images/img-3.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    
    <div className={styles.carousel}>
      <button className={`${styles.button} ${styles.prevBtn}`} onClick={handlePrevious}>Prev</button>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={images[currentIndex]} alt="Carousel image" />
      </div>
      <button className={`${styles.button} ${styles.nextBtn}`} onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
