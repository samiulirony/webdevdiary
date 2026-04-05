import DashboardLaout from "../../layout/DashboardLaout"




function Blog() {
    return (
        <>
            <DashboardLaout>
                {/* Page content goes here. You can add your dashboard widgets, charts, and other components to display relevant information to the user. This area is flexible and can be customized based on your needs. */}
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Blog</h1>
                    <p className="text-gray-600">Welcome to the Blog page! Here you can find articles, tutorials, and insights related to web development. Stay tuned for regular updates and feel free to explore the content.</p>
                </div>
            </DashboardLaout>

        </>
    )
}

export default Blog