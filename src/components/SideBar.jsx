import close from "../assets/icon-close.svg"
const SideBar = ()=>{
    return(
        <aside className="fixed top-0 w-[65%] h-full p-4 bg-red-900">
            <img src={close} alt="Close Sidebar" />
            <ul className="mt-8 font-semibold">
                <a href="">
                    <li>Collections</li>
                </a><a href="">
                    <li className="mt-2">Men</li>
                </a><a href="">
                    <li className="mt-2">Women</li>
                </a><a href="">
                    <li className="mt-2">About</li>
                </a><a href="">
                    <li className="mt-2">Contact</li>
                </a>
            </ul>
        </aside>
    )
}

export default SideBar