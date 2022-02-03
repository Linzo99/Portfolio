
export default () => {
    return(
        <footer className="relative mt-2 md:mt-0 md:space-x-0 md:fixed inset-y-0 md:right-[3.5rem] flex md:flex-col space-x-2 md:space-y-2 justify-center">
            <span className="glass bg-white/70 w-12 h-12 flex justify-center items-center rounded-full">
                <a href="https://github.com/Linzo99" target="_blank">
                    <i className="devicon-github-original text-black text-lg"></i>
                </a>
            </span>
            <span className="glass bg-white/70 w-12 h-12 flex justify-center items-center rounded-full">
                <a href="https://twitter.com/sallalioune28" target="_blank">
                    <i className="devicon-twitter-original text-blue-500 text-lg"></i>
                </a>
            </span>
            <span className="glass bg-white/70 w-12 h-12 flex justify-center items-center rounded-full">
                <a href="" target="_blank">
                    <i className="devicon-linkedin-plain text-blue-700 text-lg"></i>
                </a>
            </span>
        </footer>
    )
}