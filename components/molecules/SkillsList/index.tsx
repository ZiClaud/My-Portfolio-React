import React, { FC } from "react"
import SkillsListProps from "./index.types"
import Image from "next/image"
import MainLanguageLogo1 from "@images/flutter.svg"
import MainLanguageLogo2 from "@images/kotlin.svg"
import MainLanguageLogo3 from "@images/react.svg"
import MainLanguageLogo4 from "@images/java.svg"

const SkillsList: FC<SkillsListProps> = ({}) => {
  return <>
    <div className="flex flex-row justify-around py-10">
      <div className="w-[200px h-[200px] flex juisfty-center items-center px-1">
        <Image src={MainLanguageLogo1} alt={"Flutter"} width={200} height={200}
               className="hover:scale-110 transition" />
      </div>
      <div className="w-[200px h-[200px] flex juisfty-center items-center px-1">
        <Image src={MainLanguageLogo2} alt={"Kotlin"} width={200} height={200}
               className="hover:scale-110 transition" />
      </div>
      <div className="w-[200px h-[200px] flex juisfty-center items-center px-1">
        <Image src={MainLanguageLogo3} alt={"React"} width={200} height={200}
               className="hover:scale-110 transition" />
      </div>
      <div className="w-[200px h-[200px] flex juisfty-center items-center px-1">
        <Image src={MainLanguageLogo4} alt={"Java"} width={200} height={200}
               className="hover:scale-110 transition" />
      </div>
    </div>
  </>
}

export default SkillsList