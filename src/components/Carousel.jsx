import { useEffect, useState } from "react"
import product1 from "../assets/image-product-1.jpg"
import product2 from "../assets/image-product-2.jpg"
import product3 from "../assets/image-product-3.jpg"
import product4 from "../assets/image-product-4.jpg"
import numbnail1 from "../assets/image-product-1-thumbnail.jpg"
import numbnail2 from "../assets/image-product-2-thumbnail.jpg"
import numbnail3 from "../assets/image-product-3-thumbnail.jpg"
import numbnail4 from "../assets/image-product-4-thumbnail.jpg"
import next from "../assets/icon-next.svg"
import previous from "../assets/icon-previous.svg"
import OverlayGallery from "./OverlayGallery.jsx"

const Carousel = () => {

    const [currentImage, setCurrentImage] = useState(0)
    const [isOverlay, setIsOverlay] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.onresize = () => {
            setWindowWidth(window.innerWidth)
        }
    }, [])
    
    useEffect(() => {
        if (windowWidth < 650) {
            setIsOverlay(false)
        }
    },[windowWidth])

    const productImages = [product1, product2, product3, product4]

    function moveImage(isNext) {
        if (isNext) {
            setCurrentImage(oldCurrentImage => oldCurrentImage === 3 ? 0 : oldCurrentImage + 1)
        } else {
            setCurrentImage(oldCurrentImage => oldCurrentImage === 0 ? 3 : oldCurrentImage - 1)
        }
    }

    const toggleOverlay = () => windowWidth > 650 && setIsOverlay(oldIsOverlay => !oldIsOverlay)

    const renderedThumbnails = [numbnail1, numbnail2, numbnail3, numbnail4].map((pic, index) => {
        const selectProductImage = () => {
            setCurrentImage(index)
        }
        if (currentImage == index) {
            return (
                <div key={pic} onClick={selectProductImage} className="border-2 border-orange rounded-lg scale-90 bg-white">
                    <img src={pic} className="rounded-md opacity-30" alt="Product Preview" />
                </div>
            )
        } else {
            return (
                <img key={pic} onClick={selectProductImage} src={pic} className="rounded-md scale-90 hover:opacity-75" alt="Product Preview" />
            )
        }
    })


    return (
        <>
            <div className="max-w-[25rem] mx-auto max-[650px]:relative">
                <button onClick={() => moveImage(false)} className="absolute top-[50%] left-3 rounded-full py-2 px-[0.65rem] bg-white desktop:hidden">
                    <img src={previous} alt="Previous Image" />
                </button>

                <img onClick={toggleOverlay} className="max-h-[25rem] mx-auto desktop:rounded-lg desktop:cursor-pointer" src={productImages[currentImage]} />
                <div className="hidden grid-cols-4 gap-4 mt-4 desktop:grid">{renderedThumbnails}</div>

                <button onClick={() => moveImage(true)} className="absolute top-[50%] right-3 rounded-full py-2 px-[0.65rem] bg-white desktop:hidden">
                    <img src={next} alt="Next Image" />
                </button>
            </div>

            {isOverlay && <OverlayGallery
                RenderedThumbnails={renderedThumbnails}
                CurrentImage={currentImage}
                ProductImages={productImages}
                MoveImage={moveImage}
                CloseOverlay={toggleOverlay}
            />}
        </>
    )
}

export default Carousel