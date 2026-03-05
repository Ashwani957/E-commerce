
 
import MainCarosel from "../../Components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../Components/HomeSectionCarosel/HomeSectionCarosel";
 import mens_kurts from "../../../Data/mens_kurts"
const  HomePage = ()=>{
    return (
<div>
 {/* Main Curosel */}
<MainCarosel/>

<div className="space-y-10 py-20 flex-col justify-center px-5 lg:px-10">
  <HomeSectionCarosel data={mens_kurts} sectionName={"Men's Kurta"}/>
   <HomeSectionCarosel data={mens_kurts} sectionName={"Men's Kurta"}/>
    <HomeSectionCarosel data={mens_kurts} sectionName={"Men's Kurta"}/>
     <HomeSectionCarosel data={mens_kurts} sectionName={"Men's Kurta"}/>
      <HomeSectionCarosel data={mens_kurts} sectionName={"Men's Kurta"}/>
</div>

</div>
    )
}

export default HomePage; 