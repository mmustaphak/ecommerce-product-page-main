import product1 from "../assets/image-product-1.jpg"
import numbnail1 from "../assets/image-product-1-thumbnail.jpg"
import numbnail2 from "../assets/image-product-2-thumbnail.jpg"
import numbnail3 from "../assets/image-product-3-thumbnail.jpg"
import numbnail4 from "../assets/image-product-4-thumbnail.jpg"
import next from "../assets/icon-next.svg"
import previous from "../assets/icon-previous.svg"
import plus from "../assets/icon-minus.svg"
import minus from "../assets/icon-plus.svg"
import cart from "../assets/icon-cart.svg"
const Main = () => {

    const numbnails = [numbnail1, numbnail2, numbnail3, numbnail4]
    const renderedThumbnails = numbnails.map(pic => {
        return (
            <img key={pic} src={pic} className="rounded-md scale-90" alt="Product Preview" />
        )
    })
    return (
        <main className="min-[650px]:grid grid-cols-2 items-center min-[650px]:pt-2 min-[650px]:px-4 min-[650px]:gap-x-4">

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

            <div className="px-3 pt-4 max-w-[31rem]">
                <p className="text-xs font-bold text-orange">SNEAKER COMPANY</p>
                <h1 className="max-w-[300px] text-3xl font-bold mt-2 min-[650px]:text-4xl min-[650px]:max-w-[25rem]">Fall Limited Edition Sneakers</h1>
                <p className="mt-4 text-dark-grayish-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer Sole, they'll withstand everything the weather can offer.</p>
                <div className="flex justify-between mt-4 min-[650px]:flex-col">
                    <div className="flex items-center">
                        <h1 className="text-[1.3rem] font-bold">$125.00</h1>
                        <p className="ml-4 px-2 py-1 font-bold text-orange rounded-lg bg-pale-orange">50%</p>
                    </div>
                    <p className="text-grayish-blue line-through text-sm">$250.00</p>
                </div>

                <div className="min-[650px]:grid grid-cols-6 gap-x-2">
                    <div className="flex justify-between w-full mt-4 p-4 rounded-md bg-light-grayish-blue min-[650px]:col-span-2">
                        <button>
                            <img src={plus} alt="Reduce quantity" />
                        </button>
                        <p className="font-bold">0</p>
                        <button>
                            <img src={minus} alt="Add quantity" />
                        </button>
                    </div>

                    <button className="flex justify-center items-center col-span-4 mt-2 py-3 rounded-md font-bold text-white bg-orange w-full">
                        <img src={cart} className="scale-75 pr-4" alt=" " />
                        Add to cart
                    </button>
                </div>
            </div>

        </main>
    )
}

export default Main