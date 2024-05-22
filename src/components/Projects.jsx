import Image from "next/image";

export const Projects = () => {
    const procjectsList = [
        {
            images: [
                '/images/projects/1_1.jpg',
                '/images/projects/1_2.jpg',
                '/images/projects/1_3.jpg'
            ],
            type: {
                sm: 2,
                price: '3800 тенге'
            },
            price: '604200 тенге'
        },
        {
            images: [
                '/images/projects/2_1.jpg',
                '/images/projects/2_2.jpg',
                '/images/projects/2_3.jpg'
            ],
            type: {
                sm: 3,
                price: '4600 тенге'
            },
            price: '630200 тенге'
        },
        {
            images: [
                '/images/projects/3_1.jpg',
                '/images/projects/3_2.jpg',
                '/images/projects/3_3.jpg'
            ],
            type: {
                sm: 3,
                price: '4600 тенге'
            },
            price: '731400 тенге'
        }
    ]
    return <div className='md:px-[160px] sm:px-[10px] mt-[65px]'>
        <div className='flex md:flex-row justify-between sm:flex-col'>
            <h3 className='text-[39px] leading-[43px]'>
                Реализовано<br/>
                <span className='text-main_one '>900 объектов</span> с 2019 года
            </h3>
            <div className='flex flex-row md:gap-[100px]'>
                <div className='flex flex-col'>
                    <div className='text-[56px] leading-[64px]'>900</div>
                    <div className='text-[20px] leading-[23px]'>Частных объектов</div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-[56px] leading-[64px]'>90</div>
                    <div className='text-[20px] leading-[23px]'>Коммерческих объектов</div>
                </div>
            </div>
        </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-12 gap-4 mt-8'>
                {procjectsList.map((item, index) => (
                    <div key={index} className='sm::col-span-1 md:col-span-4 bg-white shadow-lg rounded-lg overflow-hidden'>
                        <div className='relative w-full h-[200px]'>
                            <Image src={item.images[0]} alt={`Project image ${index + 1}`} layout="fill"
                                   objectFit="cover"/>
                        </div>
                        <div className='p-4'>
                            <div className='text-[16px] leading-[19px]'>Утепление</div>
                            <div className='text-[24px] leading-[28px]'>{item.type.sm} см²</div>
                            <div className='text-[16px] leading-[19px]'>Цена за м²</div>
                            <div className='text-[24px] leading-[28px]'>{item.type.price}</div>
                            <div className='text-[16px] leading-[19px] mt-4'>Итоговая цена</div>
                            <div className='text-[24px] leading-[28px] text-main_one'>{item.price}</div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
}