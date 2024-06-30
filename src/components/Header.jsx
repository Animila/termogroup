import { motion } from "framer-motion";
import { PlaySVG } from "../../public/icons/PlaySVG";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import {useModal} from "@/contexts/ModalContext";

export const HeaderSection = () => {
  const { changeActiveVideo } = useModal()

  const mobileImageVariants1 = {
    hidden: { opacity: 0, x: -100, y: -100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const mobileImageVariants2 = {
    hidden: { opacity: 0, x: -100, y: -50 },
    visible: { opacity: 1, x: 0, y: -70, transition: { duration: 1, delay: 0.4 } },
  };

  const mobileImageVariants3 = {
    hidden: { opacity: 0, x: -100, y: 100 },
    visible: { opacity: 1, x: 0,  y: -60, transition: { duration: 1, delay: 0.6 } },
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
          className="sm:px-[30px] sm:pt-[90px] lg:mx-[5vw] 2xl:mx-[15vw] pb-[70px] md:pt-[50px] block bg-white relative"
      >
        <div className="absolute lg:right-[20px] md:right-0 md:top-[150px] md:translate-x-0 md:overflow-x-visible md:h-[450px] sm:right-[50%] sm:top-[450px] sm:translate-x-[20%] z-0">
          <motion.div
              initial="hidden"
              animate="visible"
              variants={isMobile ? mobileImageVariants1 : desktopImageVariants1}
              viewport={{ once: true }}
          >
            <Image
                className="static z-0"
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
                className="absolute md:top-[70px] md:left-[20px] z-20 sm:top-[20px] sm:left-[40px] "
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
                className="absolute sm:top-[50px] md:top-[170px] sm:left-[80px] md:left-[40px] z-30"
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
            className="pt-[100px] z-10 relative"
        >
          <span className="block sm:text-[22px] md:text-[23px] font-bold">Фасадные панели</span>
          <h1 className="block sm:text-[27px] md:text-[50px] font-bold sm:leading-[25px] md:leading-[50px] text-main_one sm:mt-[10px] md:mt-[29px]">№1 производитель <br/> термопанелей на<br></br> мраморно-полимерной<br/> основе по турецкой <br/> технологии</h1>
          <span className="block sm:text-[22px] md:text-[23px] font-bold sm:mt-[15px] md:mt-[39px]"> созданы дарить тепло!</span>
        </motion.div>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            viewport={{ once: true }}
            className="md:pt-[64px] sm:pt-[250px] flex sm:flex-col sm:gap-[5px] md:flex-row md:gap-[30px] z-10"
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
      </motion.section>
  );
};
