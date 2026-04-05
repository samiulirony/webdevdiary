import { AiFillDashboard } from "react-icons/ai"
import { IoLibrarySharp } from "react-icons/io5"
import { RiArticleFill } from "react-icons/ri"
import { TbHomeFilled, TbInfoOctagonFilled, TbList, TbLogout2, TbSettings2 } from "react-icons/tb"
import { Link } from "react-router-dom"




function Sidebar() {
    return (
        <>
            {/* ===================== SIDEBAR ===================== */}
            <div className="drawer-side flex flex-col min-h-screen border-r-2 border-gray-300">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-open"></label>

                {/* Sidebar Brand/Logo */}
                <div className=" flex flex-col items-center justify-center w-full h-[18%] bg-gray-200 border-b-2 border-gray-300 sticky top-0">
                    <img src="../../public/favicon.png" alt="WEB DEV DIARY" className="w-13 h-13 mx-2" />
                    <span className="text-sm font-bold p-2 text-[#1E2939]">WEB DEV DIARY</span>
                </div>

                {/* Sidebar Navigation Area with Scroll Opting */}
                <div className="w-full flex flex-col h-[71%] overflow-auto bg-gray-100">
                    <ul className="menu w-full font-semibold flex flex-col">
                        <li className="cursor-pointer mt-2">
                            <Link to="/"><AiFillDashboard size={20} />Dashboard</Link>
                        </li>

                        <li className="cursor-pointer mt-1">
                            <Link to="/introduction"><TbInfoOctagonFilled size={20} />Introduction</Link>
                        </li>

                        <li className="cursor-pointer mt-1">
                            <Link to="/blog"><RiArticleFill size={20} />Blog</Link>
                        </li>

                        <li className="cursor-pointer mt-1">
                            <Link to="/services"> <TbList size={20} />Services</Link>
                        </li>

                        {/* Dropdown Menu Item */}
                        <li className="dropdown dropdown-start">
                            <details className="group">
                                <summary className="cursor-pointer mt-1">
                                    <IoLibrarySharp size={20} />
                                    <li>Library</li>
                                    {/* Icon changes on open */}

                                </summary>

                                <ul class="border-l-2 my-2 p-2 bg-[#E8E8E8] border-gray-300">
                                    <li><a class="block cursor-pointer">HTML</a></li>
                                    <li><a class="block cursor-pointer">CSS</a></li>
                                    <li><a class="block cursor-pointer">JavaScript</a></li>
                                    <li><a class="block cursor-pointer">Tailwind CSS</a></li>
                                    <li><a class="block cursor-pointer">daisyUI</a></li>
                                </ul>
                            </details>
                        </li>
                        {/* Dropdown End */}



                    </ul>
                </div>

                {/* Sidebar Footer Fixed */}
                <div className="bg-gray-200 flex items-center justify-center w-full h-[11%] sticky bottom-0 z-50 border-t-2 border-gray-300">
                    <ul className="menu menu-horizontal">
                        <li><Link to="/"><TbHomeFilled size={24} color="#1E2939" /></Link></li>
                        <li><Link to="/services"><TbList size={24} color="#1E2939" /></Link></li>
                        <li><Link to="/settings"><TbSettings2 size={24} color="#1E2939" /></Link></li>
                        <li><Link to="/logout"><TbLogout2 size={24} color="#1E2939" /></Link></li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar