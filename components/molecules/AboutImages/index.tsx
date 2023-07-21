import React, {FC} from "react";
import AboutImagesProps from "./index.types"
import Image from "next/image";

// TODO: Fix object-fit="cover" not working
const AboutImages: FC<AboutImagesProps> = ({}) => {
    return <>
        <div className="hidden laptop:block w-[40vw] h-[1000px]">
            <div className="absolute pt-[0]">
                <Image
                    src="https://assets.telegraphindia.com/telegraph/2022/Feb/1644870612_design.jpg"
                    alt="404" width={282} height={374} className="rounded-3xl" object-fit="cover"
                />
            </div>

            <div className="absolute pt-[300px] pl-[300px]">
                <Image
                    src="https://media.cnn.com/api/v1/images/stellar/prod/230104173032-02-chess-stock.jpg?c=original"
                    alt="404" width={282} height={374} className="rounded-3xl" object-fit="cover"
                />
            </div>

            <div className="absolute pt-[600px]">
                <Image
                    src="https://cdn.fuelrocks.com/1665122987550.jpg"
                    alt="404" width={282} height={374} className="rounded-3xl" object-fit="cover"
                />
            </div>
        </div>
    </>
}

export default AboutImages