import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NextSVG } from "../../../../public/icons/NextSVG";
import {useInView} from "@/hooks/useInView";

const OnePageCalculate = ({ setStep, register, watch }) => {
    const [active, setActive] = useState(false);
    const [ref, isInView] = useInView({ threshold: 0.1 });


    useEffect(() => {
        setActive(watch('city') != null && watch('city').trim() !== '');
    }, [watch('city')]);

    return (
        <motion.div
            ref={ref}
            className="mt-[50px] flex flex-col gap-[20px]"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
        >
            <div className="flex flex-col gap-[20px]">
                <p className="text-white text-[25px] leading-[32px]">В каком городе вы находитесь?</p>
                <span className="text-white text-[17px] leading-[18px]">Введите населенный пункт</span>
                <input className="w-full text-white h-[60px] rounded-[10px] border-[1px] border-gray bg-transparent px-[20px]" placeholder="Населенный пункт" {...register("city")} />
            </div>
            <button disabled={!active} className="disabled:text-accent_one disabled:bg-gray text-white bg-main_one w-[170px] h-[50px] flex justify-center items-center gap-[15px] self-end rounded-3xl"
                    onClick={(e) => {
                        e.preventDefault();
                        setStep(prev => prev + 1);
                    }}>
                <span className="text-[20px] leading-[24px]">Далее</span>
                <NextSVG color={active ? 'white' : '#747F80'} />
            </button>
        </motion.div>
    );
};

export default OnePageCalculate;
