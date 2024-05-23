'use client'
import {PhoneSVG} from "../../public/icons/PhoneSVG";
import {useModal} from "@/contexts/ModalContext";

export const Menu = () => {
  const {changeActivePhone} = useModal()

  return <div className="flex items-center justify-between sm:flex-col md:flex-row fixed top-0 left-0 z-50 h-[100px] w-full sm:px-[10px] md:px-[15vw] border-b-2 border-b-gray border-opacity-10 bg-white">
    <div className="flex items-center justify-center h-[100px] text-main_one">
      <a href="/" className="text-[30px] font-bold">TermoGroup</a> <sub className="text-[15px]">Алматы</sub>
    </div>
    <div className="flex flex-row items-center h-[50px]">
      <div className="flex flex-row items-center">
        <PhoneSVG />
        <a href="tel:+77772096800" className="ml-[10px] sm:text-[17px] md:text-[22px]">+7 777 209 68 00</a>
      </div>
      <div className="flex items-center justify-center sm:px-[10px] md:px-[30px] h-fit" onClick={() => {
        changeActivePhone()
      }}>
        Заказать звонок
      </div>
    </div>
  </div>
}

