import React, {FC} from "react";
import ImageGallery from 'react-image-gallery';
import WorksCarouselProps from "./index.types"

import "./my-image-gallery.css";

const WorksCarousel: FC<WorksCarouselProps> = ({images}) => {
    const items = images.map((imageUrl) => ({original: imageUrl, thumbnail: imageUrl}));

    return <>
        <div className="w-[70vw] rounded-3xl overflow-auto">
            <ImageGallery
                items={items}
                showNav={false}
                autoPlay={true}
                infinite={true}
                showIndex={false}
                showBullets={true}
                showPlayButton={false}
                showThumbnails={false}
            />
        </div>
    </>
}

export default WorksCarousel
