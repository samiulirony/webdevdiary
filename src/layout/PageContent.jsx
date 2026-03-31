import { useState } from "react"
import { AiOutlineDatabase, AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai"
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb"

function PageContent() {
    // Dynamically Change Toggle Icon
    const [isOpen, setIsOpen] = useState(true);


    return (
        <>
            <div className="drawer drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" defaultChecked />
                <div className="drawer-content">

                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost" onClick={() => setIsOpen(!isOpen)}>

                            {/* Dynamically Change Toggle Icon for Sidebar */}

                            {
                                isOpen ? (
                                    <TbLayoutSidebarLeftCollapse size={20} style={{ color: '#364153' }} />
                                ) : (
                                    <TbLayoutSidebarLeftExpand size={20} style={{ color: '#364153' }} />
                                )
                            }
                        </label>

                        <div>
                            <div className="px-4">Page Title</div>
                        </div>
                    </nav>


                    {/* Page content here */}
                    <div className="p-4">



                    </div>

                </div>

                {/* Side Drawer */}
                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">

                        {/* Sidebar content here */}
                        <ul className="menu w-full grow">

                            {/* List item */}
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Getting Start">
                                    {/* Home icon */}
                                    <AiOutlineInfoCircle size={20} style={{ color: '#2196F3' }} />
                                    <span className="is-drawer-close:hidden font-bold uppercase">Getting Start</span>
                                </button>
                            </li>

                            {/* List item */}
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Components">
                                    {/* Home icon */}
                                    <AiOutlineDatabase size={20} style={{ color: '#2196F3' }} />
                                    <span className="is-drawer-close:hidden font-bold uppercase">Components</span>
                                </button>
                            </li>

                            {/* List item */}
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                    {/* Settings icon */}
                                    <AiOutlineSetting size={20} style={{ color: '#2196F3' }} />
                                    <span className="is-drawer-close:hidden font-bold uppercase">Settings</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageContent