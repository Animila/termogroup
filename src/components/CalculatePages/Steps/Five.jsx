import {NextSVG} from "../../../../public/icons/NextSVG";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";

export const FivePageCalculate = ({setStep, register, watch, setValue}) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(watch('check') != null && watch('check').trim() !== '')
  }, [watch('check')])
  return <motion.div
      className="mt-[50px] flex flex-col gap-[20px]"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
      }}
  >
    <div className="flex flex-col gap-[20px]">
      <p className="text-white text-[30px] leading-[32px]">Толщина утеплителя?</p>
      <span className="text-white text-[17px] leading-[18px]">Выберите толщину утеплителя</span>
      <div className="grid grid-cols-2 gap-[20px]">
        <label onClick={() => setValue('check', 'Да')}
               className={`flex ${watch('check') === 'Да' ? 'bg-main_one text-white' : 'bg-transparent text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] h-[70px] px-[20px] py-[20px] `}>
          <div>Да</div>
        </label>
        <label onClick={() => setValue('check', 'Нет')}
               className={`flex ${watch('check') === 'Нет' ? 'bg-main_one text-white' : 'bg-transparent text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] h-[70px] px-[20px] py-[20px]`}>
          <div>Нет</div>
        </label>
      </div>
    </div>
    <div className="flex flex-row md:gap-[20px] self-end">
      <button
          className="bg-gray text-white w-[170px] h-[50px] flex justify-center items-center gap-[15px] self-end rounded-3xl"
          onClick={(e) => {
            e.preventDefault()
            setStep(prev => prev - 1)
          }}>
        <NextSVG rotate={true} color={'white'}/>
        <span className="text-[20px] leading-[24px]">Назад</span>
      </button>
      <button disabled={!active}
              className="disabled:text-accent_one disabled:bg-gray text-white bg-main_one w-[170px] h-[50px] flex justify-center items-center gap-[15px] self-end rounded-3xl"
              onClick={(e) => {
                e.preventDefault()
                setStep(prev => prev + 1)
              }}>
        <span className="text-[20px] leading-[24px]">Рассчитать</span>
        <NextSVG color={active ? 'white' : '#747F80'}/>
      </button>
    </div>
  </motion.div>
}