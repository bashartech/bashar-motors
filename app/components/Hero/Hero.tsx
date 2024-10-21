import cssStyle from "./hero.module.css"
import Link from "next/link";

export default function Hero() {
  return (
    <div className={`${cssStyle.hero}`}>
        <div className={cssStyle.main}>
            <div className={`${cssStyle.box} ml-4 lg:ml-20`}>
      <div className={cssStyle.heading}>Your Dream Car is Just a Drive Away</div>
      <div className={cssStyle.subheading}>Upgrade Your Journey with the Best Car Selection</div>
      <Link href={"/services"}>
      <div className={cssStyle.btn2}>
      
        <button> Buy A Car</button>
        </div>
            </Link>
            </div>
        </div>
    </div>
  )
}
