import Image from "next/image";

export const InformationVideo = ({changeActive}) => {

    return <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 sm:h-full max-h-full bg-black bg-opacity-40 cursor-pointer"
        onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            changeActive()
        }}
    >
        <div
            className="relative flex justify-center items-center sm:w-full md:w-auto md:h-auto sm:max-h-[100%] bg-white sm:px-[10px] md:px-[10px] cursor-auto md:py-[10px] sm:py-[10px]"
            onClick={(e) => e.stopPropagation()}>
            <div onClick={() => {
                changeActive()
            }}
                 className="absolute sm:top-[16px] sm:right-[16px] md:top-[-20px] md:right-[-20px] md:bg-white md:rounded-full md:w-[44px] md:h-[44px] flex justify-center items-center md:border-[1px] md:border-accent_two cursor-pointer">
                <Image src={'/images/close-icon.png'} width={16} height={16} alt={"close"}/>
            </div>
            <iframe className='md:h-[315px] sm:h-[215px] ' width="560" height="315" src="https://www.youtube.com/embed/mIKhgLqVtpw?si=rc3M9svJgv6IvP9P"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
}