import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const wait = (time:number)=> {
    return new Promise(resolve => setTimeout(resolve, time));
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}