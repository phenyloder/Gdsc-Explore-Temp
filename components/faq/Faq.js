export default function Faq() {
    return(
        <>
            <div className="flex justify-center w-full">
                <div className="sm:px-6 flex flex-col sm:w-[80%] sm:py-14 w-full px-0 py-9 justify-center">
                    <h1 className="text-start text-[2rem] md:text-[48px] text-[#373F41] mb-5 text-center">FAQ</h1>
                    <div className="space-y-2">
                        <div className="m=0 p-5 bg-[#F9F9F9] sm:rounded-lg rounded-none">
                            <details>
                                <summary className="flex justify-between text-summary font-thin text-[#737B7D] hover:text-gray-800 hover:font-normal">How to add, edit or delete details from the profile</summary>
                                <p></p>
                            </details>
                        </div>
                        <div className="m=0 p-5 bg-[#F9F9F9] sm:rounded-lg rounded-none">
                            <details>
                                <summary className="flex justify-between text-summary font-thin font-normal text-[#737B7D] hover:text-gray-800 hover:font-normal">How do I create a blog?</summary>
                                <p></p>
                            </details>
                        </div>
                        <div className="m=0 p-5 bg-[#F9F9F9] sm:rounded-lg rounded-none">
                            <details>
                                <summary className="flex justify-between text-summary font-thin font-normal text-[#737B7D] hover:text-gray-800 hover:font-normal">How to check any other profile?</summary>
                                <p></p>
                            </details>
                        </div>
                        <div className="m=0 p-5 bg-[#F9F9F9] sm:rounded-lg rounded-none">
                            <details>
                                <summary className="flex justify-between text-summary font-thin font-normal text-[#737B7D] hover:text-gray-800 hover:font-normal">How to view the DSC Member Page and Website Developer page?</summary>
                                <p></p>
                            </details>
                        </div>
                        <div className="m=0 p-5 bg-[#F9F9F9] sm:rounded-lg rounded-none">
                            <details>
                                <summary className="flex justify-between text-summary font-thin font-normal text-[#737B7D] hover:text-gray-800 hover:font-normal">How are views on Blogs counted</summary>
                                <p></p>
                            </details>
                        </div>
                        <div className="m=0 p-5 bg-[#F9F9F9] sm:rounded-lg rounded-none">
                            <details>
                                <summary className="flex justify-between text-summary font-thin font-normal text-[#737B7D] hover:text-gray-800 hover:font-normal">How do I login if I forgot my password?</summary>
                                <p></p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}