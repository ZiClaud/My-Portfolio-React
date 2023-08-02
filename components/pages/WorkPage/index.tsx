'use client'

import React, {FC, useEffect} from "react";
import WorkPageProps from "./index.types"
import Typography from "@atoms/Typography";
import Image from "next/image";
import Padding from "@atoms/Padding";
import {useLocation} from "react-router-dom";
import Layout from "@atoms/Layout";

const WorkPage: FC<WorkPageProps> = ({workData}) => {    // Scroll to top when the page is loaded
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>
        <Padding/>
        <div className="flex flex-col justify-center items-center">
            <Layout>
                <Typography variant="h2" color="neutral-1" bold={true}>{workData.title}</Typography>
                <Typography variant="h4" color="neutral-2">{workData.category}</Typography>
                <Typography variant="h3" color="neutral-2">{workData.skills.join(", ")}</Typography>
            </Layout>
        </div>
        <Padding/>
        <Layout>
            <Typography variant="label" color="neutral-2">{workData.id}</Typography>
        </Layout>
        <div className="flex flex-col justify-center items-center">
            <Image src={workData.urlImage} alt={workData.title} width={1300} height={1300}/>
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