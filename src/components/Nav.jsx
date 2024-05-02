import menu from "../assets/icon-menu.svg"
import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"
import Sidebar from "./Sidebar.jsx"
import { useState } from "react"

const Nav = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    console.log(isOpenSidebar)
    const toggleSidebar = ()=>setIsOpenSidebar(oldIsOpenSidebar => !oldIsOpenSidebar)
    return (
        <>
            <nav className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white">
                <div className="flex items-center">
                    <button onClick={toggleSidebar}>
                        <img src={menu} className="pr-3" alt="Menu" />
                    </button>
                    <img src={logo} alt="Brand logo" />
                </div>
                <div className="flex items-center">
                    <img src={cart} alt="Shopping Cart" />
                    <img src={avatar} className="max-h-[1.5rem] pl-5" alt="Image Avatar" />
                </div>
            </nav>
            {isOpenSidebar && <Sidebar CloseSidebar={toggleSidebar}/>}
        </>
    )
}

export default Nav