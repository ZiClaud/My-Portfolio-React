import React, {FC} from "react";
import WorksPageProps from "./index.types"
import Typography from "@atoms/Typography";

const WorksPage: FC<WorksPageProps> = ({}) => {
    return <>
        <div className="flex flex-col bg-black-background px-5 tablet:px-14 laptop:px-28">
            <div className="flex flex-col justify-content-center items-center">
                <Typography variant="h1" color="neutral-1" bold={true}>All of my Works</Typography>
            </div>
        </div>
    </>
}

export default WorksPage