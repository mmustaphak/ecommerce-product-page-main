import menu from "../assets/icon-menu.svg"
import logo from "../assets/logo.svg"
import avatar from "../assets/image-avatar.png"
import Sidebar from "./Sidebar.jsx"
import { useState } from "react"

const Nav = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const toggleSidebar = () => setIsOpenSidebar(oldIsOpenSidebar => !oldIsOpenSidebar)
    const toggleCart = () => setIsCartOpen(oldIsCartOpen => !oldIsCartOpen)

    return (
        <>
            <nav className="sticky top-0 z-20 flex items-center justify-between p-4 bg-white">
                <div className="flex items-center">
                    <button className="min-[650px]:hidden" onClick={toggleSidebar}>
                        <img src={menu} className="pr-3" alt="Menu" />
                    </button>
                    <img src={logo} alt="Brand logo" />
                    <ul className="hidden ml-6 text-sm text-dark-grayish-blue min-[650px]:flex">
                        <a>
                            <li>Collections</li>
                        </a>
                        <a>
                            <li className="ml-3">Men</li>
                        </a>
                        <a>
                            <li className="ml-3">Women</li>
                        </a>
                        <a>
                            <li className="ml-3">About</li>
                        </a>
                        <a>
                            <li className="ml-3">Contact</li>
                        </a>
                    </ul>
                </div>
                <div className="flex items-center">
                    <button onClick={toggleCart}>
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero" /></svg>
                    </button>
                    <img src={avatar} className="max-h-[1.5rem] pl-5 min-[650px]:max-h-[2.5rem]" alt="Image Avatar" />
                </div>
                <div className={`${isCartOpen ? "absolute" : "hidden"} flex flex-col w-[92%] min-h-64 right2/4 -bottom-[475%] rounded-lg bg-white`}>
                    <h2 className="px-4 py-4 font-semibold">Cart</h2>
                    <hr />
                    <div className="m-auto">
                        <p className="font-semibold text-sm text-dark-grayish-blue">Your cart is empty.</p>
                    </div>
                </div>
            </nav>
            {isOpenSidebar && <Sidebar CloseSidebar={toggleSidebar} />}
        </>
    )
}

export default Nav