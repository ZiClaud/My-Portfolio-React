import React, {FC} from "react";
import ContactTextProps from "./index.types"
import Typography from "@atoms/Typography";

const ContactText: FC<ContactTextProps> = ({}) => {
    return <>
        <div className="flex flex-col justify-center items-center">
            <Typography variant="h1" color="neutral-2">
                Get <strong className="text-neutral-1-color">in Touch</strong>
            </Typography>
            <Typography variant="body1" color="neutral-1">
                So that we can start working together!
            </Typography>
        </div>
    </>
}

export default ContactText