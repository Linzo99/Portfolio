import { motion } from 'framer-motion'
import ExperCard from './ExperCard'

const data = {
    ESP:{
        techno: "React native + Firebase",
        duration: "April 2020 - Aout 2020",
        siggle: "E",
        description: "Realisation d'une application de mobile backing comme sujet de soutenance",
        color: "bg-blue-700/70",
        textColor: "text-blue-700/70"
    },
    Neoivent:{
        techno: "Full Stack Django",
        duration: "June 2021 - December 2021",
        siggle: "N",
        description: "Realisation d'un application pour la gestion des immobilisations d'un entreprise",
        color: "bg-black/70",
        textColor: "text-black/70"
    },
    CEE:{
        techno: "Nextjs + Nodejs",
        duration: "October 2021 - November 2021",
        siggle: "C",
        description: "Realisation d'une application pour la gestion des codifications au l'ESP de Dakar",
        color: "bg-sky-700/70",
        textColor: "text-sky-700/70"
    },
    E221:{
        techno: "React Developer",
        duration: "February 2022 - Present",
        siggle: "E2",
        description: "Stage de 3 mois ",
        color: "bg-orange-700/70",
        textColor: "text-orange-700/70"
    },
}

export default () => {
    const variants = {
        hidden: {
            opacity:1
        },
        show: {
            opacity:1,
            when:'beforeChildren',
            transition:{
                staggerChildren:.5,
                staggerDirection: -1
            }
        }
    }
    return(
        <section id="experience" className="min-h-screen snap-end flex flex-col items-center">
            <motion.span initial={{ y:-100 }} whileInView={{ y:0 }} viewport={{ once:true }} transition={{ duration:.5 }} className="relative">
                <span
                    className="block absolute -inset-3 top-8 bg-green-500"
                    aria-hidden="true"
                ></span>
                <span className="relative text-6xl font-bold">Experience</span>
            </motion.span>
            <motion.div initial="hidden" whileInView="show" variants={variants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full mt-10">
                { Object.keys(data).map( k => (
                    <ExperCard data={data[k]} name={k} key={k}/>
                ))}
            </motion.div>
        </section>
    )
}