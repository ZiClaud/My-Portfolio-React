import React, { FC } from "react"
import CardListProps from "./index.types"
import Card from "@atoms/Card"

const CardList: FC<CardListProps> = ({ textList }) => {
  return <>
    <div className="flex flex-row">
      {textList.map((text, index) => (
        <Card key={index} text={text} />
      ))}
    </div>
  </>
}

export default CardList