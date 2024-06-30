import {useEffect, useState} from "react";
import {NextSVG} from "../../../../public/icons/NextSVG";
import SelectSVG from "../../../../public/icons/SelectSVG";
import { motion } from "framer-motion";

export const TwoPageCalculate = ({setStep, register, watch, setValue}) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(watch('width') != null && watch('width').trim() !== '')
  }, [watch('width')])

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
      <p className="text-white sm:text-[18px] font-bold md:text-[25px] md:leading-[32px]">Толщина утеплителя?</p>
      <span className="text-white sm:text-[14px] font-semibold md:text-[17px] md:leading-[18px]">Выберите толщину утеплителя</span>
      <div className="grid grid-cols-2 gap-[20px]">
        <label onClick={() => setValue('width', '3 см')}
               className={`flex ${watch('width') === '3 см' ? 'border-main_one text-main_one' : 'border-accent_one text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] md:h-[70px] sm:px-[16px] md:px-[20px] sm:py-[16px] md:py-[20px]`}>
          <SelectSVG color={watch('width') === '3 см' ? '#F22F05' : '#747F80'}/>
          <div className='text-[14px] font-semibold'>3 см</div>
        </label>
        <label onClick={() => setValue('width', '4 см')}
               className={`flex ${watch('width') === '4 см' ? 'border-main_one text-main_one' : 'border-accent_one text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] md:h-[70px] sm:px-[16px] md:px-[20px] sm:py-[16px] md:py-[20px]`}>
          <SelectSVG color={watch('width') === '4 см' ? '#F22F05' : '#747F80'}/>
          <div className='text-[14px] font-semibold'>4 см</div>
        </label>
        <label onClick={() => setValue('width', '5 см')}
               className={`flex ${watch('width') === '5 см' ? 'border-main_one text-main_one' : 'border-accent_one text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] md:h-[70px] sm:px-[16px] md:px-[20px] sm:py-[16px] md:py-[20px]`}>
          <SelectSVG color={watch('width') === '5 см' ? '#F22F05' : '#747F80'}/>
          <div className='text-[14px] font-semibold'>5 см</div>
        </label>
        <label onClick={() => setValue('width', '3-5 см')}
               className={`flex ${watch('width') === '3-5 см' ? 'border-main_one text-main_one' : 'border-accent_one text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] md:h-[70px] sm:px-[16px] md:px-[20px] sm:py-[16px] md:py-[20px]`}>
          <SelectSVG color={watch('width') === '3-5 см' ? '#F22F05' : '#747F80'}/>
          <div className='text-[14px] font-semibold'>3-5 см</div>
        </label>
        <label onClick={() => setValue('width', '3.5-5 см')}
               className={`flex ${watch('width') === '3.5-5 см' ? 'border-main_one text-main_one' : 'border-accent_one text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] md:h-[70px] sm:px-[16px] md:px-[20px] sm:py-[16px] md:py-[20px]`}>
          <SelectSVG color={watch('width') === '3.5-5 см' ? '#F22F05' : '#747F80'}/>
          <div className='text-[14px] font-semibold'>3.5-5 см</div>
        </label>
      </div>
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
        <span className="sm:text-[12px] md:text-[20px] leading-[24px]">Далее</span>
        <NextSVG color={active ? 'white' : '#747F80'}/>
      </button>
    </div>
  </motion.div>
}