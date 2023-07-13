import React, {FC} from "react";
import WorksProps from "./index.types"
import SectionTitle from "@molecules/SectionTitle";
import WorksList from "@molecules/WorksList";

const Works: FC<WorksProps> = ({}) => {
    return <>
        <div>
            <SectionTitle text1="My best" text2="Works"/>
            <WorksList imageFirst={true} title="Iremi App"
                       description="I developed this app entirely on my own, and it offers users a range of breathing exercises that are specifically designed to "
                       descriptionBold="promote relaxation and mindfulness." category="Mobile App"
                       urlImage="https://i.imgur.com/eoEx6Tt.png?1"
                       descriptionLong1={""}
                       descriptionLongBold1={""} urlAllImages={[""]} skills={[""]}/>
            <WorksList imageFirst={false} title="JEIOM Website"
                       description="I was part of a team that developed this website for the JEIOM 2023 event. Our goal was to create a platform that would enable users to "
                       descriptionBold="organize their schedule for the event in a single, user-friendly interface"
                       category="Website" urlImage="https://i.imgur.com/nu9WG4d.png"
                       descriptionLong1={""} descriptionLongBold1={""} urlAllImages={[""]} skills={[""]}/>
        </div>
    </>
}

export default Works