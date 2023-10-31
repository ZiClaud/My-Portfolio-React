import React, { FC } from "react"
import ContactProps from "./index.types"
import ContactText from "@molecules/ContactText"
import ContactSocials from "@molecules/ContactSocials"

const Contact: FC<ContactProps> = ({}) => {
  return <>
    <div className="flex flex-col-reverse tablet:flex-row justify-around items-center" id="contact-section">
      <ContactSocials />
      <ContactText />
    </div>
  </>
}

export default Contact