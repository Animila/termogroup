export const NextSVG = ({color, rotate}) => {
    return <svg width="10" height="13" transform={rotate && 'rotate(180)'} viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.599609 12.6996H3.97461L9.59961 6.39961L3.97461 0.0996094H0.599609L6.22461 6.39961L0.599609 12.6996Z"
              fill={color} />
    </svg>

}