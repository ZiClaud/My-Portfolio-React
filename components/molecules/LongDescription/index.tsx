import React, { FC } from "react"
import LongDescriptionProps from "./index.types"
import Typography from "@atoms/Typography"

const LongDescription: FC<LongDescriptionProps> = ({ variant, desc1, desc1bold, desc2, desc2bold }) => {
  return <>
    <Typography variant={variant} color={"neutral-2"} bold={true}>
      {desc1}
      <strong className="text-neutral-1-color">
        {desc1bold}
      </strong>
      {desc2}
      <strong className="text-neutral-1-color">
        {desc2bold}
      </strong>
    </Typography>
  </>
}

export default LongDescription