import {VisaSVG} from "../../public/icons/VisaSVG";
import {MastercardSVG} from "../../public/icons/MastercardSVG";
import {MirSVG} from "../../public/icons/MirSVG";
import {AndroidPay} from "../../public/icons/AndroidPay";
import {SamsungPaySVG} from "../../public/icons/SamsungPaySVG";
import {SberSVG} from "../../public/icons/SberSVG";
import {PhoneSVG} from "../../public/icons/PhoneSVG";
import {EmailSVG} from "../../public/icons/EmailSVG";
import {GeoSVG} from "../../public/icons/GeoSVG";
import Image from "next/image";

export const Footer = () => {
  return <div className="sm:gap-[30px] sm:pb-[30px] bg-gray_dark sm:px-[10px] sm:pt-[30px] md:pt-[80px] md:pb-[50px] md:px-[160px] flex sm:flex-col md:flex-row justify-between">
      <div className="flex flex-col gap-[30px] text-white">
          <h3 className="md:text-[40px] sm:text-[30px] sm:leading-[15px] md:leading-[28px]">TermoGroup Almaty</h3>
          <div className="text-[15px] leading-[28px]">
              <p>ТОО «Kaz-Fibra» © 2018-2024</p>
              <p>Производство и продажа термопанелей</p>
          </div>
          <a href="/terms" target="_blank" className="underline text-[15px] leading-[28px]">Политика конфиденциальности</a>
          <p className="text-[15px] leading-[28px] text-accent_one">Все права защищены</p>
          <div>
              <p className="text-[15px] leading-[28px] text-accent_one">Принимаем к оплате</p>
              <div className="flex items-center gap-2">
                  <VisaSVG />
                  <MastercardSVG />
                  <Image src={'/images/ForteBank.png'} alt={'fortebank'} height={25} width={25}/>
                  <Image src={'/images/halyk.png'} alt={'halyk'} height={25} width={25}/>
                  <Image src={'/images/jusan.png'} alt={'jusan'} height={25} width={25}/>
                  <Image src={'/images/kaspi.png'} alt={'kaspi'} height={25} width={25}/>
              </div>
          </div>
      </div>
      <div className="flex flex-col gap-[20px]">
          <div className="flex flex-row items-center gap-[16px]">
              <div className="w-[24px] flex flex-row items-center justify-center">
                  <PhoneSVG color={"#F22F05"}/>
              </div>
              <a href="tel:+77772096800" className="sm:text-[17px] md:text-[28px] leading-[38px] text-white">+7 777 209 68 00</a>
          </div>
          <div className="flex flex-row items-center gap-[16px]">
              <div  className="w-[24px] flex flex-row items-center justify-center">
                  <EmailSVG/>
              </div>
              <a href="mailto:kazfibra@gmail.com" className="text-accent_one text-[18px] leading-[30px]">{' '} kazfibra@gmail.com</a>
          </div>
          <div className="flex flex-row items-center gap-[16px]">
              <div className="w-[24px] flex flex-row items-center justify-center">
                  <GeoSVG/>
              </div>
              <span className="text-white text-[18px] leading-[23px]">Алматы, Улица Жангельдина 193г, 2 этаж</span>
          </div>
      </div>
  </div>
}