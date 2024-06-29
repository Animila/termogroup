'use client'
import {PhoneSVG} from "../../public/icons/PhoneSVG";
import {useModal} from "@/contexts/ModalContext";
import Image from "next/image";

export const Menu = () => {
  const {changeActivePhone} = useModal()

  return <div className="flex items-center justify-between sm:flex-col md:flex-row fixed top-0 left-0 z-50 md:h-[100px] w-full sm:px-[10px] sm:pb-[20px] md:pb-0 lg:px-[5vw] 2xl:px-[15vw] border-b-2 border-b-gray border-opacity-10 bg-white">
    <div className="flex items-center justify-center text-main_one sm:mt-[20px] md:mt-0">
      <a href="/"><Image src={'/logo.png'} alt={'лого'} width={170} height={70} /></a>
    </div>
    <div className="flex sm:flex-col md:flex-row items-center">
      <a href="tel:+77772096800" className="md:ml-[10px] sm:text-[18px] md:text-[25px] font-semibold sm:mt-[25px] md:mt-0 text-main_one">+7 777 209 68 00</a>
      <div className="flex items-center justify-center sm:px-[10px] md:px-[30px] h-fit cursor-pointer font-bold text-[20px] sm:mt-[10px] md:mt-0" onClick={() => {
        changeActivePhone()
      }}>
        Заказать звонок
      </div>
    </div>
  </div>
}

