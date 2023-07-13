import React, {FC} from "react";
import WorksListTextProps from "./index.types"
import Typography from "@atoms/Typography";

const WorksListText: FC<WorksListTextProps> = ({title, description, descriptionBold, category}) => {
    return <>
        <div className="hidden tablet:flex flex-col justify-center tablet:w-[40vw]">
            <Typography variant="h5" color="neutral-1" bold={true}>{title}</Typography>
            <Typography variant="h3" color="neutral-2" bold={true}>{description}</Typography>
            <Typography variant="h3" color="neutral-1" bold={true}>{descriptionBold}</Typography>
            <Typography variant="body1" color="neutral-1" bold={false}>{category}</Typography>
        </div>
        <div className="flex tablet:hidden flex-col justify-center tablet:w-[40vw]">
            <div className="flex justify-between">
                <div className="w-[25vw]">
                    <Typography variant="h5" color="neutral-1" bold={true} className="text-end">
                        &zwnj;
                    </Typography>
                </div>
                <Typography variant="h5" color="neutral-1" bold={true} className="text-center">
                    {title}
                </Typography>
                <div className="w-[25vw]">
                    <Typography variant="body1" color="neutral-1" bold={false} className="text-end">
                        {category}
                    </Typography>
                </div>
            </div>
            <Typography variant="h3" color="neutral-2" bold={true}>{description}</Typography>
            <Typography variant="h3" color="neutral-1" bold={true}>{descriptionBold}</Typography>
        </div>
    </>
}

export default WorksListText