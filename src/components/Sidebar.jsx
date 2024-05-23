import close from "../assets/icon-close.svg"
const Sidebar = ({ IsSideBarOpen , CloseSidebar }) => {
    const closeSidebar = (e)=>{
        e.currentTarget === e.target && CloseSidebar()
    }
    return (
        <aside onClick={(e)=>closeSidebar(e)} className={`${IsSideBarOpen ? "bg-black/75" : "delay-500 -translate-x-full"} fixed z-30 top-0 w-full h-full `}>
            <div className={`${IsSideBarOpen ? "animate-[slide-in_1s_ease-out] " : "animate-[slide-out_1s_ease-out] -translate-x-full"} w-[65%] h-full p-4 bg-white`}>
                <button onClick={CloseSidebar}>
                    <img src={close} alt="Close Sidebar" />
                </button>
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
            </div>
        </aside>
    )
}

export default Sidebar