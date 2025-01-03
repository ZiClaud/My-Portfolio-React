import React, { FC } from "react"
import LayoutProps from "./index.types"

const Layout: FC<LayoutProps> = ({ children }) => {
  return <>
    <div className="px-5 tablet:px-14 laptop:px-28 bg-black-background">
      {children}
    </div>
  </>
}

export default Layout