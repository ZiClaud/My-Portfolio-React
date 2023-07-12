import React, {FC} from "react";
import ContactSocialsProps from "./index.types"
import GitHubLogo from "@images/github_img.svg";
import LinkedInLogo from "@images/linkedin_img.svg";
import MailLogo from "@images/mail_img.svg";
import IconButton from "@atoms/IconButton";

// TODO: Improve the spacing between the icons
const ContactSocials: FC<ContactSocialsProps> = ({}) => {
    return <>
        <div>
            <div className="pl-[51px] pt-[0px]">
                <IconButton src={GitHubLogo} alt="Github" href="#"/>
            </div>
            <div className="pl-[199px] pt-[0px]">
                <IconButton src={LinkedInLogo} alt="LinkedIn" href="#"/>
            </div>
            <div className="pl-[85px] pt-[0px]">
                <IconButton src={MailLogo} alt="Mail" href="#"/>
            </div>
        </div>
    </>
}

export default ContactSocials