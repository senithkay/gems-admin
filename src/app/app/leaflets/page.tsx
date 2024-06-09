'use client';
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as React from "react";
import {styled} from "@mui/material/styles";
import Image from "next/image";

const Page = ()=>{
    const [fileP, setFileP] = useState(null);
    const [previewUrlP, setPreviewUrlP] = useState<any>(null);
    const [filenameP, setFilenameP] = useState<string>('');

    const [fileL, setFileL] = useState(null);
    const [previewUrlL, setPreviewUrlL] = useState<any>(null);
    const [filenameL, setFilenameL] = useState<string>('');
    const [changeType, setChangeType] = useState<string>('');

    const [reset, setReset] = useState<string>('');

    useEffect(() => {
        if (reset === 'p'){
            alert('p')
            setReset('')
            return
        }
        else if (reset === 'l'){
            alert('l')
            setReset('')
            return
        }
        if (fileP && changeType === 'p') {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrlP(reader.result);
            }

            reader.readAsDataURL(fileP);
        }
        else if (fileL && changeType === 'l') {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrlL(reader.result);
            }

            reader.readAsDataURL(fileL);
        }
        
        else return;
        
    }, [changeType, fileL, fileP, reset]);


    const handleFileChangeP = (event:any) => {
        setChangeType('p')
        setFilenameP(event.target.files[0].name)
        setFileP(event.target.files[0])
    };

    const handleFileChangeL = (event:any) => {
        setChangeType('l')
        setFilenameL(event.target.files[0].name)
        setFileL(event.target.files[0])
    };

    return (
        <div className={'text-black flex flex-col gap-[20px]'}>
            <div>
                <Typography variant="h5" gutterBottom>
                    This section lets you to upload leaflets
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Add both landscape and portrait versions of the leaflets. This will be helpful for the main website
                    to
                    support multiple platforms like desktop browser and mobile browsers
                </Typography>
            </div>

            <div className={'flex flex-col gap-[10px] border border-gray-500 p-[20px] rounded-3xl'}>
                <Typography variant="body1" gutterBottom>
                    Upload a portrait version of the leaflet below
                </Typography>
                {previewUrlP ? (
                    <div
                        className={' overflow-hidden w-full lg:w-[80%] h-[400px] flex justify-center items-center border border-gray-500 rounded-3xl gap-[10px]'}>
                        <Image className={' w-full  h-full'}
                               src={previewUrlP}
                               alt={'Uploaded image'}
                               width={100}
                               height={50}
                        ></Image>
                    </div>

                ) : <NoImage/>}
                <div className={'flex gap-[10px]'}>
                    <Button
                        className={'w-fit'}
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon/>}
                    >
                        {filenameP === '' ? 'Upload portrait Image' : filenameP}
                        <input className={'hidden'} type="file" onChange={handleFileChangeP}/>
                    </Button>
                    <Button
                        onClick={() => {
                            setReset('p')
                            setFileP(null)
                            setPreviewUrlP(null)
                            setFilenameP('')
                            setChangeType('p')
                        }}
                        className={'border-red-500 hover:border-red-500 hover:bg-gray-100 text-red-500 w-fit'}
                        variant="outlined">Reset</Button>
                </div>
            </div>

            <div className={'flex flex-col gap-[10px] border border-gray-500 p-[20px] rounded-3xl'}>
                <Typography variant="body1" gutterBottom>
                    Upload a landscape version of the leaflet below
                </Typography>
                {previewUrlL ? (
                    <div
                        className={' overflow-hidden w-full lg:w-[80%] h-[400px] flex justify-center items-center border border-gray-500 rounded-3xl gap-[10px]'}>
                        <Image className={' w-full  h-full'}
                               src={previewUrlL}
                               alt={'Uploaded image'}
                               width={100}
                               height={50}
                        ></Image>
                    </div>

                ) : <NoImage/>}
                <div className={'flex gap-[10px]'}>
                    <Button
                        className={'w-fit'}
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon/>}
                    >
                        {filenameL === '' ? 'Upload landscape Image' : filenameL}
                        <input className={'hidden'} type="file" onChange={handleFileChangeL}/>
                    </Button>
                    <Button
                        onClick={() => {
                            setReset('l')
                            setFileL(null)
                            setPreviewUrlL(null)
                            setFilenameL('')
                            setChangeType('l')
                        }}
                        className={'border-red-500 hover:border-red-500 hover:bg-gray-100 text-red-500 w-fit'}
                        variant="outlined">Reset</Button>
                </div>
            </div>
        </div>
    )
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const NoImage = () => {
    return (
        <div
            className={' w-full lg:w-[80%] h-[400px] flex justify-center items-center border border-gray-500 rounded-3xl gap-[10px]'}>
            <Image className={'hover:scale-105 transition-all duration-150 w-[40%]  mt-[50px]'} width={100} height={50}
                   src={'/images/joinus.svg'}
                   alt={'About us'}></Image>
            <Typography variant="h4" gutterBottom>
                Please Select an Image
            </Typography>
        </div>
    )
}

export default Page