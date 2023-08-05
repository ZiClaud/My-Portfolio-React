import React, {FC} from "react";
import SkillsListProps from "./index.types"
import Image from "next/image";
import FlutterLogo from "@images/flutter.svg";
import DartLogo from "@images/dart.svg";
import ReactLogo from "@images/react.svg";
import TailwindLogo from "@images/tailwind.svg";

const SkillsList: FC<SkillsListProps> = ({}) => {
    return <>
        <div className="flex flex-row justify-around py-10">
            <div className="w-[200px h-[200px] flex juisfty-center items-center px-1">
                <Image src={FlutterLogo} alt={"Flutter"} width={200} height={200}
                       className="hover:scale-110 transition"/>
            </div>
            <div className="w-[200px h-[200px] flex juisfty-center items-center px-1">
                <Image src={DartLogo} alt={"Dart"} width={200} height={200}
                       className="hover:scale-110 transition"/>
            </div>
            <div className="w-[200px h-[200px] flex juisfty-center items-center px-1">
                <Image src={ReactLogo} alt={"React"} width={200} height={200}
                       className="hover:scale-110 transition"/>
            </div>
            <div className="w-[200px h-[200px] flex juisfty-center items-center px-1">
                <Image src={TailwindLogo} alt={"Tailwind"} width={200} height={200}
                       className="hover:scale-110 transition"/>
            </div>
        </div>
    </>
}

export default SkillsList