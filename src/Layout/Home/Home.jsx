import Banner from "./Home components/Banner";
import Shop from "./Home components/Shop";
import TopSelling from "./Home components/Top Selling";
import Frame from "./Home components/Frame";
import Condition from "./Home components/Condition";
import Brands from "./Home components/Brands";
import BestSelling from "./Home components/Best-Selling";
import Minimum from "./Home components/Minimum";


function Home() {
    return(
      <>
        <Banner />
        <Shop />
        <TopSelling />
        <Brands/>
        <Frame />
        <BestSelling/>
        
        <Condition />
        <Minimum  />
      </>
    );
}

export default Home;