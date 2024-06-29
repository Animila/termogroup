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
            className="bg-light_black lg:px-[5vw] 2xl:px-[15vw] sm:py-[20px] sm:px-[10px] md:pt-[78px] sm:pt-[20px]"
        >
            <div className="w-full bg-white md:min-h-[500px] sm:py-[20px] md:grid md:grid-cols-12 sm:flex sm:flex-col-reverse sm:justify-between">
                <div className="w-full sm:px-[10px] md:pl-[72px] pt-[45px] md:block sm:flex sm:items-center sm:flex-col md:col-span-7 span">
                    <h3 className="text-main_one sm:text-[40px] sm:leading-[50px] md:text-[64px] md:leading-[76px] font-bold md:tracking-[-1.3px] sm:text-center md:text-start">
                        Ознакомьтесь лично
                    </h3>
                    <h4 className="md:text-[37px] sm:text-[25px] font-bold sm:leading-[23px] md:leading-[32px] mt-[10px] sm:text-center md:text-start">
                        с каждым из вариантов
                    </h4>
                    <p className="md:mt-[50px] sm:mt-[20px] text-[17px] leading-[22px] md:w-[550px] sm:text-center md:text-start">
                        Даже хорошие качественные фотографии не помогают принять окончательное решение.
                    </p>
                    <p className="md:mt-[26px] sm:mt-[10px] text-[17px] leading-[22px] md:w-[550px] sm:text-center md:text-start">
                        У нас в офисе или на объекте вы сможете вживую оценить все фактуры и убедиться в качестве панелей.
                    </p>
                    <button
                        className="md:mt-[50px] sm:mt-[20px] bg-main_one h-[55px] w-[300px] flex justify-center items-center rounded-[70px] text-white text-[15px] leading-[19px]"
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
