import Carousel from "./Carousel"
import ProductDetails from "./ProductDetails"
const Main = ({SetCartQuantity}) => {
    return (
        <main className="grid-cols-2 items-center min-[650px]:grid min-[650px]:gap-x-4 min-[650px]:mt-8 min-[650px]:px-4">
            <Carousel />
            <ProductDetails 
                SetCartQuantity = {SetCartQuantity}
            />
        </main>
    )
}

export default Main