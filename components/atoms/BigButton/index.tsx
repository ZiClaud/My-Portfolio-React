import React, { FC } from "react"
import BigButtonProps from "./index.types"
import { Link } from "react-router-dom"
import Typography from "@atoms/Typography"

const BigButton: FC<BigButtonProps> = ({ text, link }) => {

  const dots_effect = Array.from({ length: 120 }, (_, i) => (
    <div
      key={i}
      className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.3s]"
    ></div>
  ))

  return <>
    <Link
      className="flex flex-row justify-center items-center bg-transparent hover:scale-110 py-2 px-4 transition"
      to={link}>
      <button
        className="group cursor-pointer relative cursor-default w-[240px] h-[60px] bg-[linear-gradient(144deg,_#af40ff,_#5b42f3_50%,_#00ddeb)] text-neutral-1-color whitespace-nowrap flex flex-wrap rounded-lg overflow-hidden">
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <Typography variant={"button"} color="neutral-1" bold={true}>{text}</Typography>
      </span>
        {dots_effect}
      </button>
    </Link>
  </>
}

export default BigButton