import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { NextSVG } from "../../public/icons/NextSVG";
import { useInView } from "@/hooks/useInView";

export const Constructor = () => {
  const layout1 = [
    {
      image: '/images/layout1/1.jpg',
      color: '#22120C'
    },
    {
      image: '/images/layout1/2.jpg',
      color: '#503F35'
    },
    {
      image: '/images/layout1/3.jpg',
      color: '#0E1714'
    },
    {
      image: '/images/layout1/4.jpg',
      color: '#A87438'
    },
    {
      image: '/images/layout1/5.jpg',
      color: '#3E4641'
    },
    {
      image: '/images/layout1/6.jpg',
      color: '#752D1C'
    },
    {
      image: '/images/layout1/7.jpg',
      color: '#999F88'
    },
  ];
  const layout2 = [
    {
      image: '/images/layout2/1.jpg',
      type: 'Классика'
    },
    {
      image: '/images/layout2/2.jpg',
      type: 'Камень'
    },
    {
      image: '/images/layout2/4.jpg',
      type: 'Баварская'
    },
    {
      image: '/images/layout2/3.jpg',
      type: 'Скала'
    },
  ];
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [selectedIndex2, setSelectedIndex2] = useState(0);

  const handleNext = (selectedIndex, setSelectedIndex) => {
    if (selectedIndex < layout1.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = (selectedIndex, setSelectedIndex) => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const [ref1, isInView1] = useInView({ threshold: 0.1 });
  const [ref2, isInView2] = useInView({ threshold: 0.1 });

  return (
      <div className="bg-white sm:pt-[50px] md:pt-[84px] lg:px-[5vw] 2xl:px-[15vw] xl:pt-[84px] sm:pb-[20px] md:pb-[100px] sm:px-[10px]">
        <h2 className="md:font-bold sm:text-[27px] sm:leading-[100%] font-bold md:text-[64px] md:leading-[66px] text-center text-black">
          Простая и надежная
          <br />
          <span className="text-main_one">конструкция на ваш выбор</span>
        </h2>




        <div className="w-full grid grid-cols-12 items-center sm:mt-[35px] md:mt-[137px]">
          <div className="w-full sm:col-span-2 md:col-span-4 bg-gray h-[4px]" />
          <div className="w-full sm:col-span-8 md:col-span-4 h-[20px] flex items-center justify-center sm:gap-[11px] md:gap-[16px]">
            <Image src="/icons/layer1.svg" width={40} height={48} alt="1 слой" className='sm:scale-[0.6] md:scale-100' />
            <span className="sm:text-[20px] md:text-[30px] leading-[43px] text-main_one font-bold">СЛОЙ</span>
          </div>
          <div className="w-full sm:col-span-2 md:col-span-4 bg-gray h-[4px]" />
        </div>
        <motion.div
            ref={ref1}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="w-full grid sm:grid-cols-1 md:grid-cols-2 sm:mt-[26px] md:mt-[60px] sm:gap-[30px]"
        >
          <div className='flex flex-col md:gap-[50px]'>
            <div className='flex justify-center'>
              <Image className={'sm:scale-[0.8] sm:h-[300px] md:max-h-[343px]'} width={500} height={343} src={layout1[selectedIndex1].image} alt={'Слой'} />
            </div>
            <div className='flex flex-row justify-center gap-[22px]'>
              <button
                  onClick={() => handlePrev(selectedIndex1, setSelectedIndex1)}
                  disabled={selectedIndex1 === 0}
                  className={`w-[46px] h-[46px] rounded-full flex justify-center items-center ${selectedIndex1 === 0 ? 'bg-gray cursor-not-allowed' : 'bg-main_one'}`}
              >
                <NextSVG rotate={true} color={selectedIndex1 === 0 ? '#747F80' : 'white'} />
              </button>
              <div
                  style={{ background: layout1[selectedIndex1].color }}
                  className="w-[46px] h-[46px] rounded-full"
              ></div>
              <button
                  onClick={() => handleNext(selectedIndex1, setSelectedIndex1)}
                  disabled={selectedIndex1 >= layout1.length - 1}
                  className={`w-[46px] h-[46px] rounded-full flex justify-center items-center ${selectedIndex1 >= layout1.length - 1 ? 'bg-gray cursor-not-allowed' : 'bg-main_one'}`}
              >
                <NextSVG color={selectedIndex1 >= layout1.length - 1 ? '#747F80' : 'white'} />
              </button>
            </div>
          </div>
          <div className="text-black sm:gap-[20px] sm:grid sm:grid-cols-3 md:flex md:flex-col sm:items-center md:items-start">
            <Image src="/images/constructorLayer1.png" alt="пример" width={135} height={110} style={{objectFit:"cover"}} className='w-[135px]' />
           <div className="sm:col-span-2">
             <h3 className="md:mt-[36px] md:text-[29px] md:leading-[35px] sm:text-[16px] sm:font-bold">Декоративный слой</h3>
             <p className="sm:mt-[10px] md:mt-[23px] sm:text-[10px] md:text-[19px] sm:leading-[12px] md:leading-[24px] font-semibold text-accent_one md:text-start">
               Мы можем комбинировать имеющиеся у нас 12 цветов, которые позволят отличить фасад от других домов
             </p>
           </div>
          </div>
        </motion.div>

        <div className="w-full grid grid-cols-12 items-center sm:mt-[35px] md:mt-[60px]">
          <div className="w-full sm:col-span-2 md:col-span-4 bg-gray h-[4px]" />
          <div className="w-full sm:col-span-8 md:col-span-4 h-[20px] flex items-center justify-center sm:gap-[11px] md:gap-[16px]">
            <Image src="/icons/layer2.svg" width={40} height={48} alt="1 слой" className='sm:scale-[0.6] md:scale-100' />
            <span className="sm:text-[20px] md:text-[30px] leading-[43px] text-main_one font-bold">СЛОЙ</span>
          </div>
          <div className="w-full sm:col-span-2 md:col-span-4 bg-gray h-[4px]" />
        </div>
        <motion.div
            ref={ref2}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            variants={{
              hidden: {opacity: 0, y: 50},
              visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
            }}
            className="w-full grid sm:grid-cols-1 md:grid-cols-2 sm:mt-[26px] md:mt-[60px] sm:gap-[30px]"
        >
          <div className='flex flex-col gap-[50px]'>
            <div className='flex justify-center'>
              <Image className={'sm:scale-[0.8] sm:h-[300px] md:max-h-[343px]'} width={500} height={343}
                     src={layout2[selectedIndex2].image} alt={'Слой'}/>
            </div>
            <div className='flex flex-row justify-center gap-[22px]'>
              <button
                  onClick={() => handlePrev(selectedIndex2, setSelectedIndex2)}
                  disabled={selectedIndex2 === 0}
                  className={`w-[46px] h-[46px] rounded-full flex justify-center items-center ${selectedIndex2 === 0 ? 'bg-gray cursor-not-allowed' : 'bg-main_one'}`}
              >
                <NextSVG rotate={true} color={selectedIndex2 === 0 ? '#747F80' : 'white'}/>
              </button>
              <div
                  className="text-main_one flex justify-center items-center font-bold text-[20px]"
              >{layout2[selectedIndex2].type}</div>
              <button
                  onClick={() => handleNext(selectedIndex2, setSelectedIndex2)}
                  disabled={selectedIndex2 >= layout2.length - 1}
                  className={`w-[46px] h-[46px] rounded-full flex justify-center items-center ${selectedIndex2 >= layout2.length - 1 ? 'bg-gray cursor-not-allowed' : 'bg-main_one'}`}
              >
                <NextSVG color={selectedIndex2 >= layout2.length - 1 ? '#747F80' : 'white'}/>
              </button>
            </div>
          </div>
          <div className="text-black sm:gap-[20px] sm:grid sm:grid-cols-3 md:flex md:flex-col sm:items-center md:items-start">
            <Image src="/images/constructorLayer2.png" alt="пример" width={135} height={110} style={{objectFit:"cover"}} className='w-[135px]' />
            <div className="sm:col-span-2">
              <h3 className="md:mt-[36px] md:text-[29px] md:leading-[35px] sm:text-[16px] sm:font-bold">Слой фактуры</h3>
              <p className="sm:mt-[10px] md:mt-[23px] sm:text-[10px] md:text-[19px] sm:leading-[12px] md:leading-[24px] font-semibold text-accent_one md:text-start">
                Мы производим 4 варианта фактуры. Каждый имеет свои преимущества.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
  );
};
