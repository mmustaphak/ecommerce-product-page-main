import Carousel from "./Carousel"
import ProductDetails from "./ProductDetails"
const Main = ({SetCartQuantity}) => {
    return (
        <main className="min-[650px]:grid grid-cols-2 items-center min-[650px]:pt-2 min-[650px]:px-4 min-[650px]:gap-x-4">
            <Carousel />
            <ProductDetails 
                SetCartQuantity = {SetCartQuantity}
            />
        </main>
    )
}

export default Main