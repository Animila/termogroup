import {TelegramSVG} from "../../../../public/icons/TelegramSVG";
import {PhoneSVG} from "../../../../public/icons/PhoneSVG";
import {WhatsAppSVG} from "../../../../public/icons/WhatsAppSVG";
import {ViberSVG} from "../../../../public/icons/ViderSVG";
import {PeopleSVG} from "../../../../public/icons/PeopleSVG";
import {NextSVG} from "../../../../public/icons/NextSVG";
import {useEffect, useState} from "react";
import InputMask from 'react-input-mask';
import { motion } from "framer-motion";

export const EndPageCalculate = ({setStep, register, watch, setValue, isLoading}) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive((watch('name') && watch('name').trim() !== '') && (watch('phone') && watch('phone').trim() !== ''))
  }, [watch('name'), watch('phone')])

  return  <motion.div
      className="sm:mt-[20px] md:mt-[50px] flex flex-col gap-[20px] relative h-full"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
  >

      <div className="text-black sm:text-[18px] font-bold md:text-[25px] md:leading-[32px]">Как вам удобнее получить расчет и скидку?
      </div>
      <div className="sm:w-full md:w-[650px]">
        <div className="flex w-full flex-row sm:mt-[15px] md:mt-[30px]">
          <div
              onClick={() => setValue('social', 'telephone')}
              className={`flex ${watch('social') === 'telephone' ? 'bg-main_one' : 'bg-gray'} active:bg-main_one hover:bg-gray_dark justify-center items-center gap-[15px] w-full h-[70px] cursor-pointer`}>
            <PhoneSVG color="white"/>
            <span className="text-white text-[13px] leading-[18px] sm:hidden md:block">По телефону</span>
          </div>
          <div
              onClick={() => setValue('social', 'telegram')}
              className={`flex ${watch('social') === 'telegram' ? 'bg-main_one' : 'bg-gray'} active:bg-main_one hover:bg-gray_dark justify-center items-center gap-[15px] w-full h-[70px]  cursor-pointer`}>
            <TelegramSVG/>
            <span className="text-white text-[13px] leading-[18px] sm:hidden md:block">Telegram</span>
          </div>
          <div
              onClick={() => setValue('social', 'whatsapp')}
              className={`flex ${watch('social') === 'whatsapp' ? 'bg-main_one' : 'bg-gray'} active:bg-main_one hover:bg-gray_dark justify-center items-center gap-[15px] w-full  h-[70px] cursor-pointer`}>
            <WhatsAppSVG/>
            <span className="text-white text-[13px] leading-[18px] sm:hidden md:block">WhatsApp</span>
          </div>
          {/*<div*/}
          {/*    onClick={() => setValue('social', 'viber')}*/}
          {/*    className={`flex ${watch('social') === 'viber' ? 'bg-main_one' : 'bg-gray'} active:bg-main_one hover:bg-gray_dark justify-center items-center gap-[15px]  h-[70px] w-full cursor-pointer`}>*/}
          {/*  <ViberSVG/>*/}
          {/*  <span className="text-white text-[13px] leading-[18px] sm:hidden md:block">Viber</span>*/}
          {/*</div>*/}
        </div>
        <div className="mt-[30px]">
          <div className="flex border-gray border-[1px]">
            <label htmlFor="name" className="flex justify-center items-center px-[31px] py-[24px] md:w-[78px]">
              <PeopleSVG color={'black'}/>
            </label>
            <input id={"name"} type="text" className="text-[14px] leading-[17px] w-full text-black bg-transparent outline-0"
                   placeholder="Как к вам обращаться?"
                   {...register('name')}
            />
          </div>
          <div className="flex border-gray border-[1px]">
            <label htmlFor="phone" className="flex justify-center items-center px-[31px] py-[24px] md:w-[78px]">
              <PhoneSVG color={"black"}/>
            </label>
            <InputMask id={"phone"} placeholder="Введите свой номер телефона" {...register('phone')}
                       className="text-[14px] leading-[17px] w-full text-black bg-transparent outline-0" mask="+7(999)999-99-99"
                       maskChar=" "/>;
          </div>
        </div>
        <div className="mt-[60px] flex md:flex-row sm:flex-col items-center gap-[30px]">
          <button disabled={!active}
                  className={`flex ${active ? 'bg-main_one text-white' : 'bg-gray text-accent_one'} justify-center items-center w-[358px] h-[60px] rounded-[100px]  gap-[10px]`}>
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                <>
                  <span className="text-[19px] leading-[24px]">Получить расчет и скидку</span>
                  <NextSVG color={active ? "white" : "#747F80"}/>
                </>
            )}
          </button>
          <span className="text-accent_one text-wrap text-[13px] leading-[16px] w-[255px] ">Нажимая на кнопку, вы даете согласие
        <a href="/terms" className="underline"> на обработку персональных данных</a>
      </span>
        </div>
      </div>

  </motion.div>
}