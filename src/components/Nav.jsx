import menu from "../assets/icon-menu.svg"
import logo from "../assets/logo.svg"
import avatar from "../assets/image-avatar.png"
import Sidebar from "./Sidebar.jsx"
import Cart from "./Cart.jsx"
import { useState } from "react"

const Nav = ({ CartQuantity, SetCartQuantity }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const toggleSidebar = () => setIsSidebarOpen(oldIsSidebarOpen => !oldIsSidebarOpen)
    const toggleCart = () => setIsCartOpen(oldIsCartOpen => !oldIsCartOpen)

    return (
        <>
            <nav className="sticky top-0 z-20 max-w-[80rem] mx-auto bg-white desktop:max-[1000px]:w-[96%] desktop:w-[90%] desktop:max-w-[1200px]">
                <div className="flex justify-between items-center px-4 pt-4 pb-6 desktop:items-start desktop:pt-6 desktop:pb-0 desktop:min-h-[80px]">
                    <div className="flex items-center mt-2 desktop:items-start">
                        <button className="desktop:hidden" onClick={toggleSidebar}>
                            <img src={menu} className="pr-3" alt="Menu" />
                        </button>
                        <a href=" ">
                            <img src={logo} alt="Brand logo" />
                        </a>
                        <ul className="hidden box-content ml-6 text-sm text-dark-grayish-blue desktop:flex desktop:min-h-[60px]">
                            <a href=" " className="flex items-start border-orange desktop:hover:border-b-4">
                                <li>Collections</li>
                            </a>
                            <a href=" " className="ml-3 flex items-start border-orange desktop:hover:border-b-4">
                                <li>Men</li>
                            </a>
                            <a href=" " className="ml-3 flex items-start border-orange desktop:hover:border-b-4">
                                <li>Women</li>
                            </a>
                            <a href=" " className="ml-3 flex items-start border-orange desktop:hover:border-b-4">
                                <li>About</li>
                            </a>
                            <a href=" " className="ml-3 flex items-start border-orange desktop:hover:border-b-4">
                                <li>Contact</li>
                            </a>
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <button className="relative pr-5" onClick={toggleCart}>
                            { CartQuantity > 0 && <p className="absolute top-[-10px] right-2 py-[0.5px] px-[8px] text-white font-semibold rounded-full bg-orange text-xs">{CartQuantity}</p>}
                            <svg width="22" height="20" className="fill-[#69707D] desktop:hover:fill-black" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero" /></svg>
                        </button>
                        <img src={avatar} className="max-h-[1.5rem] desktop:max-h-[2.5rem] rounded-full hover:cursor-pointer hover:desktop:border-2 hover:desktop:border-orange" alt="Image Avatar" />
                    </div>
                    {isCartOpen && <Cart SetCartQuantity={SetCartQuantity} CartQuantity={CartQuantity} />}
                </div>
                <hr />
            </nav>
            <Sidebar IsSideBarOpen={isSidebarOpen} CloseSidebar={toggleSidebar}/>
        </>
    )
}

export default Nav

//Trying to adjust the max-height of the cart