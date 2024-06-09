'use client';
import Divider from "@mui/material/Divider";
import {Facebook, Instagram, LinkedIn} from "@mui/icons-material";
import Shake from "@/components/shake";

const Footer = () => {
    return (
       <>
           <Divider className={'bg-gray-300 w-[90%] mx-auto'} orientation="horizontal" flexItem />
           <div className={'w-full h-fit text-black flex justify-around py-[60px]'}>
               <div><Explore /></div>
               <div><Site /></div>
               <div><OtherProducts /></div>
               <div><Stats /></div>
           </div>
       </>
    );
}


export default Footer;

const Explore = () => {
    return (
        <div className={'flex flex-col font-bold gap-[20px]'}>
            <span className={'text-gray-500'}>Explore</span>
            <span>New templates</span>
            <span>Popular Templates</span>
            <span>Contributors</span>
        </div>
    );
}

const Site = () => {
    return (
        <div className={'flex flex-col font-bold gap-[20px]'}>
            <span className={'text-gray-500'}>Site</span>
            <span>License</span>
            <span>About</span>
            <span>Support</span>
            <span>Sponsors</span>
        </div>
    );
}

const OtherProducts = () => {
    return (
        <div className={'flex flex-col font-bold gap-[20px]'}>
            <span className={'text-gray-500'}>Other Products</span>
            <span>D+</span>
            <span>CacheDB</span>
        </div>
    );
}

const Stats = () => {

    return (
        <div className={'flex flex-col font-bold gap-[20px]'}>
            <span className={'text-[30px] text-blue-600'}>Your Logo<br/></span>
            <span className={'text-black'}><span className={'text-[30px]'}>76<br/></span> Template Files in Use</span>
            <span className={'text-black'}><span className={'text-[30px]'}>20<br/></span> Paper Downloads</span>
            <span className={'text-gray-500'}>Follow us</span>
            <span className={'flex'}>
                <Shake invert={true}><Instagram className={'text-[30px] hover:text-red-500 '}/></Shake>
                <Shake invert={false}><Facebook className={'text-[30px] hover:text-blue-600 '}/></Shake>
                <Shake invert={true}><LinkedIn className={'text-[30px] hover:text-blue-900 '}/></Shake>
                </span>
        </div>
    );
}