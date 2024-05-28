import Image from "next/image";

export const RightInfo = () => {
  return <div className="flex flex-col items-center text-white relative">
    <div className="mb-4 relative z-[1]">
      <div className='flex justify-center items-center z-0'>
        <Image
            src="/images/managerCircle.png" // Путь к вашему изображению
            alt="Ернур"
            width={220}
            height={220}

        />
      </div>
      <div className="text-center bg-[#333438] relative rounded-[16px] px-[50px] py-[15px] text-white mt-[-40px] z-10 inset-0">
        <div className="text-lg font-bold">Ернур</div>
        <div className="text-sm">Менеджер компании</div>
        <div className="text-sm">TermoGroup</div>
      </div>
    </div>
    <div className="text-center">
      <p className="md:text-[20px] md:leading-[20px] mb-4">После ответов на вопросы <span className="text-main_one">вы получите:</span></p>
      <ul className="space-y-[40px] justify-start">
        <li className="flex text-start">
          {/*<Image src="/images/icon1.png" alt="Icon 1" width={40} height={40} className="mr-2"/>*/}
          <span>1. Подбор фактуры и толщины фасадных панелей</span>
        </li>
        <li className="flex text-start">
          {/*<Image src="/images/icon2.png" alt="Icon 2" width={40} height={40} className="mr-2"/>*/}
          <span>2. Смету с точной стоимостью всех материалов и работ</span>
        </li>
        <li className="flex text-start">
          {/*<Image src="/images/icon3.png" alt="Icon 3" width={40} height={40} className="mr-2"/>*/}
          <span>3. Скидку 5% на фасадные панели полифасад</span>
        </li>
      </ul>
    </div>
  </div>
}