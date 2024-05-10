import plus from "../assets/icon-minus.svg"
import minus from "../assets/icon-plus.svg"
import cart from "../assets/icon-cart.svg"
import { useState } from "react"
const ProductDetails = ({SetCartQuantity}) => {

    const [productQuantity, setProductQuantity] = useState(0)

    function editQuantity(isAdd) {
        setProductQuantity(oldProductQuantity => {
            if (isAdd) {
                return oldProductQuantity + 1
            } else {
                return oldProductQuantity === 0 ? 0 : oldProductQuantity - 1
            }
        })
    }

    const addToCart = ()=>{
        SetCartQuantity(productQuantity)
    }

    return (
        <div className="px-3 pt-4 mx-auto max-w-[31rem]">
            <p className="text-xs font-bold text-orange">SNEAKER COMPANY</p>
            <h1 className="max-w-[300px] text-3xl font-bold mt-2 desktop:text-4xl desktop:max-w-[25rem]">Fall Limited Edition Sneakers</h1>
            <p className="mt-4 text-dark-grayish-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer Sole, they'll withstand everything the weather can offer.</p>
            <div className="flex justify-between mt-4 desktop:flex-col">
                <div className="flex items-center">
                    <h1 className="text-[1.3rem] font-bold">$125.00</h1>
                    <p className="ml-4 px-2 py-1 font-bold text-orange rounded-lg bg-pale-orange">50%</p>
                </div>
                <p className="text-grayish-blue line-through text-sm">$250.00</p>
            </div>

            <div className="desktop:grid grid-cols-6 gap-x-2">
                <div className="flex justify-between w-full mt-4 p-4 rounded-md bg-light-grayish-blue desktop:col-span-2">
                    <button onClick={() => editQuantity(false)}>
                        <img src={plus} alt="Reduce quantity" />
                    </button>
                    <p className="font-bold">{productQuantity}</p>
                    <button onClick={() => editQuantity(true)}>
                        <img src={minus} alt="Add quantity" />
                    </button>
                </div>

                <button onClick={addToCart} className="flex justify-center items-center col-span-4 mt-2 py-3 shadow-[0px_0px_3px_orange] rounded-md font-bold text-white bg-orange w-full">
                    <img src={cart} className="scale-75 pr-4" alt=" " />
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductDetails