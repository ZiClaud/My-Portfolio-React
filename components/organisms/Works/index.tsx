import React, { FC } from "react"
import WorksProps from "./index.types"
import SectionTitle from "@molecules/SectionTitle"
import WorksList from "@molecules/WorksList"
import { Iremi, JEIOM, Portfolio } from "@/database/fakeDB"
import BigButton from "@atoms/BigButton"

const Works: FC<WorksProps> = ({}) => {
  return <>
    <div id="works-section">
      <SectionTitle text1="My best" text2="Works" />
      <WorksList workData={Iremi} />
      <WorksList workData={JEIOM} />
      <WorksList workData={Portfolio} />
      <div className="flex flex-row justify-center items-center py-4">
        <BigButton text="VIEW ALL WORKS" link="/works" variant={"0"} />
      </div>
    </div>
  </>
}

export default Works