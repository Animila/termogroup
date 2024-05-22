// components/PhoneForm.jsx
import React, { useState } from 'react';

const OfficeForm = () => {
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Логика отправки формы
        console.log('Форма отправлена', { phone, time, message });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center">
                {/*<PhoneSVG />*/}
                <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Введите свой номер телефона"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className="flex items-center">
                {/*<ClockSVG />*/}
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Выберите удобное для вас время"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </div>
            <div className="flex items-center">
                {/*<MessageSVG />*/}
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Введите сообщение или вопрос"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button type="submit" className="w-full bg-main_one text-white py-2 rounded">
                Записаться на просмотр
            </button>
            <p className="mt-4 text-sm text-gray-500">
                Нажимая на кнопку, вы даёте согласие на обработку персональных данных
            </p>
        </form>
    );
};

export default OfficeForm;
