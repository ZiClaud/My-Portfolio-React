import React, {FC} from "react";
import SkillsProps from "./index.types"
import SectionTitle from "@molecules/SectionTitle";

const Skills: FC<SkillsProps> = ({}) => {
    return <>
        <SectionTitle text1="Some of my" text2="Skills"/>
    </>
}

export default Skills