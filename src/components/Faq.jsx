'use client'
import { useState } from "react";
import Image from "next/image";
import { NextSVG } from "../../public/icons/NextSVG";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export const Faq = () => {
    const questions = [
        {
            "question": "Сколько служит фасад из термопанелей?",
            "answer": "Фасад из наших термопанелей, при грамотном монтаже, о котором можете ознакомиться на нашем сайте, прослужит вам не менее 50 лет! Панели обладают низкой теплопроводностью, поэтому в зимний сезон потери тепла при обогреве здания будут минимальными. Термопанели не впитывают воду, стойки к капризам погоды. Кроме этого, панели не деформируются и не изменяют форму, обеспечивая прекрасный внешний вид на долгое время!"
        },
        {
            "question": "Чем ваши термопанели отличаются от других?",
            "answer": "Наши термопанели имею следующие преимущества перед другими панелями: 1. Идеальная геометрия, позволяющая монтировать панели без заделки стыков 2. Надежное армирующее покрытие, которое скрепляет клинкерную плитку и основу панели в единое целое, которое не возможно разделить. 3. Низкая стоимость, достигнутая путем использования собственных технологий и научных разработок при производстве термопанелей"
        },
        {
            "question": "Как крепятся термопанели?",
            "answer": "Термопанели крепятся к стене при помощи специальной монтажной клей-пены. При необходимости, можно дополнительно закрепить панели дюбелями, но как показывает практика, этого не требуется. Монтаж на клей-пену позволяет быстро установить панели и утеплить дом"
        },
        {
            "question": "Опасны ли грызуны и насекомые для термопанели?",
            "answer": "Используемый в изготовлении термоизолирующего слоя пенополистирол, является высокотехнологичным материалом и не подвержен гниению, разложению, образованию грибка. Он не представляет интереса для грызунов и прочих вредителей, если он находится не внутри жилого помещения, а снаружи, на фасаде дома"
        },
        {
            "question": "Могут ли отвалиться кирпичики?",
            "answer": "Армирующим слоем термопанели служит специальный полимерный состав из мраморного песка, который монолитно залит на пенополистирол матричным способом. Расшивка и «кирпичики» являются единым неделимым армирующим слоем. Его невозможно отделить от утеплителя никаким образом"
        },
        {
            "question": "Можно самостоятельно установить их?",
            "answer": "Конечно, на это и рассчитаны наши термопанели! Их идеальная геометрия и технологичность позволяет без специальных навыков и квалификации просто собирать их, как пазлы, на фасаде. После монтажа стыки между термопанелями не видно, поэтому нет необходимости их заделывать. А в нашем разделе Инструкции, вы сможете изучить технологию монтажа термопанелей, чтобы все сделать быстро и качественно!"
        },
        {
            "question": "Нужно ли заделывать стыки после монтажа?",
            "answer": "Нет! И это кардинальное наше отличие от всех других видов термопанелей! Разработанная нами технология производства позволила изготавливать панели с ювелирной точностью и минимизировать стыки в местах соединения панели (около 0,5 мм), а пропенивание при монтаже исключает мостики холода. Например, в других панелях, где необходима затирка швов, вы дополнительно потратите до 3000 тенге только на работу по затирке одного квадратного метра!"
        },
        {
            "question": "На какие поверхности монтируется панели?",
            "answer": "Термопанели могут монтироваться на разные покрытия и поверхности: кирпич, бетон, дерево, газобетон, OSB, штукатурку и т. д. Также, благодаря высокой плотности и жесткости термопанели, их можно устанавливать на стены имеющие перепады, получая в итоге идеально ровную поверхность. Желательно, поверхность стен должна быть выровнена до монтажа, чтобы облегчить монтаж панелей и ускорить время установки"
        },
        {
            "question": "Как ремонтировать термопанели?",
            "answer": "Поврежденные термопанели ремонтируются без необходимости демонтажа тем же армирующим составом, которым покрыты панели"
        }
    ];

    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    const handleQuestionClick = (index) => {
        setSelectedQuestionIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedQuestionIndex(null);
    };

    return (
        <div className="sm:px-[10px] lg:px-[5vw] 2xl:px-[15vw] ">
            <h2 className="sm:text-[40px] sm:text-center sm:leading-[35px]  md:text-[64px] md:leading-[74px] my-[60px]">Частые вопросы</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-[32px]">
                {questions.map((item, index) => {
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
                            className='flex flex-col'
                        >
                            <div className="bg-accent_two rounded-br-[40px] rounded-tr-[40px] rounded-tl-[40px] rounded-bl-0 px-[45px] py-[22px] h-[118px] flex justify-center items-center text-[18px] leading-[24px]">
                                {item.question}
                            </div>
                            <button
                                onClick={() => handleQuestionClick(index)}
                                className="bg-main_three rounded-br-[40px] rounded-tr-[40px] rounded-tl-[40px] rounded-bl-0 px-[40px] py-[18px] w-fit text-white text-[18px] leading-[22px] mt-[8px]"
                            >
                                Ответ
                            </button>
                        </motion.div>
                    );
                })}
            </div>

            {selectedQuestionIndex !== null && (
                <div
                    id="default-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 sm:h-full max-h-full bg-black bg-opacity-40 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleCloseModal();
                    }}
                >
                    <div
                        className="relative md:max-w-[60%] sm:overflow-y-scroll sm:h-full sm:max-w-[100%] md:h-[80%] sm:max-h-[100%] bg-white sm:px-[10px] md:px-[57px] cursor-auto md:py-[60px] sm:py-[20px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            onClick={() => handleCloseModal()}
                            className="absolute sm:top-[16px] sm:right-[16px] md:top-[-20px] md:right-[-20px] md:bg-white md:rounded-full md:w-[44px] md:h-[44px] flex justify-center items-center md:border-[1px] md:border-accent_two cursor-pointer"
                        >
                            <Image src={'/images/close-icon.png'} width={16} height={16} alt={"close"} />
                        </div>
                        <div className="flex flex-col md:gap-[40px] sm:gap-[20px]">
                            <div>
                                <span className="text-accent_one text-[18px] font-bold">Вопрос</span>
                                <h3 className="text-[32px] font-bold mt-[20px]">
                                    {questions[selectedQuestionIndex].question}
                                </h3>
                            </div>
                            <div>
                                <span className="text-main_one text-[18px] font-bold">Ответ</span>
                                <p className="text-[18px] leading-[27px] mt-[20px]">
                                    {questions[selectedQuestionIndex].answer}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`sm:hidden absolute right-[-50%] md:max-w-[60%] sm:h-full sm:max-w-[100%] md:h-[80%] sm:max-h-[100%] bg-white sm:px-[10px] md:px-[57px] cursor-auto md:py-[60px] sm:py-[20px] ${selectedQuestionIndex < questions.length - 1 ? 'block' : 'hidden'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col md:gap-[40px] sm:gap-[20px]">
                            <div>
                                <span className="text-accent_one text-[18px] font-bold">Вопрос</span>
                                <h3 className="text-[32px] font-bold mt-[20px]">
                                    {selectedQuestionIndex < questions.length - 1 ? questions[selectedQuestionIndex + 1].question : ''}
                                </h3>
                            </div>
                            <div>
                                <span className="text-main_one text-[18px] font-bold">Ответ</span>
                                <p className="text-[18px] leading-[27px] mt-[20px]">
                                    {selectedQuestionIndex < questions.length - 1 ? questions[selectedQuestionIndex + 1].answer : ''}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`sm:hidden absolute left-[-50%] md:max-w-[60%] sm:h-full sm:max-w-[100%] md:h-[80%] sm:max-h-[100%] bg-white sm:px-[10px] md:px-[57px] cursor-auto md:py-[60px] sm:py-[20px] ${selectedQuestionIndex > 0 ? 'block' : 'hidden'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col md:gap-[40px] sm:gap-[20px]">
                            <div>
                                <span className="text-accent_one text-[18px] font-bold">Вопрос</span>
                                <h3 className="text-[32px] font-bold mt-[20px]">
                                    {selectedQuestionIndex > 0 ? questions[selectedQuestionIndex - 1].question : ''}
                                </h3>
                            </div>
                            <div>
                                <span className="text-main_one text-[18px] font-bold">Ответ</span>
                                <p className="text-[18px] leading-[27px] mt-[20px]">
                                    {selectedQuestionIndex > 0 ? questions[selectedQuestionIndex - 1].answer : ''}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={(e) => {
                            if (selectedQuestionIndex > 0) {
                                setSelectedQuestionIndex(prev => prev - 1);
                            }
                            e.stopPropagation();
                        }}
                        className={`z-10 absolute sm:bottom-[10px] md:top-[50%] sm:left-[10px] md:left-28 ${selectedQuestionIndex === 0 ? 'bg-gray' : 'bg-main_one'} h-[60px] w-[60px] rounded-full flex justify-center items-center`}
                    >
                        <NextSVG rotate={true} color={selectedQuestionIndex === 0 ? "gray" : "white"} />
                    </button>
                    <button
                        onClick={(e) => {
                            if (selectedQuestionIndex < questions.length - 1) {
                                setSelectedQuestionIndex(prev => prev + 1);
                            }
                            e.stopPropagation();
                        }}
                        className={`z-10 absolute sm:bottom-[10px] md:top-[50%] sm:right-[10px] md:right-28 ${selectedQuestionIndex === questions.length - 1 ? 'bg-gray' : 'bg-main_one'} h-[60px] w-[60px] rounded-full flex justify-center items-center`}
                    >
                        <NextSVG color={selectedQuestionIndex === questions.length - 1 ? "gray" : "white"} />
                    </button>
                </div>
            )}
        </div>
    );
};
