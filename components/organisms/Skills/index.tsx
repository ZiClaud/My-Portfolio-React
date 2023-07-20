import React, {FC} from "react";
import SkillsProps from "./index.types"
import SectionTitle from "@molecules/SectionTitle";
import SkillsList from "@molecules/SkillsList";

const Skills: FC<SkillsProps> = ({}) => {
    return <>
        <div id="skills-section">
            <SectionTitle text1="Some of my" text2="Skills"/>
            <SkillsList/>
        </div>
    </>
}

export default Skills