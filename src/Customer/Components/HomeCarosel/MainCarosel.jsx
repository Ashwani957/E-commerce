import AliceCarousel from "react-alice-carousel";
import { homeCarouselData } from "./MainCaroseldata";
import 'react-alice-carousel/lib/alice-carousel.css';
import "./cursor.css"

const MainCarosel=()=>{

    const item=homeCarouselData.map((item)=>
        <div className="carousel-image-wrapper">
<img className="cursor-pointer carousel-image" src={item.image} alt="" /> 
</div>
    
)

    return (
        <div className="flex justify-center  " >
 <AliceCarousel
        items={item}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
         
    />
        </div>

    )
}

export default MainCarosel;