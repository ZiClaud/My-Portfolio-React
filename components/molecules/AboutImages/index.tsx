import React, {FC} from "react";
import AboutImagesProps from "./index.types"

const AboutImages: FC<AboutImagesProps> = ({}) => {
    return <>
        <div className="hidden tablet:block w-[50vw] h-[600px]">
            <div className="absolute pt-[0]">
                <img
                    src="https://assets.telegraphindia.com/telegraph/2022/Feb/1644870612_design.jpg"
                    alt="" className="w-[282px] h-[374px] rounded-3xl"
                />
            </div>

            <div className="absolute pt-[150px] pl-[150px]">
                <img
                    src="https://media.cnn.com/api/v1/images/stellar/prod/230104173032-02-chess-stock.jpg?c=original"
                    alt="" className="w-[282px] h-[374px] rounded-3xl"
                />
            </div>

            <div className="absolute pt-[300px] pl-[25px]">
                <img
                    src="https://cdn.fuelrocks.com/1665122987550.jpg"
                    alt="" className="w-[282px] h-[374px] rounded-3xl"
                />
            </div>
        </div>
    </>
}

export default AboutImages