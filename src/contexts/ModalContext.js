'use client'
import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const ModalContext = createContext();

// Провайдер контекста
export const ModalProvider = ({ children }) => {
    const [activeVideo, setActiveVideo] = useState(false)
    const [activePhone, setActivePhone] = useState(false)
    const [activeOffice, setActiveOffice] = useState(false)

    const changeActiveVideo = () => {
        setActiveVideo(!activeVideo)
    }

    const changeActivePhone = () => {
        setActivePhone(!activePhone)
    }

    const changeActiveOffice = () => {
        setActiveOffice(!activeOffice)
    }

    return (
        <ModalContext.Provider value={{ activeVideo, activePhone, activeOffice, changeActiveVideo, changeActivePhone, changeActiveOffice,  }}>
            {children}
        </ModalContext.Provider>
    );
};

// Хук для использования контекста
export const useModal = () => useContext(ModalContext);
