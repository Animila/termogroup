import {useEffect, useState} from "react";
import {NextSVG} from "../../../../public/icons/NextSVG";
import SelectSVG from "../../../../public/icons/SelectSVG";

export const TwoPageCalculate = ({setStep, register, watch, setValue}) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(watch('width') != null && watch('width').trim() !== '')
  }, [watch('width')])

  return <div className="mt-[50px] flex flex-col gap-[20px]">
    <div className="flex flex-col gap-[20px]">
      <p className="text-white text-[30px] leading-[32px]">Толщина утеплителя?</p>
      <span className="text-white text-[17px] leading-[18px]">Выберите толщину утеплителя</span>
      <div className="grid grid-cols-2 gap-[20px]">
        <label onClick={() => setValue('width', '3 см')}
               className={`flex ${watch('width') === '3 см' ? 'border-main_one text-main_one' : 'border-accent_one text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] h-[70px] px-[20px] py-[20px]`}>
          <SelectSVG color={watch('width') === '3 см' ? '#F22F05' : '#747F80'}/>
          <div>3 см</div>
        </label>
        <label onClick={() => setValue('width', '4 см')}
               className={`flex ${watch('width') === '4 см' ? 'border-main_one text-main_one' : 'border-accent_one text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] h-[70px] px-[20px] py-[20px]`}>
          <SelectSVG color={watch('width') === '4 см' ? '#F22F05' : '#747F80'}/>
          <div>4 см</div>
        </label>
        <label onClick={() => setValue('width', '5 см')}
               className={`flex ${watch('width') === '5 см' ? 'border-main_one text-main_one' : 'border-accent_one text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] h-[70px] px-[20px] py-[20px]`}>
          <SelectSVG color={watch('width') === '5 см' ? '#F22F05' : '#747F80'}/>
          <div>5 см</div>
        </label>
        <label onClick={() => setValue('width', '3-5 см')}
               className={`flex ${watch('width') === '3-5 см' ? 'border-main_one text-main_one' : 'border-accent_one text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] h-[70px] px-[20px] py-[20px]`}>
          <SelectSVG color={watch('width') === '3-5 см' ? '#F22F05' : '#747F80'}/>
          <div>3-5 см</div>
        </label>
        <label onClick={() => setValue('width', '3.5-5 см')}
               className={`flex ${watch('width') === '3.5-5 см' ? 'border-main_one text-main_one' : 'border-accent_one text-accent_one'} items-center gap-[20px] border-[1px] rounded-[10px] h-[70px] px-[20px] py-[20px]`}>
          <SelectSVG color={watch('width') === '3.5-5 см' ? '#F22F05' : '#747F80'}/>
          <div>3.5-5 см</div>
        </label>
      </div>
    </div>
    <div className="flex flex-row gap-[20px] self-end">
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
              }} >
    <span className="text-[20px] leading-[24px]">Далее</span>
    <NextSVG color={active ? 'white' : '#747F80'}/>
  </button>
  </div>
</div>
}