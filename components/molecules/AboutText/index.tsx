import React, { FC } from "react"
import AboutTextProps from "./index.types"
import Typography from "@atoms/Typography"
import LongDescription from "@molecules/LongDescription"

const AboutText: FC<AboutTextProps> = ({}) => {
  return <>
    <div className="laptop:w-[40vw]">
      <Typography variant="h4" color="neutral-1" bold={true} className="flex justify-center tablet:justify-start">
        A BIT ABOUT ME
      </Typography>

      <div>
        <LongDescription
          variant="h3"
          descriptions={[
            "I’m a software developer passionate about creating ",
            "visually elegant, intuitive digital experiences. ",
            "Beyond coding, I enjoy ",
            "music, writing, drawing, board games, photography, and psychology ",
            "to design user-friendly applications.",
          ]}
        />
      </div>
    </div>
  </>
}

export default AboutText