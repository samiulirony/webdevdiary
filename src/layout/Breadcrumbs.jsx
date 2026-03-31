import { GoFileDirectoryFill } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { SlDocs } from "react-icons/sl";


function Breadcrumbs() {

    return (
        <>
            {/* Breadcrumbs with Icons */}
            
            <div className="breadcrumbs pl-6">
                
                <ul>
                    <li><a><FaHome /></a></li>
                    <li><a><GoFileDirectoryFill /> Library</a></li>
                    <li><a><SlDocs /> daisyUI</a></li>
                </ul>
            </div>
            

        </>
    )
}

export default Breadcrumbs