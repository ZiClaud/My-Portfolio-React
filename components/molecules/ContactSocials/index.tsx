import React, {FC} from "react";
import ContactSocialsProps from "./index.types"
import Image from "next/image";
import GitHubLogo from "@images/github_img.svg";
import LinkedInLogo from "@images/linkedin_img.svg";
import MailLogo from "@images/mail_img.svg";

const ContactSocials: FC<ContactSocialsProps> = ({}) => {
    return <>
        <div>
            <Image src={GitHubLogo} alt="Github" width={100} height={100}/>
            <Image src={LinkedInLogo} alt="LinkedIn" width={100} height={100}/>
            <Image src={MailLogo} alt="Mail" width={100} height={100}/>
        </div>
    </>
}

export default ContactSocials