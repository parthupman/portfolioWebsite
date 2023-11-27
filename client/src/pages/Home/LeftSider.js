function LeftSider() {
    return (
        <div className="fixed left-0 bottom-0 px-10 sm:static ">
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-3 sm:flex-row">
                <a href="mailto:parthupman@gmail.com">
                    <i class=" ri-mail-fill text-gray-500 text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/parthupman/">
                <i class=" ri-linkedin-box-fill text-gray-500 text-2xl"></i>
                </a>
                <a href="https://github.com/parthupman"><i class="ri-github-fill text-gray-500 text-2xl"></i>
                </a>
                <a href="https://x.com/parth_upman?s=21"><i class="ri-twitter-fill text-gray-500 text-2xl"></i></a>
                
                <a href="https://www.facebook.com/parth.upman.1?mibextid=LQQJ4d"><i class="ri-facebook-box-fill text-gray-500 text-2xl"></i></a>

            </div>
            <div className="w-[1px] h-52 bg-[#125f63] sm:hidden">
            </div>
            </div>
        </div>
    )
}

export default LeftSider
