import productImg from "../assets/image-product-1.jpg"
const Cart = ({ CartQuantity }) => {
    return (
        <div className="absolute flex flex-col w-[92%] max-w-[21.5rem] right-4 -bottom-[400%] shadow-2xl pb-4 rounded-lg bg-white desktop:top-16 desktop:max-w-[330px] desktop:max-h-[12.5rem]">
            <h2 className="pl-6 py-4 font-semibold">Cart</h2>
            <hr />
            {CartQuantity === 0 && <p className=" self-center mt-[15%] font-semibold text-sm text-dark-grayish-blue">Your cart is empty.</p>}
            {
                CartQuantity > 0 &&
                <div className="w-full h-full p-4">
                    <div className="flex">
                        <img src={productImg} className="max-w-12 max-h-12 rounded-lg" alt="Fall Limited Edition Sneakers" />
                        <div className="ml-4 text-dark-grayish-blue">
                            <h6>Fall Limited Edition Sneakers</h6>
                            <div className="flex">
                                <p>$125.00 x {CartQuantity}</p>
                                <p className="ml-1 text-black font-bold">${125 * CartQuantity}.00</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-4 py-2 font-semibold text-white rounded-lg bg-orange">Checkout</button>
                </div>
            }
        </div>
    )
}

export default Cart