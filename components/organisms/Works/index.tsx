import { FC } from "react"
import WorksProps from "./index.types"
import SectionTitle from "@molecules/SectionTitle"
import BigButton from "@atoms/BigButton"
import WorksCarousel from "@/components/molecules/WorksCarousel"

const Works: FC<WorksProps> = ({}) => {

  return <>
    <div id="works-carousel-section">
      <SectionTitle text1="All of my" text2="Work" />

      <div className="flex flex-row justify-center items-center py-4">
        <WorksCarousel />
      </div>

      <div className="flex flex-row justify-center items-center py-4">
        <BigButton text="VIEW ALL OF MY WORK" link="/works" variant={"0"} />
      </div>
    </div>
  </>
}

export default Works