import React, {FC, useEffect} from "react";
import AllWorksPageProps from "./index.types";
import Typography from "@atoms/Typography";
import {AllWorks} from "@/database/fakeDB";
import Padding from "@atoms/Padding";
import WorkData from "@/basics/WorkData";
import AllWorksImage from "@atoms/AllWorksImage";
import {useLocation} from "react-router-dom";
import Layout from "@atoms/Layout";

const AllWorksPage: FC<AllWorksPageProps> = ({}) => {
    // Scroll to top when the page is loaded
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const chunkWorks = (works: WorkData[], chunkSize: number) => {
        const chunkedArray = [];
        for (let i = 0; i < works.length; i += chunkSize) {
            chunkedArray.push(works.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    return (
        <>
            <Layout>
                <div className="flex flex-col bg-black-background">
                    <div className="flex flex-col justify-between items-center">
                        <Padding/>
                        <Typography variant="h1" color="neutral-1" bold={true}>
                            All of my Works
                        </Typography>
                        <Padding/>
                        {chunkWorks(AllWorks, 3).map((chunk, index) => (
                            <div key={index}
                                 className="flex flex-col tablet:flex-row tablet:space-x-10 justify-center items-center">
                                {chunk.map((work) => (
                                    <div key={work.title}>
                                        <Typography variant="h4" color="neutral-1" bold={true}>
                                            {work.title}
                                        </Typography>
                                        <AllWorksImage urlImage={work.urlImage} text={work.category}
                                                       linkName={work.linkName}/>
                                        <Padding/>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
        ;
};

export default AllWorksPage;
