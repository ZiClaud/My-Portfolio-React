"use client"

import React, { FC, useEffect, useState } from "react"
import WorkPageProps from "./index.types"
import Typography from "@atoms/Typography"
import Padding from "@atoms/Padding"
import { useLocation, useParams } from "react-router-dom"
import Layout from "@atoms/Layout"
import WorkData from "@/basics/WorkData"
import { AllWorks, WorkNotFound } from "@/database/fakeDB"
import CardList from "@molecules/CardList"
import WorksCarousel from "@molecules/WorksCarousel"
import LongDescription from "@molecules/LongDescription"
import ClickLinkButton from "@molecules/ClickLinkButton"

const WorkPage: FC<WorkPageProps> = ({}) => {    // Scroll to top when the page is loaded
  const { pathname } = useLocation()

  const { linkName } = useParams()
  const [workData, setWorkData] = useState<WorkData>(WorkNotFound)

  useEffect(() => {
    window.scrollTo(0, 0)

    const currentWork: WorkData | undefined = AllWorks.find((work: WorkData) => work.linkName === linkName)
    if (currentWork !== undefined) {
      setWorkData(currentWork)
    } else {
      console.error("Work not found")
    }
  }, [linkName, pathname])

  /**
   * We assume the ID is in the format YYYYMMDD.
   *
   * It'll return DD/MM/YYYY
   */
  function getDateFromID(id: number): string {
    if (id < 19000000 || id > 30000000) {
      return ""
    }

    let ris: string
    ris = (id % 100).toString()
    id = Math.floor(id / 100)
    ris = ris + "/" + (id % 100).toString()
    id = Math.floor(id / 100)
    ris = ris + "/" + (id % 10000).toString()
    return ris
  }

  return <>
    <Layout>
      <div className="flex flex-col bg-black-background">
        <div className="flex flex-col justify-center items-center">
          <Typography variant="h2" color="neutral-1" bold={true} className="pt-5">{workData.title}</Typography>
          <Typography variant="h4" color="neutral-2" className="pb-5">{workData.category}</Typography>
          <WorksCarousel images={workData.urlAllImages} />
          <CardList textList={workData.skills} />
        </div>
        <LongDescription variant="h3" descriptions={[workData.descriptionLong1, workData.descriptionLongBold1, workData.descriptionLong2, workData.descriptionLongBold2]} />
        <ClickLinkButton workData={workData} />
        <div className="flex justify-end">
          <Typography variant="body1" color="neutral-2" bold={true}>{getDateFromID(workData.id)}</Typography>
        </div>
        <Padding />
      </div>
    </Layout>
  </>
}

export default WorkPage