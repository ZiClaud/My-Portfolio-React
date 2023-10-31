import React, { FC } from "react"
import WorksListTextProps from "./index.types"
import Typography from "@atoms/Typography"
import ViewWorkButton from "../../molecules/ViewWorkButton"
import LongDescription from "@molecules/LongDescription"

const WorksListText: FC<WorksListTextProps> = ({ workData }) => {
  return <>
    <div className="hidden tablet:flex flex-col justify-center w-[40vw]" id="Tablet-Laptop-View">
      <Typography variant="h5" color="neutral-1" bold={true}>{workData.title}</Typography>
      <LongDescription variant="h3" desc1={workData.description} desc1bold={workData.descriptionBold} />
      <Typography variant="body1" color="neutral-1" bold={false}>{workData.category}</Typography>
      <ViewWorkButton workData={workData} />
    </div>

    <div className="flex tablet:hidden flex-col justify-center" id="Mobile-View">
      <div className="flex justify-between">
        <div className="w-[25vw]">
          <Typography variant="h5" color="neutral-1" bold={true} className="text-end">
            &zwnj;
          </Typography>
        </div>
        <Typography variant="h5" color="neutral-1" bold={true} className="text-center">
          {workData.title}
        </Typography>
        <div className="w-[25vw]">
          <Typography variant="body1" color="neutral-1" bold={false} className="text-end">
            {workData.category}
          </Typography>
        </div>
      </div>
      <Typography variant="h3" color="neutral-2" bold={true}>{workData.description}</Typography>
      <Typography variant="h3" color="neutral-1" bold={true}>{workData.descriptionBold}</Typography>
      <ViewWorkButton workData={workData} />
    </div>
  </>
}

export default WorksListText