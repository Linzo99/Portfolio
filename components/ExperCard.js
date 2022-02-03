import { motion } from "framer-motion"

export default ({ data, name}) => {
    const { description, duration, siggle, techno, color, textColor } = data
    const items = {
        hidden:{
            x: 50,
            opacity: 0,
        },
        show:{
            x: 0,
            opacity: 1,
        }
    }
    return(
        <motion.div variants={items} viewport={{ once:true }} className="glass hover:bg-white/70 overflow-hidden">
            <div className={`h-40 ${color} flex justify-center items-center`}>
                <span className="text-white text-2xl">{ name }</span>
            </div>
            <div className="relative p-3 text-center space-y-4">
                <span id="logo" className={`shadow-md  w-14 h-14 p-10 flex justify-center items-center rounded-full absolute -top-10 bg-white ${textColor} text-5xl font-bold`} >{ siggle }</span>
                <h3 className="text-lg pt-4 text-center font-bold">{ techno }</h3>
                <span className="text-gray-700 text-sm">{ duration }</span>
                <p className="text-sm">
                    { description }
                </p>
            </div>
        </motion.div>

    )
}