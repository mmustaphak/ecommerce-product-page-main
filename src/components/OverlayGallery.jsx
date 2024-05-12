const OverlayGallery = ({ CurrentImage, ProductImages, MoveImage, RenderedThumbnails, CloseOverlay }) => {
    return (
        <div className="fixed top-0 left-0 flex items-center h-full w-full z-20 bg-black/75">
            <div className="relative flex flex-col max-w-[25rem] mx-auto">

                <button onClick={CloseOverlay} className="group self-end py-4 ">
                    <svg className="fill-white group-hover:fill-orange" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"  fill-rule="evenodd" /></svg>
                </button>

                <button onClick={() => MoveImage(false)} className="group absolute top-[35%] -left-8 rounded-full scale-75 py-5 px-[1.4rem] bg-white">
                    <svg className="stroke-[#1D2026] group-hover:stroke-orange" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd" alt="Previous" /></svg>
                </button>

                <img className="max-h-[25rem] mx-auto rounded-lg" src={ProductImages[CurrentImage]} />
                <div className="grid grid-cols-4 gap-4 mt-4">{RenderedThumbnails}</div>

                <button onClick={() => MoveImage(true)} className="group absolute top-[35%] -right-8 rounded-full scale-75 py-5 px-[1.4rem] bg-white">
                    <svg className="stroke-[#1D2026] group-hover:stroke-orange" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd" alt="Next Image" /></svg>
                </button>
            </div>
        </div>
    )
}

export default OverlayGallery