import React, { FC } from "react"
import LongDescriptionProps from "./index.types"
import Typography from "@atoms/Typography"

const LongDescription: FC<LongDescriptionProps> = ({ variant, descriptions }) => {
  return (
    <Typography variant={variant} color={"neutral-2"} bold={true}>
      {descriptions.map((desc, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="text-neutral-1-color">
            {desc}
          </strong>
        ) : (
          <span key={index}>{desc}</span>
        ),
      )}
    </Typography>
  )
}

export default LongDescription