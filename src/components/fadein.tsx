'use client';
import {useEffect, useState} from "react";


const FaeIn = ({children, direction, identifier, autoPlay, duration, delay}
                   : {children: React.ReactNode; direction: string; identifier:string; autoPlay?: boolean; duration? : number, delay? : number})=> {

    const [animationPlayed, setAnimationPlayed] = useState(false);
    const [transitionValue, setTransitionValue] = useState(100);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(identifier);
            if (element) {
                const top = element?.getBoundingClientRect().top || 0;
                const isVisible = top >= 0 && top <= window.innerHeight;
                if ((isVisible && !animationPlayed) ) {
                    setTransitionValue(0)
                    setAnimationPlayed(true);
                }


            }
        };

        if (autoPlay){
            handleScroll();
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animationPlayed, autoPlay, identifier]);


    return (
        <div id={identifier} className={` transition-all  ${direction === 'rtl'? '' : '-'}translate-x-[${transitionValue}px] delay-300 duration-${duration??1000} ease-in-out opacity-${100-transitionValue} hover:opacity-100`}>{children}</div>
    );
}

export default FaeIn;