import React, { FC } from "react";
import AllWorksImageProps from "./index.types"
import Image from "next/image";

const AllWorksImage: FC<AllWorksImageProps> = ({ urlImage }) => {
  return <>
    <div className="flex flex-col justify-center mobile:w-[20vw] tablet:w-[20vw]">
      <Image src={urlImage} alt="404" width={300} height={200}
             className="rounded-3xl border-[3px] border-neutral-2-color"/>
    </div>
  </>
}

export default AllWorksImage