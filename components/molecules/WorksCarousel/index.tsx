import React, { FC } from "react"
import ImageGallery from "react-image-gallery"
import WorksCarouselProps from "./index.types"

import "./my-image-gallery.css"

const isVideo = (url: string) => {
  return url.endsWith(".mp4")
}


const WorksCarousel: FC<WorksCarouselProps> = ({ images }) => {
  const items = images.map((imageUrl) => ({
        original: imageUrl,
        thumbnail: imageUrl,
        renderItem: isVideo(imageUrl)
          ? () => (
            <video controls className="image-gallery-image">
              <source src={imageUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
          : undefined, // Render undefined for images
      }
    ),
  )

  return (
    <div className="w-[70vw] rounded-3xl overflow-auto">
      <ImageGallery
        items={items}
        showNav={false}
        autoPlay={true}
        infinite={true}
        showIndex={false}
        showBullets={images.length > 1}
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
      />
    </div>
  )
}

export default WorksCarousel
