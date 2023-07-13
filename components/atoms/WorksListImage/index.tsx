import React, {FC} from "react";
import WorksListImageProps from "./index.types"

const WorksListImage: FC<WorksListImageProps> = ({urlImage}) => {
    return <>
        <div className="flex flex-col justify-center tablet:w-[40vw]">
            <img src={urlImage} alt="404" width={600} height={500} className="rounded-3xl"/>
        </div>
    </>
}

export default WorksListImage