import React, {FC} from "react";
import LoadingPageProps from "./index.types"
import Image from "next/image";
import ZC_Logo from "@images/ZC_Logo.svg";

const LoadingPage: FC<LoadingPageProps> = ({}) => {
    return <>
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
            <Image src={ZC_Logo} alt={"Loading..."} width={125} height={125}/>
        </div>
    </>
}

export default LoadingPage