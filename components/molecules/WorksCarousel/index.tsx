import React, {FC} from "react";
import WorksCarouselProps from "./index.types"
import {Carousel} from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const WorksCarousel: FC<WorksCarouselProps> = ({images}) => {
    return <>
        <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
            width="70vw"
        >
            {images.map((imageUrl, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                    <Image
                        src={imageUrl}
                        alt={`Image ${index}`}
                        width={1300}
                        height={735}
                        className="rounded-3xl border-[3px] border-neutral-2-color"
                    />
                </div>
            ))}
        </Carousel>
    </>
}

export default WorksCarousel