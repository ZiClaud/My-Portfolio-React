import React, { FC } from "react"
import ImageGallery from "react-image-gallery"
import WorksCarouselProps from "./index.types"

import "./my-image-gallery.css"

const WorksCarousel: FC<WorksCarouselProps> = ({ images }) => {
  const items = images.map((imageUrl) => ({ original: imageUrl, thumbnail: imageUrl }))

  return <>
    <div className="w-[70vw] rounded-3xl overflow-auto">
      <ImageGallery
        items={items}
        showNav={false}
        autoPlay={true}
        infinite={true}
        showIndex={false}
        showBullets={images.length > 1}
        showPlayButton={images.length > 1}
        showThumbnails={false}
        showFullscreenButton={false}
        lazyLoad={true}
      />
    </div>
  </>
}

export default WorksCarousel
