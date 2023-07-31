import React, {FC} from "react";
import WorksProps from "./index.types"
import SectionTitle from "@molecules/SectionTitle";
import WorksList from "@molecules/WorksList";
import Button from "@atoms/Button";
import {IremiApp, JEIOM, Portfolio} from "@/database/fakeDB";

const Works: FC<WorksProps> = ({}) => {
    return <>
        <div id="works-section">
            <SectionTitle text1="My best" text2="Works"/>
            <WorksList workData={IremiApp}/>
            <WorksList workData={JEIOM}/>
            <WorksList workData={Portfolio}/>
            <div className="flex flex-row justify-center items-center py-4">
                <Button text="VIEW ALL WORKS" link="/works"/>
            </div>
        </div>
    </>
}

export default Works