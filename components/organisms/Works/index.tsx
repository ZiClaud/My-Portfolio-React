import React, {FC} from "react";
import WorksProps from "./index.types"
import SectionTitle from "@molecules/SectionTitle";
import WorksList from "@molecules/WorksList";

const Works: FC<WorksProps> = ({}) => {
    return <>
        <SectionTitle text1="My best" text2="Works"/>
        <WorksList />
    </>
}

export default Works