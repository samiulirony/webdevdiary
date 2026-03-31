import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa"
import { TbHomeFilled, TbList, TbLogout2, TbSettings2 } from "react-icons/tb"
import { Link } from "react-router-dom"




function Sidebar() {
    return (
        <>
            {/* Sidebar Start Here*/}

            <aside className="w-64 h-screen bg-gray-800 text-white ">
                {/* Sidebar Header Fixed with Section Top */}
                <div className="bg-gray-200 h-[10%] flex items-center justify-center">
                    <img src="./applogo.png" alt="WEB Dev Diary" className="h-full shadow"></img>
                </div>

                {/* Sidebar Navigation Area with Scroll Opting */}
                <ul className="p-4 space-y-2 h-[80%] block overflow-y-auto">
                    <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                        <Link to="/">Dashboard</Link>
                    </li>
                    
                    <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                        <Link to="/introduction">Introduction</Link>
                    </li>

                    {/* Dropdown Menu Item */}
                    <li>
                        <details className="group">
                            <summary className="p-2 rounded cursor-pointer hover:bg-gray-700 flex justify-between items-center">
                                <Link to="/navigate-library">Navigate Library</Link>
                                {/* Icon changes on open */}
                                <span class="transition-transform duration-200">
                                    {/* Closed icon */}
                                    <span class="group-open:hidden font-bold"><FaArrowAltCircleDown /></span>
                                    {/* Open icon */}
                                    <span class="hidden group-open:inline font-bold"><FaArrowAltCircleUp /></span>
                                </span>
                            </summary>

                            <ul class="ml-4 mt-2 space-y-1 border-l-2 border-gray-300 pl-3">
                                <li><a class="block p-2 rounded cursor-pointer hover:bg-base-200">HTML</a></li>
                                <li><a class="block p-2 rounded cursor-pointer hover:bg-base-200">CSS</a></li>
                                <li><a class="block p-2 rounded cursor-pointer hover:bg-base-200">JavaScript</a></li>
                                <li><a class="block p-2 rounded cursor-pointer hover:bg-base-200">Tailwind CSS</a></li>
                                <li><a class="block p-2 rounded cursor-pointer hover:bg-base-200">daisyUI</a></li>
                            </ul>
                        </details>
                    </li>
                    {/* Dropdown End */}

                    <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                        <Link to="/blank-page">Blank Page</Link>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                        <Link to="/user">User</Link>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>

                {/* Sidebar Footer Fixed with Section End */}
                <div className="bg-gray-200 p-4 h-[10%] text-xl flex items-center justify-center">
                    <ul className="menu menu-horizontal">
                        <li><Link to="/"><TbHomeFilled size={24} color="#1E2939"/></Link></li>
                        <li><Link to="/navigate-library"><TbList size={24} color="#1E2939"/></Link></li>
                        <li><Link to="/settings"><TbSettings2 size={24} color="#1E2939"/></Link></li>
                        <li><Link to="/logout"><TbLogout2 size={24} color="#1E2939"/></Link></li>

                    </ul>
                </div>
            </aside>

            {/* Sidebar End Here*/}
        </>
    )
}

export default Sidebar