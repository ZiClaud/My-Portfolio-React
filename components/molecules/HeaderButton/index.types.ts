import React from "react"

export default interface HeaderButtonProps {
  children: React.ReactNode
  variant: "mobile" | "laptop"
  onClick: () => void
}