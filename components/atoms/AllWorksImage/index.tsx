import React, {FC} from "react";
import AllWorksImageProps from "./index.types"
import Image from "next/image";
import {Link} from "react-router-dom";
import Typography from "@atoms/Typography";

const AllWorksImage: FC<AllWorksImageProps> = ({urlImage, text, linkName}) => {
    return (
        <div className="flex flex-col justify-center items-center animated">
            <Link to={linkName}>
                <div className="w-[300px] h-[200px] flex flex-col justify-center items-center group relative">
                    <Image
                        src={urlImage}
                        alt="404"
                        width={300}
                        height={200}
                        className="rounded-t-3xl tablet:rounded-b-3xl group-hover:rounded-b-none group-hover:opacity-50"
                    />
                    <div
                        className="bottom-0 w-full bg-primary-color text-neutral-1-color py-2 px-4 flex tablet:hidden rounded-b-3xl group-hover:flex">
                        <Typography variant="label" color="neutral-1">{text}</Typography>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default AllWorksImage