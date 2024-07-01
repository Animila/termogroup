import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export const Meeting = () => {
    const { changeActiveOffice } = useModal();
    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="bg-white lg:px-[5vw] 2xl:px-[15vw] sm:py-[20px] sm:px-[10px] md:pt-[78px] sm:pt-[20px]"
        >
            <div className="w-full bg-white md:min-h-[500px] sm:py-[20px] md:grid md:grid-cols-12 sm:flex sm:flex-col-reverse sm:justify-between">
                <div className="w-full sm:px-[10px] md:pl-[72px] sm:pt-[10px] md:pt-[45px] md:block sm:flex sm:items-center sm:flex-col md:col-span-7 span">
                    <h3 className="text-main_one sm:text-[20px] md:text-[60px] leading-[100%] font-black md:tracking-[-1px] w-full ">
                        Ознакомьтесь лично
                    </h3>
                    <h4 className="md:text-[30px] sm:text-[16px] font-bold md:leading-[100%] md:mt-[10px] w-full ">
                        с каждым из вариантов
                    </h4>
                    <p className="md:mt-[50px] sm:mt-[20px] font-semibold sm:text-[12px] sm:leading-[120%] md:text-[16px] md:leading-[22px] md:w-[550px] md:text-start">
                        Даже хорошие качественные фотографии не помогают принять окончательное решение.
                    </p>
                    <p className="md:mt-[26px] sm:mt-[10px] font-semibold sm:text-[12px] sm:leading-[120%] md:text-[16px] md:leading-[22px] md:w-[550px]  md:text-start">
                        У нас в офисе или на объекте вы сможете вживую оценить все фактуры и убедиться в качестве панелей.
                    </p>
                    <button
                        className="md:mt-[50px] sm:mt-[20px] bg-main_one md:h-[55px] md:w-[300px] flex justify-center items-center rounded-[70px] text-white font-semibold sm:text-[14px] md:text-[15px] leading-[19px] sm:py-[8px] sm:px-[50px] md:p-0"
                        onClick={() => {
                            changeActiveOffice();
                        }}
                    >
                        Просмотр фактур в офисе
                    </button>
                </div>
                <Image
                    src="/images/meeting_hands.png"
                    width={460}
                    height={500}
                    className="sm:hidden md:block md:w-[460px] md:col-span-5"
                    alt="Личная встреча с панелями"
                />
            </div>
        </motion.div>
    );
};
