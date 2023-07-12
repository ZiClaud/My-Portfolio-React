import React, {FC} from "react";
import ContactProps from "./index.types"
import ContactText from "@molecules/ContactText";
import ContactSocials from "@molecules/ContactSocials";

const Contact: FC<ContactProps> = ({}) => {
    return <>
        <div className="flex flex-col laptop:flex-row justify-around">
            <ContactSocials/>
            <ContactText/>
        </div>
    </>
}

export default Contact