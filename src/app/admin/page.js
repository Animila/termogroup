'use client'
import { useState, useEffect } from 'react';
import Form from './form';
import {useRouter} from "next/navigation";

async function fetchStocks() {
    const res = await fetch('/api/stocks');
    return res.json();
}

export default function AdminPage() {
    const [stocks, setStocks] = useState([]);
    const [currentStock, setCurrentStock] = useState(null);
    const [activeForm, setActiveForm] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch('/api/check-auth');
            if (!res.ok) {
                router.push('/admin/login');
            }
        };
        checkAuth();

        fetchStocks().then(setStocks);
    }, [router]);

    const handleSave = async (stock) => {
        let updatedStocks;
        if (stock.id) {
            updatedStocks = stocks.map(s => (s.id === stock.id ? stock : s));
        } else {
            stock.id = stocks.length ? stocks[stocks.length - 1].id + 1 : 1;
            updatedStocks = [...stocks, stock];
        }

        await fetch('/api/stocks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedStocks),
        });
        setStocks(updatedStocks);
        setCurrentStock(null);
    };

    const handleDelete = async (id) => {
        const updatedStocks = stocks.filter(stock => stock.id !== id);
        await fetch('/api/stocks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedStocks),
        });
        setStocks(updatedStocks);
        setCurrentStock(null);
    };

    const handleEdit = (stock) => {
        setCurrentStock(stock);
    };

    const handleNew = () => {
        setCurrentStock(null);
        setActiveForm(true);
    };

    useEffect(() => {
        setActiveForm(currentStock != null);
    }, [currentStock]);

    return (
        <div className="mt-[120px] md:px-[160px] sm:px-[10px] min-h-[40vh]">
            <h1 className="text-2xl font-bold">Управление акциями</h1>

            <button onClick={handleNew} className="mr-2 bg-green-400 px-[20px] py-[10px] rounded-2xl hover:bg-green-700">Добавить</button>
            <h2 className="text-2xl font-bold mt-4">Список</h2>
            <ul>
                {stocks.map(stock => (
                    <li key={stock.id} className="mb-2">
                        <div className="flex justify-between items-center">
                            <span>Название: {stock.title}</span>
                            <div>
                                <button onClick={() => handleEdit(stock)} className="mr-2 text-indigo-600">Изменить</button>
                                <button onClick={() => handleDelete(stock.id)} className="text-red-600">Удалить</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {activeForm && <Form stock={currentStock || {}} setCurrentStock={setCurrentStock} setActiveForm={setActiveForm} onSave={handleSave} />}
        </div>
    );
}
