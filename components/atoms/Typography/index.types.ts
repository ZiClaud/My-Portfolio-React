import React from "react"

export default interface TypographyProps {
  children: React.ReactNode
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body1"
    | "button"
    | "label"
  bold?: boolean
  color: "neutral-1" | "neutral-2" | "primary"
  className?: string
}
