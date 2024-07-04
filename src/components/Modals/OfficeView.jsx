// components/ModalWindow.jsx
import React from 'react';
import Image from 'next/image';
import { useModal } from '@/contexts/ModalContext';
import OfficeForm from "@/components/Forms/Office";

export const OfficeModal = () => {
    const { changeActiveOffice } = useModal();

    return <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 sm:h-full max-h-full bg-black bg-opacity-40 cursor-pointer"
        onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            changeActiveOffice()
        }}
    >
        <div
            className="relative flex justify-center items-center sm:w-full md:w-auto md:h-auto sm:max-h-[100%] bg-white sm:px-[10px] md:px-[10px] cursor-auto md:py-[10px] sm:py-[10px]"
            onClick={(e) => e.stopPropagation()}
        >
            <button
                onClick={changeActiveOffice}
                className="absolute sm:top-[16px] sm:right-[16px] md:top-[-20px] md:right-[-20px] md:bg-white md:rounded-full md:w-[44px] md:h-[44px] flex justify-center items-center md:border-[1px] md:border-accent_two cursor-pointer"
            >
                <Image src={'/images/close-icon.png'} width={16} height={16} alt="close"/>
            </button>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col p-4">
                    <h2 className="text-2xl font-bold mb-4">Просмотр фактур</h2>
                    <p className="mb-4">
                        Просто напишите свой номер телефона и удобное время для просмотра. Мы все организуем.
                    </p>
                    <OfficeForm changeActiveOffice={changeActiveOffice}/>
                </div>
                <div className="p-4 sm:hidden md:block">
                    <Image src="/images/man_mini.jpg" alt="Manager" width={200} height={200}/>
                </div>
            </div>
        </div>
    </div>

};

export default OfficeModal;
