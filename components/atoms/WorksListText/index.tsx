import React, {FC} from "react";
import WorksListTextProps from "./index.types"
import Typography from "@atoms/Typography";

const WorksListText: FC<WorksListTextProps> = ({title, description, descriptionBold, category}) => {
    return <>
        <div className="flex flex-col justify-center tablet:w-[40vw]">
            <Typography variant="h5" color="neutral-1" bold={true}>{title}</Typography>
            <Typography variant="h3" color="neutral-2" bold={false}>{description}</Typography>
            <Typography variant="h3" color="neutral-1" bold={true}>{descriptionBold}</Typography>
            <Typography variant="body1" color="neutral-1" bold={false}>{category}</Typography>
        </div>
    </>
}

export default WorksListText