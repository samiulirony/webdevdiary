function Accordion() {
    return (
        <>
        <div className="flex flex-row items-center mt-2 mb-5">
          <div className="flex bg-purple-900 w-[25%] justify-end">
            <p className="font-bold uppercase text-white mr-4">Components Library</p>
          </div>
          <div className="flex bg-blue-900 w-[75%] justify-normal">
            <p className="font-bold uppercase  text-white ml-4">Accordion Components using Tailwind CSS and Daisy UI</p>
          </div>
        </div>

        <div className="flex flex-row items-center container mx-auto mt-2 mb-5">
          <div className="flex bg-amber-700 w-[25%] justify-end">
            <p className="font-bold uppercase text-white mr-4">Variants</p>
          </div>
          <div className="flex bg-amber-300 w-[75%] justify-normal">
            <p className="font-bold uppercase  text-black ml-4">Accordion using Radio Inputs</p>
          </div>
        </div>
            <div className="container bg-red-300 mx-auto">
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </div>

        </>
    )
}

export default Accordion