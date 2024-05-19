import { useState, useEffect } from 'react';

export default function Form({ stock, onSave, setActiveForm, index, setCurrentStock }) {
    const [title, setTitle] = useState(stock.title || '');
    const [description, setDescription] = useState(stock.description || '');
    const [duration, setDuration] = useState(stock.duration || '')
    const [bgColor, setBgColor] = useState(stock.bgColor || '')

    useEffect(() => {
        setTitle(stock.title || '');
        setDescription(stock.description || '');
        setDuration(stock.duration || '');
        setBgColor(stock.bgColor || '');
    }, [stock]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...stock,
            title,
            description,
            duration,
            bgColor
        }, index);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 border-2 rounded-2xl p-4 relative">
            <div className='absolute top-[10px[ right-[10px] text-[20px] font-bold leading-[20px] cursor-pointer' onClick={() => {
                setActiveForm(false)
                setCurrentStock(null)
            }}>X</div>
            <h3 className='font-bold mb-4'>Форма</h3>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Заголовок</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Описание</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Длительность</label>
                <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Задний цвет</label>
                <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Сохранить
            </button>
        </form>
    );
}