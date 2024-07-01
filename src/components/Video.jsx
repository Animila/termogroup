import {useInView} from "@/hooks/useInView";
import { motion } from "framer-motion";

export const Video = () => {
    const [ref, isInView] = useInView({ threshold: 0.1 });
    return <div
        className="sm:pb-[30px] bg-white sm:px-[10px] sm:pt-[30px] md:pt-[40px] md:pb-[50px] lg:px-[5vw] 2xl:px-[15vw] flex justify-center flex-col items-center">
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
            }}>
            <h2 className="sm:text-[30px] sm:text-center sm:font-black md:font-bold sm:leading-[35px] md:text-[50px] my-[20px] text-black md:mb-[40px]">Подробнее
                о наших термопанелях</h2>
            <iframe className='md:h-[315px] sm:h-[215px] sm:w-full md:w-[560px] mx-auto' width="560" height="315"
                    src="https://www.youtube.com/embed/mIKhgLqVtpw?si=rc3M9svJgv6IvP9P"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </motion.div>
    </div>
}