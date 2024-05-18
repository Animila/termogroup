import {PhoneSVG} from "../../public/icons/PhoneSVG";

const Menu = () => {
  return <div className="flex items-center justify-between sm:flex-col md:flex-row fixed top-0 left-0 z-50 h-[100px] w-full sm:px-[10px] md:px-[100px] border-b-2 border-b-gray border-opacity-10 bg-white">
    <div className="flex items-center justify-center h-[100px] text-main_one">
      <a href="/" className="text-[30px] font-bold">TermoGroup</a> <sub className="text-[15px]">Алматы</sub>
    </div>
    <div className="flex flex-row items-center h-[50px]">
      <div className="flex flex-row items-center">
        <PhoneSVG />
        <a href="tel:+87772096800" className="ml-[10px] sm:text-[17px] md:text-[22px]">+8 777 209 68 00</a>
      </div>
      <div className="flex items-center justify-center sm:px-[10px] md:px-[30px] h-fit">
        Заказать звонок
      </div>
    </div>
  </div>
}

export default Menu