import React, {FC} from "react";
import ContactSocialsProps from "./index.types"
import GitHubLogo from "@images/github_img.svg";
import LinkedInLogo from "@images/linkedin_img.svg";
import MailLogo from "@images/mail_img.svg";
import IconButton from "@atoms/IconButton";

// TODO: Improve the spacing between the icons
const ContactSocials: FC<ContactSocialsProps> = ({}) => {
    return <>
        <div className="flex flex-col justify-center items-center h-[300px]">
            <div className="absolute pr-[75px] pb-[125px]">
                <IconButton src={GitHubLogo} alt="Github" href="https://github.com/ZiClaud"/>
            </div>
            <div className="absolute pl-[175px] pt-[0px]">
                <IconButton src={LinkedInLogo} alt="LinkedIn" href="https://www.linkedin.com/in/claudio-di-maio"/>
            </div>
            <div className="absolute pl-[0px] pt-[200px]">
                <IconButton src={MailLogo} alt="Mail" href="mailto:claudiodimaiozc@gmail.com"/>
            </div>
        </div>
    </>
}

export default ContactSocials