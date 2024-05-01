import menu from "../assets/icon-menu.svg"
import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"
import avatar from "../assets/image-avatar.png"
const Nav = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-3 border-4 border-dotted border-red-950">
            <div className="flex items-center">
                <img src={menu} className="pr-3" alt="Menu" />
                <img src={logo} alt="Brand logo" />
            </div>
            <div className="flex items-center">
                <img src={cart} alt="Shopping Cart" />
                <img src={avatar} className="max-h-[1.5rem] pl-5" alt="Image Avatar" />
            </div>
        </nav>
    )
}

export default Nav