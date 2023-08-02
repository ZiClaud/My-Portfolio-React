'use client'

import React, {FC, useEffect, useState} from "react";
import WorkPageProps from "./index.types"
import Typography from "@atoms/Typography";
import Image from "next/image";
import Padding from "@atoms/Padding";
import {useLocation, useParams} from "react-router-dom";
import Layout from "@atoms/Layout";
import WorkData from "@/basics/WorkData";
import {AllWorks, WorkNotFound} from "@/database/fakeDB";

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
        <Padding/>
        <Layout>
            <div className="flex flex-col justify-center items-center">
                <Typography variant="h2" color="neutral-1" bold={true}>{workData.title}</Typography>
                <Typography variant="h4" color="neutral-2">{workData.category}</Typography>
                <Typography variant="h3" color="neutral-2">{workData.skills.join(", ")}</Typography>
            </div>
        </Layout>
        <Padding/>
        {/*
            <Layout>
                <Typography variant="label" color="neutral-2">{workData.id}</Typography>
            </Layout>
        */}
        <div className="flex flex-col justify-center items-center">
            <Image src={workData.urlImage} alt={workData.title} width={1300} height={1300}
                   className="rounded-3xl border-[3px] border-neutral-2-color"/>
        </div>
        <Padding/>
        <Layout>
            <Typography variant="h3" color="neutral-2" bold={true}>{workData.descriptionLong1}</Typography>
            <Typography variant="h3" color="neutral-1" bold={true}>{workData.descriptionLongBold1}</Typography>
            <Typography variant="h3" color="neutral-2" bold={true}>{workData.descriptionLong2}</Typography>
            <Typography variant="h3" color="neutral-1" bold={true}>{workData.descriptionLongBold2}</Typography>
            <Padding/>
            <Typography variant="h4" color="neutral-2">{workData.link}</Typography>
            <Padding/>
        </Layout>
    </>
}

export default WorkPage