import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { PhoneSVG } from "../../public/icons/PhoneSVG";
import InputMask from "react-input-mask";
import { EmailSVG } from "../../public/icons/EmailSVG";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export const Contacts = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue
    } = useForm();

    const [active, setActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setActive((watch('phone') && watch('phone').trim() !== '') && (watch('text') && watch('text').trim() !== ''));
    }, [watch('phone'), watch('text')]);

    const [ref, isInView] = useInView({ threshold: 0.1 });


    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            console.log('3456 ', data)
            const response = await fetch('https://amoconnect.ru/amo-kazfibrapfz/api/slug/phone_manager', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "url": "https://termogroup.kz",
                    "phone": data.phone,
                    "lead_name": "заказ с сайта (звонок)",
                    "contact_tags": {
                        "836831": 'telephone'
                    },
                    "contact_fields": {
                        "836831": 'telephone',
                        "66503": true
                    },
                    "lead_comment": data.text
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
        console.log('Номер телефона отправлен:', data.phone);
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="bg-gray-100 rounded-md md:mx-[15vw] sm:px-[10px] md:mt-[100px] sm:mt-[40px]"
        >
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 items-center">
                <div className='flex justify-center items-end sm:hidden md:block'>
                    <Image src={'/images/manager.png'} alt="Евген" className="w-[350px]" width={400} height={500} />
                </div>
                <div>
                    <div className='sm:block md:hidden flex justify-center items-center z-0 rounded-full overflow-hidden'>
                        <Image
                            src="/images/managerCircle.png" // Путь к вашему изображению
                            alt="Ернур"
                            width={220}
                            height={220}
                            style={{
                                objectFit: "cover",
                                borderRadius: "200px", //👈 and here you can select border radius
                            }}
                        />
                    </div>
                    <h2 className="sm:text-[35px] md:text-[49px] leading-[50px] mb-4 sm:text-center md:text-start">
                        Отвечу на любые<br /> вопросы по телефону
                    </h2>
                    <div className='text-main_one flex flex-row gap-[11px]'>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_134_5995)">
                                <path
                                    d="M11.6733 22.3145C17.7485 22.3145 22.6733 17.3896 22.6733 11.3145C22.6733 5.23932 17.7485 0.314453 11.6733 0.314453C5.59821 0.314453 0.67334 5.23932 0.67334 11.3145C0.67334 17.3896 5.59821 22.3145 11.6733 22.3145Z"
                                    fill="#F22F05"
                                />
                                <path d="M11.6733 5.20312V11.3143L15.34 14.9809" stroke="#FAFAF9" strokeWidth="2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_134_5995">
                                    <rect width="22" height="22" fill="white" transform="translate(0.67334 0.314453)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div className='text-[20px]'>За 5 минут разговора мы с вами:</div>
                    </div>

                    <ul className="list-disc pl-5 mb-4 text-[20px] mt-[19px]">
                        <li>Подберем подходящий тип фасадных панелей</li>
                        <li>Рассчитаем точную стоимость с учетом доставки</li>
                        <li>Забронируем скидку 10% до конца апреля</li>
                    </ul>

                    <div className="mt-[30px]">
                        {isSubmitted ? (
                            <div className="text-green-500 text-xl font-semibold">
                                Спасибо! Ваша заявка принята. Мы перезвоним вам в течение 5 минут.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="flex border-gray border-[1px]">
                                    <label htmlFor="phone" className="flex justify-center items-center px-[31px] py-[24px] md:w-[78px]">
                                        <PhoneSVG color={'black'} />
                                    </label>
                                    <InputMask
                                        id="phone"
                                        type="text"
                                        className="w-full bg-transparent text-black text-[17px] outline-0"
                                        mask="+7(999)999-99-99"
                                        maskChar=" "
                                        placeholder="Введите телефон"
                                        {...register('phone')}
                                    />
                                </div>
                                <div className="flex border-gray border-[1px] mt-4">
                                    <label htmlFor="text" className="flex justify-center items-center px-[31px] py-[24px] md:w-[78px]">
                                        <EmailSVG />
                                    </label>
                                    <textarea
                                        id="text"
                                        placeholder="Введите сообщение или вопрос. Поле можно пропустить."
                                        {...register('text')}
                                        className="w-full bg-transparent text-black text-[17px] outline-0"
                                    />
                                </div>
                                <div className="mt-[27px] flex md:flex-row sm:flex-col items-center gap-[30px]">
                                    <button
                                        disabled={!active}
                                        type={'submit'}
                                        className={`flex ${active ? 'bg-main_one text-white' : 'bg-gray text-accent_one'} justify-center items-center w-[358px] h-[60px] rounded-[100px] gap-[10px]`}
                                    >
                                        {isLoading ? (
                                            <div className="loader border-t-transparent border-4 border-white rounded-full w-5 h-5 mx-auto animate-spin"></div>
                                        ) : (
                                            <span className="text-[19px] leading-[24px]">Получить консультацию</span>
                                        )}
                                    </button>

                                    <span className="text-accent_one text-wrap text-[13px] leading-[16px] w-[255px] ">
                                    Нажимая на кнопку, вы даете согласие
                                    <a href="/terms" className="underline"> на обработку персональных данных</a>
                                </span>
                                </div>
                            </form>
                        )}
                    </div>
                    <div className="flex flex-row items-center mt-[53px]">
                        <PhoneSVG color={'#F22F05'} />
                        <a href="tel:+77772096800" className="ml-[10px] sm:text-[17px] md:text-[22px]">+7 777 209 68 00</a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
