import next from "../assets/icon-next.svg"
import previous from "../assets/icon-previous.svg"

const OverlayGallery = ({ CurrentImage, ProductImages, MoveImage, RenderedThumbnails }) => {
    return (
        <div className="fixed top-0 left-0 flex items-center h-full w-full z-20 bg-black/75">
            <div className="relative max-w-[25rem] mx-auto">
                <button onClick={() => MoveImage(false)} className="absolute top-[35%] -left-8 rounded-full scale-75 py-5 px-[1.4rem] bg-white">
                    <img src={previous} alt="Previous Image" />
                </button>

                <img className="max-h-[25rem] mx-auto rounded-lg" src={ProductImages[CurrentImage]} />
                <div className="grid grid-cols-4 gap-4 mt-4">{RenderedThumbnails}</div>

                <button onClick={() => MoveImage(true)} className="absolute top-[35%] -right-8 rounded-full scale-75 py-5 px-[1.4rem] bg-white">
                    <img src={next} alt="Next Image" />
                </button>
            </div>
        </div>
    )
}

export default OverlayGallery