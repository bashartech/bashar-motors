import Link from "next/link";

import cssStyle from "./section-3.module.css"
export default function Section3() {
  return (
    <div className={cssStyle.main}>
        <div className={`${cssStyle.box} w-full lg:w-3/4 `}>
      <div className={cssStyle.heading}>Our Services</div>
      <div className={cssStyle.para}>Experience Travel Like Never Before Indulge in Ultimate Comfort and Style. Our fleet of meticulously curated luxury vehicles ensures that every ride is not just a journey but a lavish experience that reflects your refined taste.</div>
      <div className= {cssStyle.btn} >
      <Link href={"/services"}>
        <button>Buy A Car</button>
            </Link>
            <Link href={"#footer"}>
        <button>Contact Us</button>
            </Link>
      </div>
        </div>
    </div>
  )
}
