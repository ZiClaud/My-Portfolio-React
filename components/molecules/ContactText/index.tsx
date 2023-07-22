import React, {FC} from "react";
import ContactTextProps from "./index.types"
import Typography from "@atoms/Typography";

const ContactText: FC<ContactTextProps> = ({}) => {
    return <>
        <div className="flex flex-col justify-center items-center py-20 w-[350px]">
            <div className="flex flex-row">
                <Typography variant="h1" color="neutral-2">
                    Get&nbsp;
                </Typography>
                <Typography variant="h1" color="neutral-1" bold={true}>
                    in Touch
                </Typography>
            </div>
            <div>
                <Typography variant="body1" color="neutral-1">
                    So that we can start working together!
                </Typography>
            </div>
        </div>
    </>
}

export default ContactText