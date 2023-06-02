import React, {useState} from 'react';

interface CarouselProps {
    images: any[];
}

const Carousel: React.FC<CarouselProps> = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const handleTouchStart = (event: any) => {
        setStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: any) => {
        setEndX(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        const distance = endX - startX;
        if (distance < 0) {
            goToNextSlide()
        } else {
            goToPreviousSlide()
        }
        setStartX(0);
        setEndX(0);
    };

    return (
        <div onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd} className="carousel relative">
            <img className="carousel-image" src={images[currentIndex]} alt="Carousel Slide"/>
            <div className={"flex w-full absolute bottom-0 justify-center"}>
                {images.map((i, index) => (
                    <div
                        className={(index === currentIndex ? " bg-red-500 w-[50px] " : " bg-[#282828] ") + " h-[3px] w-[20px] mx-2 rounded "}></div>
                ))}
            </div>

        </div>
    );
};

export default Carousel;
