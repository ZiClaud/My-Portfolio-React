import React, {FC} from "react";
import WorksListProps from "./index.types"
import WorksListText from "@atoms/WorksListText";
import WorksListImage from "@atoms/WorksListImage";
import classNames from "classnames";
import Padding from "@atoms/Padding";

const WorksList: FC<WorksListProps> = ({
                                           imageFirst,
                                           title,
                                           description,
                                           descriptionBold,
                                           category,
                                           urlImage,
                                           skills,
                                           descriptionLong1,
                                           descriptionLongBold1,
                                           descriptionLong2,
                                           descriptionLongBold2,
                                           urlAllImages
                                       }) => {
    return <>
        <div className={classNames("flex flex-col tablet:flex-row justify-between", {'tablet:flex-row-reverse': imageFirst})}>
            <WorksListText title={title} description={description} descriptionBold={descriptionBold} category={category}/>
            <WorksListImage urlImage={urlImage}/>
        </div>
        <Padding />
    </>
}

export default WorksList