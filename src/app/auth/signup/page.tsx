import Image from "next/image";
import Divider from "@mui/material/Divider";
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Apple, Facebook, Google} from "@mui/icons-material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const page = () => {
    return (
        <div className={'w-full h-[80vh] px-[100px] pb-[30px]'}>
            <div className={' w-full h-full flex items-center border-solid border-gray-300 border-2  rounded-3xl overflow-hidden relative'}>
                <div className={' bg-blue-600 rounded-r-[50%] h-full w-[300px] mr-0 absolute'}></div>

                <div className={'w-[50%] h-full  relative z-[1000]'}><Image className={'hover:scale-105 transition-all duration-150 w-full mx-auto mt-[50px]'} width={100} height={50} src={'/images/signup.svg'}
                            alt={'About us'}></Image></div>

                <Divider className={'bg-gray-300 h-[90%] my-auto'} orientation="vertical" flexItem />
                <div className={'w-[50%] h-full text-black px-[30px] py-[20px] flex flex-col'}>
                    <h2 className={'font-bold text-[30px] mt-[10px]'}>Sign Up</h2>
                    <p>Create your free account now. If you already have an account please <a href="#">Sign in</a></p>
                    <form action="" className={'flex-1 p-[10px] flex flex-col justify-around '}>
                        <div className={'w-full flex justify-between'}>
                            <TextField size={'small'} id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField size={'small'} id="outlined-basic" label="Last Name" variant="outlined" />
                        </div>
                        <TextField size={'small'} id="outlined-basic" label="Email" variant="outlined" />
                        <TextField size={'small'} id="outlined-basic" label="Password" variant="outlined" />
                        <TextField size={'small'} id="outlined-basic" label="Confirm Password" variant="outlined" />
                        <div className={'flex'}><Checkbox/><p>By registering, you accept our terms of use and our <a
                            href="#">privacy policy</a></p>
                        </div>
                        <Button className='bg-blue-600' variant='contained'>
                            Sign up
                        </Button>
                        <span className={'mx-auto'}>-OR-</span>
                        <div className={'flex justify-around px-[20px] gap-[5px]'}>
                            <div
                                className={'flex flex-1 gap-[5px] py-[5px] px-[10px] rounded-2xl border-solid border-gray-300 border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer'}>
                                <Image className={' w-[30px] h-[30px]'} width={100} height={50}
                                       src={'/images/google.svg'}
                                       alt={'About us'}></Image>
                                <span>Google</span>
                            </div>
                            <div
                                className={'flex flex-1 gap-[5px] py-[5px] px-[10px] rounded-2xl border-solid border-gray-300 border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer'}>
                                <Image className={' w-[30px] h-[30px]'} width={100} height={50}
                                       src={'/images/facebook.svg'}
                                       alt={'About us'}></Image>
                                <span>Facebook</span>
                            </div>
                            <div
                                className={'flex flex-1 gap-[5px] py-[5px] px-[10px] rounded-2xl border-solid border-gray-300 border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-blue-600 hover:text-blue-600 cursor-pointer'}>
                                <Image className={' w-[30px] h-[30px]'} width={100} height={50}
                                       src={'/images/apple.svg'}
                                       alt={'About us'}></Image>
                                <span>Apple</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default page;