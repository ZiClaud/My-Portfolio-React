import React, { FC } from "react";
import AllWorksImageProps from "./index.types"
import Image from "next/image";

const AllWorksImage: FC<AllWorksImageProps> = ({ urlImage, text }) => {
  return (
      <div className="flex flex-col justify-center items-center">
        <div className="w-[300px] h-[200px] flex justify-center items-center group relative">
          <Image
              src={urlImage}
              alt="404"
              width={300}
              height={200}
              className="rounded-3xl hover:opacity-50"
          />
          <div className="absolute bottom-0 w-full bg-primary-color text-neutral-1-color py-2 px-4 opacity-0 group-hover:opacity-100 rounded-b-3xl">
            {text}
          </div>
        </div>
      </div>
  );
}

export default AllWorksImage