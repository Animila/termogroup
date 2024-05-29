import { motion } from "framer-motion";
import { PlaySVG } from "../../public/icons/PlaySVG";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import {useModal} from "@/contexts/ModalContext";

export const HeaderSection = () => {
  const { changeActiveVideo } = useModal()

  const mobileImageVariants1 = {
    hidden: { opacity: 0, x: -50, y: -50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const mobileImageVariants2 = {
    hidden: { opacity: 0, x: 50, y: -50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.4 } },
  };

  const mobileImageVariants3 = {
    hidden: { opacity: 0, x: -50, y: 50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.6 } },
  };
  const desktopImageVariants1 = {
    hidden: { opacity: 0, x: -100, y: -100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const desktopImageVariants2 = {
    hidden: { opacity: 0, x: -100, y: -50 },
    visible: { opacity: 1, x: 0, y: -210, transition: { duration: 1, delay: 0.4 } },
  };

  const desktopImageVariants3 = {
    hidden: { opacity: 0, x: -100, y: 100 },
    visible: { opacity: 1, x: 0, y: -260, transition: { duration: 1, delay: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.8 } },
  };

  return (
      <motion.section
          initial="hidden"
          animate="visible"
          className="sm:px-[10px] sm:mt-[20px] md:mx-[15vw] pb-[70px] md:mt-[100px] block bg-white relative"
      >
        <div className="absolute lg:right-[20px] md:right-0 md:top-[70px] md:translate-x-0 md:overflow-x-visible md:h-[450px] sm:right-[50%] sm:top-[300px] sm:translate-x-[50%] z-0">
          <motion.div
              initial="hidden"
              animate="visible"
              variants={isMobile ? mobileImageVariants1 : desktopImageVariants1}
              viewport={{ once: true }}
          >
            <Image
                className="sm:absolute sm:top-[40px] sm:right-[-50px] sm:z-30 md:static md:z-0"
                src={"/images/panels/1_1.png"}
                alt={"Панель 1"}
                width={500}
                height={104}
            />
          </motion.div>
          <motion.div
              initial="hidden"
              animate="visible"
              variants={isMobile ? mobileImageVariants2 : desktopImageVariants2}
              viewport={{ once: true }}
          >
            <Image
                className="absolute md:top-[70px] md:left-[20px] md:right-auto z-20 sm:top-[20px] sm:left-auto sm:right-[60px]"
                src={"/images/panels/1_2.png"}
                alt={"Панель 2"}
                width={500}
                height={104}
            />
          </motion.div>
          <motion.div
              initial="hidden"
              animate="visible"
              variants={isMobile ? mobileImageVariants3 : desktopImageVariants3}
              viewport={{ once: true }}
          >
            <Image
                className="sm:static sm:right-0 sm:z-10 md:absolute md:top-[170px] md:left-[40px] md:z-30"
                src={"/images/panels/1_3.png"}
                alt={"Панель 3"}
                width={500}
                height={104}
            />
          </motion.div>
        </div>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            viewport={{ once: true }}
            className="pt-[100px] z-10"
        >
          <span className="block sm:text-[25px] md:text-[28px] font-bold">Фасадные панели</span>
          <h1 className="block sm:text-[50px] md:text-[70px] font-black sm:leading-[30px] md:leading-[70px] text-main_one sm:mt-[10px] md:mt-[29px]">№1 производитель <br/> термопанелей</h1>
          <span className="block sm:text-[25px] md:text-[28px] font-bold sm:mt-[15px] md:mt-[39px]">- созданы дарить тепло!</span>
        </motion.div>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            viewport={{ once: true }}
            className="md:pt-[64px] sm:pt-[150px] flex sm:flex-col sm:gap-[10px] md:flex-row md:gap-[30px] z-10"
        >
          <div className="h-[100px] sm:border-b-2 sm:border-b-accent_one md:border-0 sm:gap-[20px] md:w-[188px] flex md:flex-col sm:flex-row sm:justify-center md:justify-start md:items-start sm:items-center">
            <div className="text-[29px] leading-[38px]">32</div>
            <div className="text-[15px] leading-[19px] mt-[4px] sm:w-[200px]">фактура декоративных панелей на выбор</div>
          </div>
          <div className="h-[100px] sm:border-b-2 sm:border-b-accent_one md:border-0 sm:gap-[20px] md:w-[188px] flex md:flex-col sm:flex-row sm:justify-center md:justify-start md:items-start sm:items-center">
            <div className="text-[29px] leading-[38px]">365</div>
            <div className="text-[15px] leading-[19px] mt-[4px] sm:w-[200px]">дней в году фасадные панели пригодны для монтажа</div>
          </div>
          <div className="h-[100px] sm:gap-[20px] md:w-[188px] flex md:flex-col sm:flex-row sm:justify-center md:justify-start md:items-start sm:items-center">
            <div className="text-[29px] leading-[38px]">{">"}4</div>
            <div className="text-[15px] leading-[19px] mt-[4px] sm:w-[200px]">килограмм вес одной монтажной плиты</div>
          </div>
        </motion.div>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            viewport={{ once: true }}
            className=" mt-[25px] z-10"
        >
          {/*<button className="w-[318px] h-[70px] flex justify-center sm:mx-auto items-center gap-[10px] bg-main_one rounded-[70px]">*/}
          {/*<span*/}
          {/*    className="text-[18px] leading-[23px] tracking-[0.3px] text-white"*/}
          {/*    onClick={() => {*/}
          {/*      changeActiveVideo();*/}
          {/*    }}*/}
          {/*>*/}
          {/*  Смотрите видео*/}
          {/*</span>*/}
          {/*  <PlaySVG />*/}
          {/*</button>*/}
          <div className={'text-center font-bold md:text-[40px] sm:text-[30px] text-main_one'}>№1 ПРОИЗВОДИТЕЛЬ ТЕРМОПАНЕЛЕЙ НА МРАМОРНО-ПОЛИМЕРНОЙ ОСНОВЕ ПО ТУРЕЦКОЙ ТЕХНОЛОГИИ</div>
        </motion.div>
      </motion.section>
  );
};
