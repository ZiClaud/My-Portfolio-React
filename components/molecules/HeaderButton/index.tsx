import React, {FC} from "react";
import HeaderButtonProps from "./index.types"
import Typography from "@atoms/Typography";

const HeaderButton: FC<HeaderButtonProps> = ({children, variant, onClick}) => {
    switch (variant) {
        case "laptop":
            return <>
                <button onClick={onClick}>
                    <Typography variant="label" color="neutral-1"
                                className="pl-8 hover:text-primary-color transition">{children}</Typography>
                </button>
            </>
        case "mobile":
            return <>
                <button onClick={onClick}>
                    <Typography variant="h3" color="neutral-1"
                                className="pl-8 hover:text-primary-color transition">{children}</Typography>
                </button>
            </>
    }
}

export default HeaderButton