import { FaCode } from "react-icons/fa"
import { GoFileDirectoryFill } from "react-icons/go"
import { MdOutlinePreview } from "react-icons/md"
import { SiGoogledocs } from "react-icons/si"
import { SlDocs } from "react-icons/sl"
import SidebarNavContent from "./daisyUI-Components/SidebarNavContent"



function DaisyUI() {

    return (
        <>



            {/* daisyUI Page Content Display Area  */}
            <div className="flex gap-2">
                <ul className="menu menu-xs bg-base-200 w-[25%] h-screen rounded-sm">
                    <li>
                        <details open>
                            <summary><GoFileDirectoryFill />daisyUI Libraries</summary>
                            <ul>
                                <li><a><SlDocs />Introduction</a></li>
                                <li><a><SlDocs />Installation</a></li>
                                <li><a><SlDocs />How to Use?</a></li>
                                <li>
                                    <details open>
                                        <summary>Components</summary>
                                        <ul>
                                            <li><a>Table</a></li>
                                            <li><a>Carousel</a></li>
                                            <li>
                                                <details open>
                                                    <summary>Mixed Dropdown</summary>
                                                    <ul>
                                                        <li><a>Screenshot3.png</a></li>
                                                        <li><a>Screenshot4.png</a></li>
                                                    </ul>
                                                </details>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </details>
                    </li>
                    {/* <li>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            Download Item.pdf
                        </a>
                    </li> */}
                </ul>

                <div className="w-[75%] bg-gray-100 rounded-sm">
                    <div className="m-2">
                        <h1 className="text info">Table</h1>
                    </div>

                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-lift m-2">
                        <label className="tab">
                            <input type="radio" name="my_tabs_4" />
                            <SiGoogledocs />Docs
                        </label>
                        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

                        <label className="tab">
                            <input type="radio" name="my_tabs_4" defaultChecked />
                            <FaCode /> Code
                        </label>
                        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

                        <label className="tab">
                            <input type="radio" name="my_tabs_4" />
                            <MdOutlinePreview /> View Output
                        </label>
                        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
                    </div>



                    <ul className="list bg-base-100 rounded-box shadow-md m-2">

                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>

                        <li className="list-row">
                            <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                            <div>
                                <div>Dio Lupa</div>
                                <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                            </div>
                            <button className="btn btn-square btn-ghost">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                            </button>
                            <button className="btn btn-square btn-ghost">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                            </button>
                        </li>


                    </ul>
                </div>
            </div>

        </>
    )
}

export default DaisyUI
