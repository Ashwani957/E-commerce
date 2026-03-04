
 
import MainCarosel from "../../Components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../Components/HomeSectionCarosel/HomeSectionCarosel";
 
const  HomePage = ()=>{
    return (
<div>
 {/* Main Curosel */}
<MainCarosel/>

<div className="space-y-10 py-20 flex-col justify-center px-5 lg:px-10">
  <HomeSectionCarosel/>
</div>

</div>
    )
}

export default HomePage; 