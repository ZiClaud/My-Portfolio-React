import React, {FC} from "react";
import ContactSocialsProps from "./index.types"
import IconButton from "@atoms/IconButton";
import GitHubLogo from "@images/github_img.svg";
import LinkedInLogo from "@images/linkedin_img.svg";
import MailLogo from "@images/mail_img.svg";

const ContactSocials: FC<ContactSocialsProps> = ({}) => {
    return <>
        <div className="h-[275px] w-[270px]">
            <div className="absolute h-[275px] w-[270px]">
                <div className="absolute left-[25px] top-[25px]">
                    <IconButton src={GitHubLogo} alt="Github" href="https://github.com/ZiClaud"/>
                </div>
                <div className="absolute left-[145px] top-[80px]">
                    <IconButton src={LinkedInLogo} alt="LinkedIn" href="https://www.linkedin.com/in/claudio-di-maio"/>
                </div>
                <div className="absolute left-[55px] top-[180px]">
                    <IconButton src={MailLogo} alt="Mail" href="mailto:claudiodimaiozc@gmail.com"/>
                </div>
            </div>
        </div>
    </>
}

export default ContactSocials