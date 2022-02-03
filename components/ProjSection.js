import { motion } from  "framer-motion"

export default () => {
    return(
        <section id="projects" className="flex flex-col items-center pb-10">
            <motion.span initial={{ y:-100 }} whileInView={{ y:0 }} transition={{ duration:.5 }} className="relative">
                <span
                    className="block absolute -inset-3 top-8 bg-orange-500"
                    aria-hidden="true"
                ></span>
                <span className="relative text-6xl font-bold">Projects</span>
            </motion.span>
            <motion.div initial={{ y:100 }} whileInView={{ y: 0 }} transition={{ duration:.5}} className="flex flex-wrap gap-2 text-lg  align-middle justify-center space-x-3 mt-8">
                <div className="repo-card" data-repo="Linzo99/senstream-api" ></div>
                <div className="repo-card" data-repo="Linzo99/MovieApp"></div>
                <div className="repo-card" data-repo="Linzo99/whatsapp_clone" ></div>
                <div className="repo-card" data-repo="Linzo99/MangaParser" ></div>
                <div className="repo-card" data-repo="Linzo99/TypeFast" ></div>
            </motion.div>
        </section>
    )
}