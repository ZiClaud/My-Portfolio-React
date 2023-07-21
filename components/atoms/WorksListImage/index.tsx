import React, {FC} from "react";
import WorksListImageProps from "./index.types"
import Image from "next/image";

const WorksListImage: FC<WorksListImageProps> = ({urlImage}) => {
    return <>
        <div className="flex flex-col justify-center tablet:w-[40vw]">
            <Image src={urlImage} alt="404" width={600} height={500} className="rounded-3xl border-[3px] border-neutral-2-color"/>
        </div>
    </>
}

export default WorksListImage