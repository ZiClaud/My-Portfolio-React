import React, { FC } from "react"
import FooterProps from "./index.types"
import Typography from "@atoms/Typography"

// Returns current year
function getCopyrightYear(): number {
  return new Date().getFullYear();
}

const Footer: FC<FooterProps> = ({}) => {
  return <>
    <div className="flex flex-row justify-center items-center">
      <Typography variant="h5" color="neutral-2">
        © 2023-{getCopyrightYear()} Claudio Di Maio
      </Typography>
    </div>
  </>
}

export default Footer