import {NextSVG} from "../../../../public/icons/NextSVG";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";

export const ThreePageCalculate = ({setStep, register, watch}) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(watch('size') != null && watch('size').trim() !== '')
  }, [watch('size')])

  return <motion.div
      className="sm:mt-[20px] md:mt-[50px] flex flex-col gap-[20px]"
      initial="hidden"
      animate="visible"
      variants={{
          hidden: {opacity: 0, y: 50},
          visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
      }}
  >
      <div className="flex flex-col sm:gap-[16px] md:gap-[20px]">
          <p className="text-black sm:text-[18px] font-bold md:text-[25px] md:leading-[32px]">Размеры дома?</p>
          <span className="text-black sm:text-[14px] font-semibold md:text-[17px] md:leading-[18px]">Введите размеры в кв. м.</span>
          <input className="text-[14px] leading-[17px] w-full text-black h-[60px] rounded-[10px] border-[1px] border-gray bg-transparent px-[20px]"
                 placeholder="Написать в кв. м." type={"number"} {...register("size")} />
      </div>
      <div className="flex flex-row md:gap-[20px] self-end">
          <button
              className="bg-gray text-white sm:px-[28px] sm:h-[30px] md:w-[170px] md:h-[50px]  flex justify-center items-center gap-[15px] self-end rounded-3xl"
              onClick={(e) => {
                  e.preventDefault()
                  setStep(prev => prev - 1)
              }}>
              <NextSVG rotate={true} color={'white'}/>
              <span className="sm:text-[12px] md:text-[20px] leading-[24px]">Назад</span>
          </button>
          <button disabled={!active}
                  className="disabled:text-accent_one disabled:bg-gray sm:ml-[20px] text-white bg-main_one sm:px-[28px] sm:h-[30px] md:w-[170px] md:h-[50px] flex justify-center items-center gap-[15px] self-end rounded-3xl"
                  onClick={(e) => {
                      e.preventDefault()
                      setStep(prev => prev + 1)
                  }}>
              <span className={`sm:text-[12px] md:text-[20px] leading-[24px] ${active ? 'text-white' : 'text-[#747F80]'}`}>Далее</span>
              <NextSVG color={active ? 'white' : '#747F80'}/>
          </button>
      </div>
  </motion.div>
}