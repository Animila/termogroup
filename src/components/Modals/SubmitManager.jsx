import { motion } from "framer-motion";
import PhoneForm from "@/components/Forms/PhoneForm";
import { useModal } from "@/contexts/ModalContext";
import Image from "next/image";
import {useInView} from "@/hooks/useInView";

export const SubmitManager = () => {
    const { changeActivePhone } = useModal();
    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <motion.div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 sm:h-full max-h-full bg-black bg-opacity-40 cursor-pointer"
            onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                changeActivePhone();
            }}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
        >
            <div
                className="relative flex justify-center items-center sm:w-full md:w-auto md:h-auto sm:max-h-[100%] bg-white sm:px-[10px] md:px-[10px] cursor-auto md:py-[10px] sm:py-[10px]"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    onClick={() => {
                        changeActivePhone();
                    }}
                    className="absolute sm:top-[16px] sm:right-[16px] md:top-[-20px] md:right-[-20px] md:bg-white md:rounded-full md:w-[44px] md:h-[44px] flex justify-center items-center md:border-[1px] md:border-accent_two cursor-pointer"
                >
                    <Image src={'/images/close-icon.png'} width={16} height={16} alt="close"/>
                </div>
                    <PhoneForm changeActivePhone={changeActivePhone} />
            </div>
        </motion.div>
    );
};
