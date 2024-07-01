// components/ScrollToAnchor.js
import { useEffect } from 'react';
import $ from 'jquery';
import { useRouter } from 'next/router';

const ScrollToAnchor = () => {
    const router = useRouter();

    useEffect(() => {
        const scrollToAnchor = () => {
            $('[href^="#"]').on('click', function(e){
                e.preventDefault();
                let href = $(this).attr('href');
                let elem = $(document).find(href);
                if(elem.length > 0) {
                    let posY = elem.eq(0).offset().top;
                    $('html, body').animate({
                        scrollTop: posY
                    }, 1000);
                }
            });
        };

        const handleRouteChange = () => {
            $(window).off('scroll');
            $('[href^="#"]').off('click');
        };

        scrollToAnchor();

        router.events.on('routeChangeComplete', scrollToAnchor);
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', scrollToAnchor);
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return null;
};

export default ScrollToAnchor;
