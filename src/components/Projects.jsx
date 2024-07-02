import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import Contacts from "@/components/Contacts";

export const Projects = () => {
    const projectsList = [
        {
            images: [
                '/images/projects/1_1.jpg',
                '/images/projects/1_2.jpg',
            ],
            type: {
                sm: 2,
                price: '3800 тенге'
            },
            price: '604200 тенге'
        },
        {
            images: [
                '/images/projects/2_1.jpg',
                '/images/projects/2_2.jpg'
            ],
            type: {
                sm: 3,
                price: '4600 тенге'
            },
            price: '630200 тенге'
        },
        {
            images: [
                '/images/projects/3_1.jpg',
                '/images/projects/3_2.jpg'
            ],
            type: {
                sm: 3,
                price: '4600 тенге'
            },
            price: '731400 тенге'
        }
    ];

    return (
        <div className='lg:px-[5vw] 2xl:px-[15vw] sm:px-[10px] mt-[65px]'>
            <div className='flex md:flex-row justify-between sm:flex-col'>
                <h3 className='sm:text-[20px] md:text-[30px] sm:leading-[108%] font-bold md:leading-[108%]'>
                    Реализовано<br />
                    <span className='text-main_one '>900 объектов</span> с 2019 года
                </h3>
                <div className='flex flex-row sm:justify-around md:gap-[100px] sm:mt-[20px] md:m-0'>
                    <div className='flex flex-col'>
                        <div className='sm:text-[30px] md:text-[50px] sm:leading-[108%] md:leading-[45px]'>900</div>
                        <div className='sm:text-[12px] md:text-[17px] md:leading-[23px] font-bold'>Частных объектов</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='sm:text-[30px] md:text-[50px] sm:leading-[108%] md:leading-[45px]'>90</div>
                        <div className='sm:text-[12px] md:text-[17px] md:leading-[23px] font-bold'>Коммерческих объектов</div>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-12 gap-4 mt-8'>
                {projectsList.map((item, index) => {
                    const [ref, isInView] = useInView({ threshold: 0.1 });
                    const [currentImageIndex, setCurrentImageIndex] = useState(0);
                    const [isClickedBack, setIsClickedBack] = useState(false);
                    const [isClickedNext, setIsClickedNext] = useState(false);

                    const handleImageToggle = (item) => {
                        setCurrentImageIndex(item);
                        if(item === 0) {
                            setIsClickedBack(true);
                            setTimeout(() => setIsClickedBack(false), 500); // Reset after animation
                        } else {
                            setIsClickedNext(true);
                            setTimeout(() => setIsClickedNext(false), 500); // Reset after animation

                        }
                    };

                    return (
                        <motion.div
                            ref={ref}
                            key={index}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className='sm:col-span-1 md:col-span-4 bg-white shadow-lg rounded-lg overflow-hidden'
                        >
                            <div className='relative w-full h-[200px]'>
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className='absolute w-full h-full'
                                >
                                <Image src={item.images[currentImageIndex]} alt={`Project image ${index + 1}`} fill style={{objectFit:"cover"}} />
                                </motion.div>
                                <motion.button
                                    onClick={() => handleImageToggle(0)}
                                    className={`absolute bottom-4 left-4 text-white px-[20px] py-[5px] rounded`}
                                    animate={isClickedBack ? { scale: 1.1, backgroundColor: "#F22F05" } : { scale: 1, backgroundColor: "#F07100" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    До
                                </motion.button>
                                <motion.button
                                    onClick={() =>  handleImageToggle(1)}
                                    className={`absolute bottom-4 right-4 text-white px-[20px] py-[5px] rounded`}
                                    animate={isClickedNext ? { scale: 1.1, backgroundColor: "#F22F05" } : { scale: 1, backgroundColor: "#F07100" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    После
                                </motion.button>
                            </div>
                            <div className='p-4'>
                                <div className='text-[12px] font-bold '>Утепление</div>
                                <div className='text-[16px] font-bold '>{item.type.sm} см²</div>
                                <div className='text-[12px] font-bold mt-2'>Цена за м²</div>
                                <div className='text-[16px] font-bold'>{item.type.price}</div>
                                <div className='text-[12px] font-bold mt-4'>Итоговая цена</div>
                                <div className='text-[16px] font-bold text-main_one'>{item.price}</div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects