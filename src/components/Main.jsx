import product1 from "../assets/image-product-1.jpg"
import arrow from "../assets/icon-next.svg"
import plus from "../assets/icon-minus.svg"
import minus from "../assets/icon-plus.svg"
import cart from "../assets/icon-cart.svg"
const Main = () => {
    return (
        <main>
            <div>
                <button>
                    <img src={arrow} alt="" />
                </button>
                    <img src={product1}/>
                <button>
                    <img src={arrow} alt="" />
                </button>
            </div>
            <p>SNEAKER COMPANY</p>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer Sole, they'll withstand everything the weather can offer</p>
            <div>
                <div>
                    <h1>$125.00</h1>
                    <p>50%</p>
                </div>
                <p>$250.0.</p>
            </div>

            <div>
                <button>
                    <img src={minus} alt="Add quantity" />
                </button>
                <p>0</p>
                <button>
                    <img src={plus} alt="Reduce quantity" />
                </button>
            </div>
            <button>
                <img src={cart} alt=" " />
                Add to cart
            </button>
        </main>
    )
}

export default Main