import offers from '../data/offers.json';
import { motion } from 'framer-motion';
import { useInView } from "@/hooks/useInView";

export const SpecialOffers = () => {
    return (
        <div className='mt-[65px] md:px-[15vw] sm:px-[10px]'>
            <div className='text-center mb-8'>
                <h2 className='md:text-[78px] md:leading-[74px] sm:text-[35px] md:mb-[20px] sm:leading-[43px]'>Спецпредложения</h2>
                <p className='sm:text-[20px] leading-[20px] sm:leading-[23px] text-gray-600'>
                    и акции на фасадные панели TermoGroup
                </p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-12 gap-4'>
                {offers.map((offer, index) => {
                    const [ref, isInView] = useInView({ threshold: 0.1 });
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
                            className={`relative w-full md:col-span-6 bg-orange-500 sm:col-span-1 p-4 rounded-lg text-white`}
                            style={{ background: offer.bgColor }}
                        >
                            <div className='absolute inset-0 bg-opacity-50'>
                                {/*<Image src={offer.image} alt={offer.title} layout='fill' objectFit='cover' />*/}
                            </div>
                            <div className='relative z-10 p-4'>
                                <h3 className='text-[24px] sm:text-[32px] leading-[28px] sm:leading-[36px] font-bold'>{offer.title}</h3>
                                <p className='text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px]'>{offer.description}</p>
                                <div className='mt-4'>
                                    <div className='flex items-center'>
                                        <span className='text-[14px] sm:text-[16px] leading-[16px] sm:leading-[19px]'>Срок действия:</span>
                                        <span className='ml-2 text-[14px] sm:text-[16px] leading-[16px] sm:leading-[19px] font-semibold'>{offer.duration}</span>
                                    </div>
                                    <a href='#' className='text-[14px] sm:text-[16px] leading-[16px] sm:leading-[19px] mt-2 inline-block underline'>
                                        {offer.linkText}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
