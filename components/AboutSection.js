import { motion } from "framer-motion"

export default () => {
    return(
        <section className="lg:min-h-screen snap-end flex items-center mt-0 lg:-mt-28 ">
            <div className="glass border-l-white/70 lg:basis-3/4 border-t-white/70 h-full p-10 space-y-4 shadow-sm">
                <motion.h1 animate={{ y:[-50, 0]}} transition={{ duration:.3}} className="text-2xl md:text-5xl font-bold">Hi there, i'm Alioune</motion.h1>
                <motion.p animate={{ x:[-100, 0]}} transition={{ duration:.3}} className="text-md md:text-xl font-bolder leading-10">
                    A computer science student at ESP and Full-Stack developper
                    I love software development and learning new stuff. 
                    Web Dev is my favorite occupation! Want
                    to discuss regarding any project or just want to say a Hi? I
                    am always available to listen you 😁
                </motion.p>
                <motion.div initial={{ x:-100 }} whileInView={{ x: 0}} transition={{ duration:.3}} className="space-x-3">
                    <button className="glass text-lg shadow-lg py-2 px-6 rounded-3xl font-bolder bg-white/10 hover:bg-white/50">
                        Contact Me
                    </button>
                    <button className="glass text-lg shadow-lg py-2 px-6 rounded-3xl font-bolder bg-white/10 hover:bg-white/50">
                        Resume
                    </button>
                </motion.div>
            </div>
            <motion.div animate={{ x:[-50, 0], y:[50, 0] }} transition={{ duration:.3}} className="hidden relative basis-2/4 py-8 box-border lg:flex justify-center">
                <img src="/assets/bot.png" className="object-contain h-[350px]"/>
            </motion.div>
        </section>
    )
}