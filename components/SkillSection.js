import { motion } from "framer-motion"

export default () => {
    return(
        <section id="skills" className="min-h-screen snap-end flex items-center">
            <motion.div initial={{ x:-100 }} whileInView={{ x: 0}} viewport={{ once:true}} transition={{ type:"spring", velocity:1}} className="hidden relative basis-2/4 py-8 box-border lg:flex justify-center">
                <img src="/assets/bot.png" className="object-contain h-[350px]"/>
            </motion.div>
            <div className="glass border-l-white/70 lg:basis-3/4 border-t-white/70 h-full p-10 space-y-4 shadow-sm">
                <span className="relative">
                    <motion.span
                        initial={{ width: '0%'}}
                        whileInView={{ width:'100%'}}
                        transition={{ duration:.4 }}
                        className="block absolute inset-1 -top-1 bg-sky-500"
                        aria-hidden="true"
                    ></motion.span>
                    <span className="relative text-6xl font-bold">What i do</span>
                </span>
                <p className="text-md md:text-xl font-bolder leading-8">
                    I love software development, frontend and backend. Here are some technologies i use								</p>
                <div className="space-x-6 flex gap-2 justify-center items-baseline flex-wrap">
                    <i className="devicon-python-plain text-5xl hover:text-yellow-500 text-gray-500"></i>
                    <i className="devicon-react-plain text-5xl hover:text-blue-500 text-gray-500"></i>
                    <i className="devicon-django-plain text-5xl hover:text-purple-900 text-gray-500"></i>
                    <i className="devicon-nextjs-plain text-5xl hover:text-black text-gray-500"></i>
                    <i className="devicon-vuejs-plain text-5xl hover:text-green-500 text-gray-500"></i>
                    <i className="devicon-git-plain text-5xl hover:text-red-500 text-gray-500"></i>
                    <i className="devicon-nodejs-plain text-5xl hover:text-green-500 text-gray-500"></i>
                    <i className="devicon-linux-plain text-5xl hover:text-purple-500 text-gray-500"></i>
                </div>
                <div class="text-md md:text-xl font-bolder leading-8 space-y-3">
                    <p> ⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications </p>
                    <p> ⚡ Develop performant Backend / API's </p>
                    <p> ⚡ Can design pages / Making prototypes </p>
                </div>
            </div>
        </section>
    )
}