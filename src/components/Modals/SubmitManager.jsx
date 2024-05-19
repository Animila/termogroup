export const SubmitManager = ({changeActive}) => {
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

    </div>
}