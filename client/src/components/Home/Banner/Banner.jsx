import "./Banner.scss";
import Bannerimg from "../../../assets/Swadisht Foods Co..png"

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <img src={Bannerimg} alt="" />
        <div className="ctas">
          <div className="banner-cta v2">Shop Now</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
