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
                        <GoSidebarCollapse size={15} />
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
                <div className="w-[30%] flex item-center ml-4 text-gray-800">
                    <label className="input input-secondary h-7 ">
                        
                        
                        <input type="search" required placeholder="Search Topics Here ...." />
                        <FaSearch className="absolute  text-gray-500 right-2" />
                    </label>
                </div>



                {/* Notification, User Menu, Button */}
                <div className=" flex flex-row gap-4 justify-end w-[30%] items-center">

                    <div className="flex">
                        <button class="btn btn-ghost btn-square btn-sm"><BsInfoSquare size={20} /></button>
                    </div>

                    {/* Notification*/}
                    <div className="flex">
                        <button className="btn btn-ghost btn-circle btn-sm">
                            <div className="indicator">
                                <IoIosNotificationsOutline size={25} />
                                <span className="badge badge-xs badge-warning indicator-item">3</span>
                            </div>
                        </button>
                    </div>

                    {/* User Menu: Profile. Settings and Logout */}
                    <div className="flex">
                        <div className="dropdown dropdown-end pr-2">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle avatar avatar-online">
                                <div className="w-8 rounded-full bg-gray-600">
                                    <img alt="Username" src="/src/images/user.png" className="p-0.5" />
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