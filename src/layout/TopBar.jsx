import { BsInfoSquare } from "react-icons/bs"
import { FaSearch } from "react-icons/fa"
import { FaRegCircleUser } from "react-icons/fa6"
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go"
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { MdLogout } from "react-icons/md"
import { Link } from "react-router-dom"




function TopBar() {


    return (
        <>
            {/* Header as a Topbar */}
            <header className="bg-[#1E2939] text-white flex flex-row gap-2 justify-between items-center py-1">

                {/* Sidebar Toggle Option */}
                <div className="w-[10%] flex gap-2 pl-2">
                    <button className="btn btn-secondary btn-square btn-sm">
                        <GoSidebarCollapse size={22} />
                        {/* <GoSidebarExpand size={22} /> */}
                    </button>
                </div>

                {/* Navigation Menu */}
                <div className="flex flex-row gap-4 justify-center item-center w-[30%]">
                    {/* Extra Link, Dropdown Item, Menu */}
                    <div className="flex justify-center items-center gap-2">
                        <ul className="menu menu-horizontal px-1">
                            <li className="hover:bg-gray-700 rounded"><a>LINK</a></li>
                            <li className="dropdown dropdown-end hover:bg-gray-700 rounded">
                                <details>
                                    <summary tabIndex={0}>DROPDOWN</summary>
                                    <ul tabIndex="-1" className="bg-gray-700 rounded-b-sm rounded-t-none mt-3 w-40 p-2">
                                        <li className="hover:bg-gray-400 rounded-sm"><a>Navigation Link 1</a></li>
                                        <li className="hover:bg-gray-400 rounded-sm"><a>Navigation Link 2</a></li>
                                    </ul>
                                </details>
                            </li>

                        </ul>

                    </div>
                </div>


                {/* Search Option */}
                <div className="w-[30%] flex ustify-between items-center ml-4 text-gray-800">
                    <input type="text" placeholder="Search Anything Here...." className="input h-8" />
                    <button class="btn btn-square ml-2 h-8 btn-accent"><FaSearch /></button>
                </div>


                
                {/* Notification, User Menu, Button */}
                <div className=" flex flex-row gap-4 justify-end w-[30%] items-center">

                    <div className="flex">
                        <button class="btn btn-info btn-square btn-sm"><BsInfoSquare size={20} /></button>
                    </div>

                    {/* Notification*/}
                    <div className="flex">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <IoIosNotificationsOutline size={28} />
                                <span className="badge badge-sm badge-primary indicator-item">3</span>
                            </div>
                        </button>
                    </div>

                    {/* User Menu: Profile. Settings and Logout */}
                    <div className="flex">
                        <div className="dropdown dropdown-end pr-2">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full border-2 border-gray-400">
                                    <img alt="Username" src="/src/images/user.png" />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-md dropdown-content bg-gray-700 rounded-b-sm z-1 mt-2 mr-2 w-40 px-2 py-4">
                                
                                <li className="hover:bg-gray-400 rounded-sm">
                                    <Link to="/profile"><FaRegCircleUser />Profile</Link>
                                </li>
                                <li className="hover:bg-gray-400 rounded-sm">
                                    <Link to="/settings"><IoSettingsOutline />Settings</Link>
                                </li>
                                <li className="hover:bg-gray-400 rounded-sm">
                                    <Link to="/logout"><MdLogout />Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>

            </header>
        </>
    )
}

export default TopBar