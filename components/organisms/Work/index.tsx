import { FC } from "react"
import WorksProps from "./index.types"
import SectionTitle from "@molecules/SectionTitle"
import WorksList from "@molecules/WorksList"
import { Iremi, JEIOM, MaterialYouNewTab, PersonalServer} from "@/database/fakeDB"

const Work: FC<WorksProps> = ({}) => {
  return <>
    <div id="works-section">
      <SectionTitle text1="Some of my" text2="Work" />
      <WorksList workData={JEIOM} />
      <WorksList workData={MaterialYouNewTab} />
      <WorksList workData={PersonalServer} />
      <WorksList workData={Iremi} />
    </div>
  </>
}

export default Work