import {useInView} from "@/hooks/useInView";
import { motion } from "framer-motion";

export const Video = () => {
    const [ref, isInView] = useInView({ threshold: 0.1 });
    return <div
        className="sm:pb-[30px] bg-gray_dark sm:px-[10px] sm:pt-[30px] md:pt-[40px] md:pb-[50px] md:px-[15vw] flex justify-center flex-col items-center">
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
            }}>
            <h2 className="sm:text-[40px] sm:text-center sm:leading-[35px] md:text-[78px] md:leading-[74px] my-[20px] text-white">Подробнее
                о наших термопанелях</h2>
            <iframe className='md:h-[315px] sm:h-[215px] sm:w-full md:w-[560px]' width="560" height="315"
                    src="https://www.youtube.com/embed/mIKhgLqVtpw?si=rc3M9svJgv6IvP9P"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </motion.div>
    </div>
}