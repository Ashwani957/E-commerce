import AliceCarousel from "react-alice-carousel"
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Button } from "@mui/material";
import { useState } from "react";
import mens_kurts from "../../../Data/mens_kurts"


// Import for slide Bar for kruts
const HomeSectionCarosel=()=>{
    const [activeIndex,setActiveIndex]=useState(0)
    const responsive = {
        0: { items: 1 },
        768: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);


    const syncActiveIndex=({item})=>setActiveIndex(item)

const items=mens_kurts.slice(0,10).map((item)=> <HomeSectionCard product={item}/>)

    return (
        <div className="  relative px-4 lg:px-8">
               <Button variant="contained" className="z-50" sx={{position:"absolute", top:"8rem", left:"2rem" , transform:"translateX(-50% ) rotate(90deg)"}}
            color="white" aria-label="next" onClick={slidePrev}>
                <KeyboardDoubleArrowLeftIcon sx={{transform:"rotate(-90deg)"}} />
            </Button>
            <div className="relative p-5 border">
 <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlidechanged={syncActiveIndex}
                    activeIndex={activeIndex}
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