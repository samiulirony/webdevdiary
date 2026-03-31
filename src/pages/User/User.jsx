import Breadcrumbs from "../../layout/Breadcrumbs"
import Footer from "../../layout/Footer"
import Sidebar from "../../layout/Sidebar"
import TopBar from "../../layout/TopBar"

function User() {
    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar */}
                <Sidebar />

                {/* Right Side */}
                <div className="flex-1 flex flex-col h-full">

                    {/* TopBar */}
                    <TopBar />

                    {/* Breadcrumbs */}
                    <Breadcrumbs />
                    

                    {/* Page Content Area : Scrollable */}
                    <main className="flex-1 overflow-y-auto p-2 bg-gray-200">
                        <div className="bg-white p-4 shadow">
                            
                            {/* Page Content Start Here */}
                            
                            <h2 className="text-xl font-bold">User Page</h2>
                            <p>Keep blank, copy this for others pages.</p>

                        

                        </div>
                    </main>

                    {/* Footer*/}
                    <Footer />
                </div>
            </div>


        </>
    )
}

export default User