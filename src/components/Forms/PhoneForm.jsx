import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

const PhoneForm = () => {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const phone = watch('phone', '');

    const onSubmit = (data) => {
        // Логика отправки номера телефона
        console.log('Номер телефона отправлен:', data.phone);
    };

    const isPhoneValid = phone.replace(/[^0-9]/g, '').length === 11;

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Заказать звонок менеджера</h2>
            <p className="mb-4">Укажите свой номер телефона. Мы перезвоним вам в течение 5 минут и проконсультируем по продукции завода и текущим акциям</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <InputMask id={"phone"} placeholder="Введите свой номер телефона" {...register('phone')}
                           className="w-full bg-transparent text-[17px] outline-0" mask="+7(999)999-99-99"
                           maskChar=" "/>
                <button
                    type="submit"
                    className={`w-full bg-main_one text-white py-2 rounded ${!isPhoneValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isPhoneValid}
                >
                    Перезвоните мне
                </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">Нажимая на кнопку, вы даёте согласие <a href="/terms" className="underline"> на обработку персональных данных</a></p>
        </div>
    );
};

export default PhoneForm;
