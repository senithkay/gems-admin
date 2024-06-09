'use client';
import {useEffect, useState} from "react";
import {wait} from "@/utils/functions";

const Shake = ({children, invert}: {children: React.ReactNode; invert:boolean}) => {
    const factor = (invert)?-1 : 1 ;

    const [rotation, setRotation] = useState(0);
    useEffect(()=>{
        //rotate
        setInterval(async function() {
            setRotation(10*factor);
            await wait(200);
            setRotation(0);
            await wait(200);
            setRotation(-10);
            setRotation(10);
            await wait(100);
            setRotation(0);
            await wait(100);
            setRotation(-10);
            setRotation(10);
            await wait(200);
            setRotation(0);
            await wait(200);
            setRotation(-10);
            setRotation(10);
            await wait(100);
            setRotation(0);
            await wait(100);
            setRotation(0);
        }, 2000);

    },[factor])
    return (
        <div className={`text-[30px] cursor-pointer transform-gpu rotate-[${rotation*factor}deg] transition-all ease-in-out duration-200`}>
            {children}
        </div>
    )
}

export default Shake;