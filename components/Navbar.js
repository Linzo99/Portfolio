
export default () => {
    const handleChange = ({ target }) => {
        let ele = document.getElementById(target.value)
        ele.scrollIntoView({ behavior:'smooth'})
    }
    return(
        <nav className="w-full md:w-[95%] max-w-screen-xl flex-col mx-auto relative -top-0 lg:-top-10 z-10 py-3 md:py-5 px-10 glass bg-white/70 flex lg:flex-row justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold">ALIOUNE SALL</h2>
            <div onChange={handleChange} className="flex space-x-2 text-sm  whitespace-nowrap md:text-[1rem] font-bold">
                <span className="flex items-center">
                    <input type="radio" value="about_me" defaultChecked className="appearance-none peer" name="nav-link" id="home" />
                    <label htmlFor="home" className="block transition duration-400 px-5 py-2 cursor-pointer hover:shadow rounded-3xl peer-checked:shadow hover:bg-white peer-checked:bg-white bg-transparent " >About Me</label>
                </span>
                <span className="flex items-center">
                    <input type="radio" value="skills" className="appearance-none peer" name="nav-link" id="about" />
                    <label htmlFor="about" className="block transition duration-400 px-5 py-2 cursor-pointer hover:shadow rounded-3xl peer-checked:shadow hover:bg-white peer-checked:bg-white bg-transparent " >Skills</label>
                </span>
                <span className="flex items-center">
                    <input type="radio" value="experience" className="appearance-none peer" name="nav-link" id="exp" />
                    <label
                        htmlFor="exp" className="block transition duration-400 px-5 py-2 cursor-pointer hover:shadow rounded-3xl peer-checked:shadow hover:bg-white peer-checked:bg-white bg-transparent " >Experiences</label>
                </span>
                <span className="flex items-center">
                    <input type="radio" value="projects" className="appearance-none peer" name="nav-link" id="proj" />
                    <label htmlFor="proj" className="block transition duration-400 px-5 py-2 cursor-pointer hover:shadow rounded-3xl peer-checked:shadow hover:bg-white peer-checked:bg-white bg-transparent ">Projects</label>
                </span>
            </div>
        </nav>

    )
}