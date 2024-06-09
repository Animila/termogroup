// components/OfficeForm.jsx
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

const OfficeForm = ({changeActiveOffice}) => {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const phone = watch('phone', '');
    const time = watch('time', '');
    const message = watch('message', '');
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
                    "lead_name": "заказ с сайта (просмотр фактур)",
                    "contact_tags": {
                        "836831": 'telephone'
                    },
                    "contact_fields": {
                        "836831": 'telephone',
                        "66503": true
                    },
                    "lead_comment": `Сообщение: ${data.message}\nДата и время: ${new Date('2024-06-12T10:00').toLocaleDateString() + ' ' + new Date('2024-06-12T10:00').toLocaleTimeString()}`
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
                changeActiveOffice()
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
        console.log('Номер телефона отправлен:', data.phone);
    };

    const isFormValid = phone.replace(/[^0-9]/g, '').length === 11 && time;

    return (
        isSubmitted ? (
                <div className="text-green-500 text-xl font-semibold">
                    Спасибо! Ваша заявка принята. Скоро мы с вами свяжемся.
                </div>
            ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center">
                {/*<PhoneSVG />*/}
                <InputMask
                    id={"phone"}
                    placeholder="Введите свой номер телефона"
                    className="w-full p-2 border border-gray-300 rounded"
                    mask="+7 (999) 999-99-99"
                    onChange={(e) => setValue('phone', e.target.value)}
                    {...register('phone')}
                />
            </div>
            <div className="flex items-center">
                {/*<ClockSVG />*/}
                <input
                    type="datetime-local"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Выберите удобное для вас время"
                    {...register('time', { required: 'Введите удобное время' })}
                />
                {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
            </div>
            <div className="flex items-center">
                {/*<MessageSVG />*/}
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Введите сообщение или вопрос"
                    {...register('message')}
                />
            </div>
            <button
                type="submit"
                className={`w-full bg-main_one text-white py-2 rounded ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isFormValid}
            >
                {isLoading ? (
                    <div className="loader border-t-transparent border-4 border-white rounded-full w-5 h-5 mx-auto animate-spin"></div>
                ) : (
                    'Записаться на просмотр'
                )}
            </button>
            <p className="mt-4 text-sm text-gray-500">
                Нажимая на кнопку, вы даёте согласие <a href="/terms" className="underline"> на обработку персональных данных</a>
            </p>
        </form>
        )
    );
};

export default OfficeForm;
