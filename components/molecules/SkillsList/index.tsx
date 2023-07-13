import React, {FC} from "react";
import SkillsListProps from "./index.types"
import Image from "next/image";
import FlutterLogo from "@images/flutter.svg";
import DartLogo from "@images/dart.svg";
import ReactLogo from "@images/react.svg";
import JavaLogo from "@images/java.svg";

// TODO: Maybe change brightness, or find a good hover effect
const SkillsList: FC<SkillsListProps> = ({}) => {
    return <>
        <div className="flex flex-row justify-around py-10">
            <Image src={FlutterLogo} alt={"Flutter"} width={200} height={200} className="brightness-[1] hover:brightness-[1]"/>
            <Image src={DartLogo} alt={"Dart"} width={200} height={200} className="brightness-[1] hover:brightness-[1]"/>
            <Image src={ReactLogo} alt={"React"} width={200} height={200} className="brightness-[1] hover:brightness-[1]"/>
            <Image src={JavaLogo} alt={"Java"} width={200} height={200} className="brightness-[1] hover:brightness-[1]"/>
        </div>
    </>
}

export default SkillsList