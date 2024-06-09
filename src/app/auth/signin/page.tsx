'use client';
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { TextField} from "@mui/material";
import Button from "@mui/material/Button";
import axiosInstance from "@/utils/axiosInstance";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {RESPONSE_STATUS} from "@/utils/enums";
import axios from "axios";

interface ICredentials {
    email: string
    password: string
}

const Page = () => {
    const [credentials, setCredentials] = useState<ICredentials>({
        email : '',
        password : ''
    });
    const router = useRouter();

    const handleLogin = () => {
        axiosInstance.post('/auth/login', credentials)
        .then((response)=>{
            if (response.status === RESPONSE_STATUS.SUCCESS){
                router.push('/app/help')
            }
        })

    }
    return (
        <div className={'w-full h-[80vh] px-[100px] pb-[30px]'}>
            <div className={' w-full h-full flex items-center border-solid border-gray-300 border-2  rounded-3xl overflow-hidden relative'}>
                <div className={' bg-blue-600 rounded-r-[50%] h-full w-[300px] mr-0 absolute'}></div>

                <div className={'w-[50%] h-full  relative z-[1000]'}><Image className={'hover:scale-105 transition-all duration-150 w-full mx-auto mt-[50px]'} width={100} height={50} src={'/images/signup.svg'}
                                                                            alt={'About us'}></Image></div>

                <Divider className={'bg-gray-300 h-[90%] my-auto'} orientation="vertical" flexItem />
                <div className={'w-[50%] h-full text-black px-[30px] py-[20px] flex flex-col'}>
                    <h2 className={'font-bold text-[30px] mt-[10px]'}>Sign In</h2>
                    <p className={'mt-[50px]'}>Sign in to explore and create exam papers from your favourite templates. If you {`don't`} have an account please <a href="#">Sign up</a></p>
                    <form action="" className={'flex-1 p-[10px] flex flex-col justify-around '}>
                        <TextField size={'small'} id="outlined-basic" label="Email" variant="outlined" onChange={(event)=>{
                            setCredentials({...credentials, email : event.target.value});
                        }}/>
                        <TextField size={'small'} id="outlined-basic" label="Password" variant="outlined" onChange={(event)=>{
                            setCredentials({...credentials, password : event.target.value});
                        }}/>
                        <p>Having trouble in <a href="#">sign in</a>?</p>
                        <Button className='bg-blue-600' variant='contained' onClick={handleLogin}>
                            Sign in
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;