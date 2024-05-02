import product1 from "../assets/image-product-1.jpg"
import next from "../assets/icon-next.svg"
import previous from "../assets/icon-previous.svg"
import plus from "../assets/icon-minus.svg"
import minus from "../assets/icon-plus.svg"
import cart from "../assets/icon-cart.svg"
const Main = () => {
    return (
        <main>
            <div className="relative">
                <button className="absolute top-[50%] left-3 rounded-full py-2 px-[0.65rem] bg-white">
                    <img src={previous} alt="" />
                </button>

                <img src={product1} />

                <button className="absolute top-[50%] right-3 rounded-full py-2 px-[0.65rem] bg-white">
                    <img src={next} alt="" />
                </button>
            </div>

            <div className="px-3 pt-4">
                <p className="text-xs font-bold text-orange">SNEAKER COMPANY</p>
                <h1 className="max-w-[300px] text-3xl font-bold mt-2">Fall Limited Edition Sneakers</h1>
                <p className="mt-4 text-dark-grayish-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer Sole, they'll withstand everything the weather can offer.</p>
                <div className="flex justify-between mt-4">
                    <div className="flex items-center">
                        <h1 className="text-[1.3rem] font-bold">$125.00</h1>
                        <p className="ml-4 px-2 py-1 font-bold text-orange rounded-lg bg-pale-orange">50%</p>
                    </div>
                    <p className="text-grayish-blue line-through text-sm">$250.00</p>
                </div>

                <div className="flex justify-between w-full mt-4 p-4 rounded-md bg-light-grayish-blue">
                    <button>
                        <img src={plus} alt="Reduce quantity" />
                    </button>
                    <p className="font-bold">0</p>
                    <button>
                        <img src={minus} alt="Add quantity" />
                    </button>
                </div>

                <button className="flex justify-center mt-2 py-3 rounded-md font-bold text-white bg-orange w-full">
                    <img src={cart} className="scale-75 pr-4" alt=" " />
                    Add to cart
                </button>
            </div>
        </main>
    )
}

export default Main