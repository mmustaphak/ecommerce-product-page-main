import product1 from "../assets/image-product-1.jpg"
import numbnail1 from "../assets/image-product-1-thumbnail.jpg"
import numbnail2 from "../assets/image-product-2-thumbnail.jpg"
import numbnail3 from "../assets/image-product-3-thumbnail.jpg"
import numbnail4 from "../assets/image-product-4-thumbnail.jpg"
import next from "../assets/icon-next.svg"
import previous from "../assets/icon-previous.svg"
const Carousel = () => {

    const numbnails = [numbnail1, numbnail2, numbnail3, numbnail4]
    const renderedThumbnails = numbnails.map(pic => {
        return (
            <img key={pic} src={pic} className="rounded-md scale-90" alt="Product Preview" />
        )
    })

    return (
        <div className="max-w-[25rem] mx-auto max-[650px]:relative">
            <button className="absolute top-[50%] left-3 rounded-full py-2 px-[0.65rem] bg-white min-[650px]:hidden">
                <img src={previous} alt="Previous Image" />
            </button>

            <img className="max-h-[25rem] mx-auto min-[650px]:rounded-lg" src={product1} />
            <div className="hidden grid-cols-4 gap-4 mt-4 min-[650px]:grid">{renderedThumbnails}</div>

            <button className="absolute top-[50%] right-3 rounded-full py-2 px-[0.65rem] bg-white min-[650px]:hidden">
                <img src={next} alt="Next Image" />
            </button>
        </div>
    )
}

export default Carousel