import { GoFileDirectoryFill } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { SlDocs } from "react-icons/sl";


function Breadcrumbs() {

    return (
        <>

            {/* BREADCRUMBS */}
            
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a><FaHome />Home</a></li>
                    <li><a><GoFileDirectoryFill />Library</a></li>
                    <li><a><SlDocs /> daisyUI</a></li>
                    <li className="font-medium text-base-content">Current Page</li>
                </ul>
            </div>
            


        </>
    )
}

export default Breadcrumbs