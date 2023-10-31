import React, { FC } from "react"
import TypographyProps from "./index.types"
import classNames from "classnames"

const Typography: FC<TypographyProps> = ({ children, variant, color, bold, className }) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={classNames
        ("text-[40px] tablet:text-[56px] laptop:text-[56px]",
          {
            "text-neutral-1-color": color === "neutral-1",
            "text-neutral-2-color": color === "neutral-2",
            "text-primary-color": color === "primary",
          },
          {
            "font-light": !bold,
            "font-semibold": bold,
          },
          className ?? "",
        )}>
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2 className={classNames
        ("text-[36px] tablet:text-[40px] laptop:text-[40px]",
          {
            "text-neutral-1-color": color === "neutral-1",
            "text-neutral-2-color": color === "neutral-2",
            "text-primary-color": color === "primary",
          },
          {
            "font-light": !bold,
            "font-semibold": bold,
          },
          className ?? "",
        )}>
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3 className={classNames
        ("text-[28px] tablet:text-[32px] laptop:text-[32px]",
          {
            "text-neutral-1-color": color === "neutral-1",
            "text-neutral-2-color": color === "neutral-2",
            "text-primary-color": color === "primary",
          },
          {
            "font-light": !bold,
            "font-semibold": bold,
          },
          className ?? "",
        )}>
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4 className={classNames
        ("text-[22px] tablet:text-[24px] laptop:text-[24px]",
          {
            "text-neutral-1-color": color === "neutral-1",
            "text-neutral-2-color": color === "neutral-2",
            "text-primary-color": color === "primary",
          },
          {
            "font-light": !bold,
            "font-semibold": bold,
          },
          className ?? "",
        )}>
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5 className={classNames
        ("text-[16px] tablet:text-[16px] laptop:text-[16px]",
          {
            "text-neutral-1-color": color === "neutral-1",
            "text-neutral-2-color": color === "neutral-2",
            "text-primary-color": color === "primary",
          },
          {
            "font-light": !bold,
            "font-semibold": bold,
          },
          className ?? "",
        )}>
          {children}
        </h5>
      )
    case "body1":
      return (
        <p className={classNames(
          "text-[16px] tablet:text-[18px] laptop:text-[18px]",
          {
            "text-neutral-1-color": color === "neutral-1",
            "text-neutral-2-color": color === "neutral-2",
            "text-primary-color": color === "primary",
          },
          {
            "font-light": !bold,
            "font-semibold": bold,
          },
          className ?? "",
        )}>
          {children}
        </p>
      )
    case "button":
      return (
        <p className={classNames(
          "text-[14px] tablet:text-[16px] laptop:text-[16px]",
          {
            "text-neutral-1-color": color === "neutral-1",
            "text-neutral-2-color": color === "neutral-2",
            "text-primary-color": color === "primary",
          },
          {
            "font-normal": !bold,
            "font-semibold": bold,
          },
          className ?? "",
        )}>
          {children}
        </p>
      )
    case "label":
      return (
        <p className={classNames(
          "text-[12px] tablet:text-[14px] laptop:text-[14px] font-semibold",
          {
            "text-neutral-1-color": color === "neutral-1",
            "text-neutral-2-color": color === "neutral-2",
            "text-primary-color": color === "primary",
          },
          className ?? "",
        )}>
          {children}
        </p>
      )
  }
}

export default Typography
