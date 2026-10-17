import React, { FC } from "react"
import ImageGallery from "react-image-gallery"
import WorksCarouselProps from "./index.types"
import CardList from "../CardList"

import "./my-works-image-gallery.css"
import { AllWorks } from "@/database/fakeDB"

const WorksCarousel: FC<WorksCarouselProps> = ({ }) => {
  const items = getAllThumbnails().map((imageUrl) => ({ original: imageUrl, thumbnail: imageUrl }))

  function getAllThumbnails() {
    var imgs: string[] = [];

    AllWorks.forEach(work => {
      imgs.push(work.urlImage)
    });

    return imgs;
  }
  
  function getAllCategories() {
    var categories: string[] = [];

    AllWorks.forEach(work => {
      categories.push(work.category)
    });

    return categories;
  }

  return <>
    <div className="tablet:w-[70vw] tablet:h-[45vw] overflow-auto flex justify-center items-center">
      <div className="h-[35vw] tablet:w-full tablet:h-full flex justify-center items-center rounded-3xl">
        <div className="hidden tablet:hidden ">
          // TODO: Show
          <ImageGallery
            items={items}
            showNav={false}
            autoPlay={true}
            infinite={true}
            showIndex={false}
            showBullets={false}
            showPlayButton={false}
            showThumbnails={true}
            thumbnailPosition="bottom"
            showFullscreenButton={false}
            lazyLoad={true}
          />
        </div>
        <div className="hidden tablet:flex">
          <ImageGallery
            items={items}
            showNav={false}
            autoPlay={true}
            infinite={true}
            showIndex={false}
            showBullets={false}
            showPlayButton={false}
            showThumbnails={true}
            thumbnailPosition="left"
            showFullscreenButton={false}
            lazyLoad={true}
          />
        </div>
      </div>
    </div>
  </>
}
//TODO: <CardList textList={getAllCategories()} />

export default WorksCarousel
