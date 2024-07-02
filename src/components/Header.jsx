import { motion } from "framer-motion";
import { PlaySVG } from "../../public/icons/PlaySVG";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import {useModal} from "@/contexts/ModalContext";
import Link from "next/link";

export const HeaderSection = () => {


  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.8 } },
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: isMobile ? window.scrollY + 200 : window.scrollY + 550, // Adjust the value as needed
      behavior: 'smooth',
    });
  };

  return (
      <motion.section
          initial="hidden"
          animate="visible"
          className="sm:px-[30px] sm:pt-[90px] lg:mx-[5vw] 2xl:mx-[15vw] pb-[70px] md:pt-[50px] block bg-white relative"
      >
        <div className='flex sm:flex-col md:flex-row md:items-end md:justify-between'>
          <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              viewport={{ once: true }}
              className="pt-[100px] z-10 relative"
          >
            <span className="block sm:text-[22px] md:text-[23px] font-bold">Фасадные панели</span>
            <h1 className="block sm:text-[27px] md:text-[50px] font-bold sm:leading-[25px] md:leading-[40px] text-main_one sm:mt-[10px] md:mt-[29px]">№1 производитель <br/> термопанелей <br/></h1>
            <span className="text-black font-semibold text-[30px] leading-[30px] "><br/>на мраморно-полимерной<br className='text-[10px] leading-0'/> основе по турецкой технологии</span>
            <span className="block sm:text-[22px] md:text-[23px] font-bold sm:mt-[15px] md:mt-[39px]"> созданы дарить тепло!</span>
          </motion.div>
          <motion.div
              initial="hidden"
              animate="visible"
              variants={ {
                hidden: { opacity: 0, x: -100, y: -100 },
                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.2 } },
              }}
              viewport={{ once: true }}
          >
            <Image
                className="mx-auto"
                src={"/images/home.jpg"}
                alt={"дом"}
                width={400}
                height={300}
            />
          </motion.div>
        </div>


        <div className="md:flex justify-between">
          <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              viewport={{ once: true }}
              className="md:pt-[64px] sm:pt-[50px] flex sm:flex-col sm:gap-[5px] md:flex-row md:gap-[30px] z-10"
          >
            <div className="sm:py-[5px] md:h-[100px] sm:gap-[20px] md:gap-0 sm:border-b-2 sm:border-b-accent_one md:border-0 md:w-[188px] flex md:flex-col sm:flex-row sm:justify-start md:justify-start md:items-start sm:items-center">
              <div className="text-[29px] leading-[38px] font-bold w-[50px]">32</div>
              <div className="text-[15px] leading-[19px] mt-[4px] sm:w-[200px] font-semibold md:text-[#a1a1a1]">фактура декоративных панелей на выбор</div>
            </div>
            <div className="sm:py-[5px] md:h-[100px] sm:gap-[20px] md:gap-0 sm:border-b-2 sm:border-b-accent_one md:border-0 md:w-[188px] flex md:flex-col sm:flex-row sm:justify-start md:justify-start md:items-start sm:items-center">
              <div className="text-[29px] leading-[38px] font-bold w-[50px]">365</div>
              <div className="text-[15px] leading-[19px] mt-[4px] sm:w-[200px] font-semibold md:text-[#a1a1a1]">дней в году фасадные панели пригодны для монтажа</div>
            </div>
            <div className="sm:py-[5px] md:h-[100px] sm:gap-[20px] md:gap-0 md:w-[188px] flex md:flex-col sm:flex-row sm:justify-start md:items-start sm:items-center">
              <div className="text-[29px] leading-[38px] font-bold w-[50px]">{">"}4</div>
              <div className="text-[15px] leading-[19px] mt-[4px] sm:w-[200px] font-semibold md:text-[#a1a1a1]">килограмм вес одной монтажной плиты</div>
            </div>
          </motion.div>
          <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              viewport={{ once: true }}
              className="sm:mt-[30px] md:mt-[70px] z-10"
          >

              <button className="sm:px-[25px] sm:py-[15px] md:w-[318px] md:h-[70px] flex justify-center sm:mx-auto items-center gap-[10px] bg-main_one rounded-[70px]">
          <span
              className="text-[20px] leading-[23px] tracking-[0.3px] text-white font-black"
              onClick={handleScrollDown}
          >
            Получить расчет
          </span>
              </button>
          </motion.div>
        </div>
      </motion.section>
  );
};
