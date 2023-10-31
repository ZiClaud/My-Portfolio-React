import React, { FC } from "react"
import AboutProps from "./index.types"
import AboutText from "@molecules/AboutText"
import AboutImages from "@molecules/AboutImages"

const About: FC<AboutProps> = ({}) => {
  return <>
    <div className="flex flex-row justify-around items-center" id="about-section">
      <AboutText />
      <AboutImages />
    </div>
  </>
}

export default About