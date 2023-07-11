import React, {FC} from "react";
import SkillSectionProps from "./index.types"
import SectionTitle from "@molecules/SectionTitle";

const SkillSection: FC<SkillSectionProps> = ({}) => {
    return <>
        <SectionTitle text1="Some of my" text2="Skills"/>
    </>
}

export default SkillSection