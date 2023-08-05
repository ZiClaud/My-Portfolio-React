'use client'

import React, {FC, useEffect, useState} from "react";
import WorkPageProps from "./index.types"
import Typography from "@atoms/Typography";
import Padding from "@atoms/Padding";
import {useLocation, useParams} from "react-router-dom";
import Layout from "@atoms/Layout";
import WorkData from "@/basics/WorkData";
import {AllWorks, WorkNotFound} from "@/database/fakeDB";
import CardList from "@molecules/CardList";
import WorksCarousel from "@molecules/WorksCarousel";
import LongDescription from "@molecules/LongDescription";
import ClickLinkButton from "@molecules/ClickLinkButton";

const WorkPage: FC<WorkPageProps> = ({}) => {    // Scroll to top when the page is loaded
    const {pathname} = useLocation();

    const {linkName} = useParams();
    const [workData, setWorkData] = useState<WorkData>(WorkNotFound);

    useEffect(() => {
        window.scrollTo(0, 0);

        const currentWork: WorkData | undefined = AllWorks.find((work: WorkData) => work.linkName === linkName);
        if (currentWork !== undefined) {
            setWorkData(currentWork);
        } else {
            console.error("Work not found");
        }
    }, [linkName, pathname]);

    return <>
        <Layout>
            <div className="flex flex-col justify-center items-center">
                <Typography variant="h2" color="neutral-1" bold={true} className="pt-5">{workData.title}</Typography>
                <Typography variant="h4" color="neutral-2" className="pb-5">{workData.category}</Typography>
                <WorksCarousel images={workData.urlAllImages}/>
                <CardList textList={workData.skills}/>
            </div>
            <LongDescription variant="h3" desc1={workData.descriptionLong1} desc1bold={workData.descriptionLongBold1}
                             desc2={workData.descriptionLong2} desc2bold={workData.descriptionLongBold2}/>
            <ClickLinkButton workData={workData} />
            <Padding/>
        </Layout>
    </>
}

export default WorkPage