import { loadStripe } from "@stripe/stripe-js"
import productImg from "../assets/image-product-1.jpg"
import trashBin from "../assets/icon-delete.svg"

const stripePromise = loadStripe('pk_test_51PI2HkCqm73Nj11DKWZjVOJhXxYwHR66Gcs3pMmJ19j2pBOQ8UR36spRXyfNMyXiameRINR8WnApx3a2vKi29CX9001rcDF2lY')

const Cart = ({ CartQuantity, SetCartQuantity, ToggleCart }) => {

    

    const handleClick = async (e)=>{
        const stripe = await stripePromise;
        const {error} = await stripe.redirectToCheckout({
            lineItems: [{
                price: "price_1PJSPXCqm73Nj11DT8YFECwA",
                quantity: CartQuantity,
            }],
            mode: 'payment',
            successUrl: document.location.href,
            cancelUrl: document.location.href
        })
    }

    const resetCart = () => {
        SetCartQuantity(0)
    }

    const closeCart = e => e.target === e.currentTarget && ToggleCart()

    return (
        <div onClick={closeCart} className="absolute top-0 left-0 w-screen h-screen desktop:w-[90vw]">
            <div className="absolute flex flex-col w-[92%] min-h-[15em] max-w-[21.5rem] top-20 right-3 shadow-2xl pb-4 rounded-lg bg-white desktop:top-20 desktop:max-w-[330px] desktop:max-h-[12.5rem] desktop:-right-10">
                <h2 className="pl-6 py-4 font-semibold">Cart</h2>
                <hr />
                <div className="flex flex-col justify-center w-full h-full px-4">
                    {CartQuantity === 0 && <p className=" mt-16 self-center font-semibold text-sm text-dark-grayish-blue">Your cart is empty.</p>}
                    {
                        CartQuantity > 0 &&
                        <>
                            <div className="flex justify-between items-center mt-8">
                                <img src={productImg} className="max-w-12 max-h-12 rounded-lg" alt="Fall Limited Edition Sneakers" />
                                <div className="text-dark-grayish-blue">
                                    <h6>Fall Limited Edition Sneakers</h6>
                                    <div className="flex">
                                        <p>$125.00 x {CartQuantity}</p>
                                        <p className="ml-1 text-black font-bold">${125 * CartQuantity}.00</p>
                                    </div>
                                </div>
                                <button onClick={resetCart}>
                                    <img src={trashBin} alt="Remove items from cart" />
                                </button>
                            </div>
                            <button onClick={handleClick} role="link" className="w-full mt-4 py-2 font-semibold text-white rounded-lg bg-orange">Checkout</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart