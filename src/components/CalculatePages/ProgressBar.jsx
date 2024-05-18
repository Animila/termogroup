import {useEffect, useRef} from "react";

export const ProgressBar = ({step}) => {

    const listRef = useRef(null);
    const progressBarRef = useRef(null);

    useEffect(() => {
        if(listRef != null) {
            const listItems = listRef.current.children;
            let totalWidth = 0;

            const next_item_html = step < listItems.length ? step : listItems.length - 1

            const first_item = listItems[0].getBoundingClientRect().x;
            const next_item = listItems[next_item_html].getBoundingClientRect().x;
            totalWidth = ((next_item + (listItems[next_item_html].offsetWidth / 2)) - (first_item + (listItems[0].offsetWidth/ 2))) ;
            console.log(`1 ${step} `, first_item + listItems[next_item_html].offsetWidth)
            console.log(`2 ${step} `, next_item + listItems[0].offsetWidth)
            console.log(`3 ${step} `, totalWidth)
            progressBarRef.current.style.width = `${totalWidth}px`;

        }
    }, [step])

    return <div  className={"text-white relative mt-[50px]"}>
        <ul ref={listRef} className="flex flex-row justify-between items-center before:h-[2px] before:w-[100%] z-10 before:z-0 before:absolute before:t-[50%] before:bg-gray">
            <li className="flex bg-main_one sm:w-[20px] sm:h-[20px] md:w-[40px] md:h-[40px] items-center justify-center rounded-3xl z-10">
                <span className="sm:hidden md:block">1</span>
            </li>
            <li className={`flex ${step >= 2 ? `bg-main_one text-white` : 'bg-gray text-accent_one'} sm:w-[20px] sm:h-[20px] md:w-[40px] md:h-[40px] items-center justify-center rounded-3xl z-10`}>
                <span className="sm:hidden md:block">2</span>
            </li>
            <li className={`flex ${step >= 3 ? `bg-main_one text-white` : 'bg-gray text-accent_one'} sm:w-[20px] sm:h-[20px] md:w-[40px] md:h-[40px] items-center justify-center rounded-3xl z-10`}>
                <span className="sm:hidden md:block">3</span>
            </li>
            <li className={`flex ${step >= 4 ? `bg-main_one text-white` : 'bg-gray text-accent_one'} sm:w-[20px] sm:h-[20px] md:w-[40px] md:h-[40px] items-center justify-center rounded-3xl z-10`}>
                <span className="sm:hidden md:block">4</span>
            </li>
            <li className={`flex ${step >= 5 ? `bg-main_one text-white` : 'bg-gray text-accent_one'} sm:w-[20px] sm:h-[20px] md:w-[40px] md:h-[40px] items-center justify-center rounded-3xl z-10`}>
                <span className="sm:hidden md:block">5</span>
            </li>
            <li className={`flex ${step >= 6 ? `bg-main_one text-white` : 'bg-gray text-accent_one'} sm:h-30px px-[26px] md:h-[40px] items-center justify-center rounded-3xl z-10`}>
                    <span className="sm:hidden md:block md:mr-[5px]">
                       Расчет +
                    </span>
                    <span>
                        скидка 5 %
                    </span>
            </li>
        </ul>
        <div ref={progressBarRef} className={`h-[2px] z-0 absolute top-[50%] bg-main_one`}></div>
    </div>
}