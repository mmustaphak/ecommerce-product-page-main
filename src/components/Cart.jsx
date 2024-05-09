const Cart = ({ CartQuantity }) => {

    const cartSummary = () => {
        const totalPrice = CartQuantity * 125
        return (
            <div>
                <img src={productImg} alt="Fall Limited Edition Sneakers" />
                <div>
                    <h6></h6>
                    <div>Fall Limited Edition Sneakrs</div>
                    <div>
                        <p>$125.00 x {CartQuantity}</p>
                        <p>{totalPrice}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="absolute flex flex-col w-[92%] max-w-[21.5rem] h-[450%] max-h-60 right-4 -bottom-[400%] shadow-2xl rounded-lg bg-white desktop:top-16 desktop:max-w-[330px] desktop:max-h-48">
            <h2 className="pl-6 py-4 font-semibold">Cart</h2>
            <hr />
            <div className="m-auto">
                 <p className="font-semibold text-sm text-dark-grayish-blue">Your cart is empty.</p>
            </div>
        </div>
    )
}

export default Cart