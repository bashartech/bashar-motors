import cssStyle from "./section-1.module.css";
export default function Section1() {
  return (
    <div className={`${cssStyle.main} `} id="about">
      <div className={cssStyle.boxText}>
        <div className={cssStyle.about}>
          <div className={cssStyle.text}>
            <div className={cssStyle.heading}>
              Discover the Excellence of Bashar Motors
            </div>
            <div className={cssStyle.para}>
              This is where we welcome you to the world of high-performance
              vehicles. At Bashar Motors we take pride in offering top tier cars
              and a customer experience thats unmatched. We are driven by
              passion excellence and integrity. Let us help you find your
              perfect ride.
            </div>
        </div>
        </div>
        <div className={cssStyle.boxImg}>
          <img
            src="https://static.wixstatic.com/media/c837a6_6c7efcfc15b74d1b8310c3b25bed7ace~mv2.jpg/v1/fill/w_948,h_686,fp_0.53_0.57,q_85,usm_0.66_1.00_0.01,enc_auto/einat_meiri_Black_limousine_parking_in_the_road_city_evening_si_d1a21a69-8814-4442-8ff9-b1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
