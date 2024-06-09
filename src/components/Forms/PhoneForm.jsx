import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

const PhoneForm = ({changeActivePhone}) => {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const phone = watch('phone', '');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await fetch('http://amoconnect.ru/amo-kazfibrapfz/api/slug/phone_manager', {
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
                    "lead_comment": `ЗАКАЗАЛ ЗВОНОК МЕНЕДЖЕРУ`
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                // Здесь можно добавить логику для закрытия окна, если требуется
                changeActivePhone()
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
        console.log('Номер телефона отправлен:', data.phone);
    };

    const isPhoneValid = phone.replace(/[^0-9]/g, '').length === 11;

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Заказать звонок менеджера</h2>
            <p className="mb-4">Укажите свой номер телефона. Мы перезвоним вам в течение 5 минут и проконсультируем по продукции завода и текущим акциям</p>
            {isSubmitted ? (
                <div className="text-green-500 text-xl font-semibold">
                    Спасибо! Ваша заявка принята. Мы перезвоним вам в течение 5 минут.
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <InputMask
                        id="phone"
                        placeholder="Введите свой номер телефона"
                        {...register('phone')}
                        className="w-full bg-transparent text-[17px] outline-0"
                        mask="+7(999)999-99-99"
                        maskChar=" "
                    />
                    <button
                        type="submit"
                        className={`w-full bg-main_one text-white py-2 rounded ${!isPhoneValid || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!isPhoneValid || isLoading}
                    >
                        {isLoading ? (
                            <div className="loader border-t-transparent border-4 border-white rounded-full w-5 h-5 mx-auto animate-spin"></div>
                        ) : (
                            'Перезвоните мне'
                        )}
                    </button>
                </form>
            )}
            <p className="mt-4 text-sm text-gray-500">Нажимая на кнопку, вы даёте согласие <a href="/terms" className="underline"> на обработку персональных данных</a></p>
        </div>
    );
};

export default PhoneForm;
