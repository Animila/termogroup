// components/OfficeForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

const OfficeForm = () => {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const phone = watch('phone', '');
    const time = watch('time', '');
    const message = watch('message', '');

    const onSubmit = (data) => {
        // Логика отправки формы
        console.log('Форма отправлена', data);
    };

    const isFormValid = phone.replace(/[^0-9]/g, '').length === 11 && time;

    return (
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
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Выберите удобное для вас время"
                    {...register('time', { required: 'Введите удобное время' })}
                />
                {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
            </div>
            <div className="flex items-center">
                {/*<MessageSVG />*/}
                <input
                    type="text"
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
                Записаться на просмотр
            </button>
            <p className="mt-4 text-sm text-gray-500">
                Нажимая на кнопку, вы даёте согласие <a href="/terms" className="underline"> на обработку персональных данных</a>
            </p>
        </form>
    );
};

export default OfficeForm;
