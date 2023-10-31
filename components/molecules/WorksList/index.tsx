import React, { FC } from "react"
import WorksListProps from "./index.types"
import WorksListText from "@atoms/WorksListText"
import WorksListImage from "@atoms/WorksListImage"
import classNames from "classnames"
import Padding from "@atoms/Padding"

const WorksList: FC<WorksListProps> = ({ workData }) => {
  return <>
    <div
      className={classNames("flex flex-col tablet:flex-row justify-between", { "tablet:flex-row-reverse": !workData.imageFirst })}>
      <WorksListImage urlImage={workData.urlImage} />
      <WorksListText workData={workData} />
    </div>
    <Padding />
  </>
}

export default WorksList