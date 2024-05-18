import {PlaySVG} from "../../public/icons/PlaySVG";
import Image from "next/image";
const HeaderSection = ({setActiveVideo}) => {
  return <section className="sm:px-[10px] sm:mt-[20px] md:px-[100px] pb-[200px] md:mt-[100px] block bg-white relative">
    <div className="absolute
                    lg:right-[20px]
                    md:right-0 md:top-[70px] md:translate-x-0 md:overflow-x-hidden md:h-[450px]
                    sm:right-[50%] sm:top-[250px] sm:translate-x-[50%] z-0">
      <Image className="sm:absolute sm:w-[250px] sm:top-[40px] sm:right-[-50px] sm:z-30
                        md:static md:z-0
                        md:w-[300px]
                        lg:w-[400px]
                        xl:w-[600px]
                        2xl:w-[700px]
                        " src={'/images/panels/1_1.png'} alt={'Панель 1'} width={700} height={304} />
      <Image className="absolute
                        md:top-[70px] md:left-[100px] md:right-auto  z-20
                        sm:top-[20px] sm:left-auto sm:right-[60px] sm:w-[250px]
                        md:w-[300px]
                        lg:w-[400px]
                        xl:w-[600px]
                        2xl:w-[700px]" src={'/images/panels/1_2.png'} alt={'Панель 2'} width={700} height={304} />
      <Image className="sm:static sm:right-0 sm:w-[250px] sm:z-10
                        md:absolute md:top-[170px] md:left-[190px]  md:z-30
                        md:w-[300px]
                        lg:w-[400px]
                        xl:w-[600px]
                        2xl:w-[700px]" src={'/images/panels/1_3.png'} alt={'Панель 3'} width={700} height={304} />
    </div>
    <div className="pt-[100px] z-10">
      <span className="block sm:text-[25px] md:text-[28px] font-bold">Фасадные панели</span>
      <h1 className="block sm:text-[50px] md:text-[90px] font-black sm:leading-[30px] md:leading-[70px] text-main_one sm:mt-[10px] md:mt-[29px]">TermoGroup</h1>
      <span className="block sm:text-[25px] md:text-[28px] font-bold sm:mt-[15px] md:mt-[39px]">- созданы дарить тепло!</span>
    </div>
    <div className="md:pt-[64px] sm:pt-[150px] flex sm:flex-col sm:gap-[10px] md:flex-row md:gap-[30px] z-10">
      <div className="h-[100px] sm:border-b-2 sm:border-b-accent_one md:border-0 sm:gap-[20px] md:w-[188px] flex md:flex-col sm:flex-row sm:justify-center md:justify-start md:items-start sm:items-center">
        <div className="text-[29px] leading-[38px]">32</div>
        <div className="text-[15px] leading-[19px] mt-[4px] sm:w-[200px]">фактура декоративных панелей на выбор</div>
      </div>
      <div className="h-[100px] sm:border-b-2 sm:border-b-accent_one md:border-0 sm:gap-[20px] md:w-[188px] flex md:flex-col sm:flex-row sm:justify-center md:justify-start md:items-start sm:items-center">
        <div className="text-[29px] leading-[38px]">365</div>
        <div className="text-[15px] leading-[19px] mt-[4px] sm:w-[200px]">дней в году фасадные панели пригодны для монтажа</div>
      </div>
      <div className="h-[100px] sm:gap-[20px] md:w-[188px] flex md:flex-col sm:flex-row sm:justify-center md:justify-start md:items-start sm:items-center">
        <div className="text-[29px] leading-[38px]">{'>'}4</div>
        <div className="text-[15px] leading-[19px] mt-[4px] sm:w-[200px]">килограмм вес одной монтажной плиты</div>
      </div>
    </div>
    <div className="md:bottom-[200px] md:right-[100px] md:absolute z-10">
      <button className="w-[318px] h-[70px] flex justify-center sm:mx-auto items-center gap-[10px] bg-main_one rounded-[70px]">
        <span className="text-[18px] leading-[23px] tracking-[0.3px] text-white" onClick={() => {
          setActiveVideo(true)
        }} >Смотрите видео</span>
        <PlaySVG />
      </button>
    </div>
  </section>
}

export default HeaderSection