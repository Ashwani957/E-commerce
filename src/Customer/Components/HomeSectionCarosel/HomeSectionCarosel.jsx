import { useState, useMemo, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Button } from "@mui/material";
import mens_kurts from "../../../Data/mens_kurts"


// Import for slide Bar for kruts
const HomeSectionCarosel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        768: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => {
        carouselRef.current?.slidePrev();
    };
    const slideNext = () => {
        carouselRef.current?.slideNext();
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = useMemo(() => 
        data.slice(0, 10).map((item, index) => (
            <HomeSectionCard key={index} product={item} />
        )), 
    []);

    return (
        <div className="  relative px-4 lg:px-8">

        <h1 className="text-2xl font-bold text-gray-800 py-5">{sectionName}</h1>

               { activeIndex !== 0 && <Button variant="contained" className="z-50" sx={{position:"absolute", top:"8rem", left:"2rem" , transform:"translateX(-50% ) rotate(90deg)"}}
            color="white" aria-label="prev" onClick={slidePrev}>
                <KeyboardDoubleArrowLeftIcon sx={{transform:"rotate(-90deg)"}} />
            </Button>}
            <div className="relative p-5 border">
 <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                    ref={carouselRef}
                />
            </div>
         { activeIndex !== items.length-5   &&  <Button variant="contained" className="z-50" sx={{position:"absolute", top:"8rem", right:"2rem" , transform:"translateX(50% ) rotate(90deg)"}}
            color="white" aria-label="next" onClick={slideNext}>
                <KeyboardDoubleArrowLeftIcon sx={{transform:"rotate(90deg)"}} />
            </Button>}
           
        </div>
    )
}

export default HomeSectionCarosel