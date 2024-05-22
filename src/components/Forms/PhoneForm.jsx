import React, { useState } from 'react';

const PhoneForm = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки номера телефона
    console.log('Номер телефона отправлен:', phone);
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Заказать звонок менеджера</h2>
      <p className="mb-4">Укажите свой номер телефона. Мы перезвоним вам в течение 5 минут и проконсультируем по продукции завода и текущим акциям</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="tel"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Введите свой номер телефона"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-main_one text-white py-2 rounded">Перезвоните мне</button>
      </form>
      <p className="mt-4 text-sm text-gray-500">Нажимая на кнопку, вы даёте согласие на обработку персональных данных</p>
    </div>
  );
};

export default PhoneForm;
