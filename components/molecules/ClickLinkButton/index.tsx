import React, {FC} from "react";
import ClickLinkButtonProps from "./index.types"
import Button from "@atoms/Button";

const ClickLinkButton: FC<ClickLinkButtonProps> = ({workData}) => {
    return <>
        {workData.link !== "" && (
            <div className="flex flex-row justify-center items-center py-4">
                <Button text="CHECK IT OUT" link={workData.link} showArrow={false} />
            </div>
        )}
    </>
}

export default ClickLinkButton