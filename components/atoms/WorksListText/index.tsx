import React, {FC} from "react";
import WorksListTextProps from "./index.types"
import Typography from "@atoms/Typography";
import ViewWorkButton from "../../molecules/ViewWorkButton";

const WorksListText: FC<WorksListTextProps> = ({title, description, descriptionBold, category}) => {
    return <>
        <div className="hidden tablet:flex flex-col justify-center w-[40vw]" id="Tablet-Laptop-View">
            <Typography variant="h5" color="neutral-1" bold={true}>{title}</Typography>
            <Typography variant="h3" color="neutral-2" bold={true}>{description}</Typography>
            <Typography variant="h3" color="neutral-1" bold={true}>{descriptionBold}</Typography>
            <Typography variant="body1" color="neutral-1" bold={false}>{category}</Typography>
            <ViewWorkButton title={title} skills={["1", "2"]} descriptionLong1={"desc1"}
                            descriptionLongBold1={"desc2"} urlAllImages={["#"]}/>
        </div>

        <div className="flex tablet:hidden flex-col justify-center" id="Mobile-View">
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
            <ViewWorkButton title={title} skills={["1", "2"]} descriptionLong1={"desc1"}
                            descriptionLongBold1={"desc2"} urlAllImages={["#"]}/>
        </div>
    </>
}

export default WorksListText