'use client';
import Typography from "@mui/material/Typography";
import * as React from "react";
import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {string} from "prop-types";
import Button from "@mui/material/Button";
import axiosInstance from "@/utils/axiosInstance";
import {NOTIFICATION_TYPES, RESPONSE_STATUS} from "@/utils/enums";
import store from "@/redux/store";
import {showHide} from "@/redux/notification";

interface IContents {
    FEO: {
        title: string;
        content:string,
    },
    MLT : {
        title: string;
        content:string,
    },
    WVA : {
        title: string;
        content:string,
    }
}

const Page = ()=>{
    const [content, setContent] = useState<IContents>({
        FEO: {
            title: '',
            content:'',
        },
        MLT : {
            title: '',
            content:'',
        },
        WVA : {
            title: '',
            content:'',
        }
    });
    useEffect(() => {
        axiosInstance.get('/section')
            .then((response)=>{
                if(response.status === RESPONSE_STATUS.SUCCESS){
                    setContent(response.data)
                }
            })
    }, []);

    const handleSubmit = ()=>{
        axiosInstance.post('/section', content)
            .then((response)=>{
                if (response.status === RESPONSE_STATUS.SUCCESS){
                    store.dispatch(showHide({
                        type:NOTIFICATION_TYPES.SUCCESS,
                        message:'successfully updated section content',
                        show:true
                    }))
                }
            })
    }

    return (
        <div className={'text-black flex flex-col gap-[20px]'}>
            <div>
                <Typography variant="h5" gutterBottom>
                    This section lets you to edit the home page of the MLT website
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Add both landscape and portrait versions of the leaflets. This will be helpful for the main website
                    to
                    support multiple platforms like desktop browser and mobile browsers
                </Typography>
            </div>

            <div className={'flex flex-col gap-[10px] border border-gray-500 p-[20px] rounded-3xl'}>
                <Typography variant="body1" gutterBottom>
                    Section: {content.FEO.title}
                </Typography>
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="title"
                    label="Title"
                    multiline
                    maxRows={4}
                    value={content.FEO.title}
                    onChange={(event)=>{
                        setContent({...content, FEO: {...content.FEO, title:event.target.value}});
                    }}
                />
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="description"
                    label="Description"
                    multiline
                    value={content.FEO.content}
                    maxRows={4}
                    onChange={(event)=>{
                        setContent({...content, FEO: {...content.FEO, content:event.target.value}});
                    }}
                />

            </div>

            <div className={'flex flex-col gap-[10px] border border-gray-500 p-[20px] rounded-3xl'}>
                <Typography variant="body1" gutterBottom>
                    Section: {content.MLT.title}
                </Typography>
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="title"
                    label="Title"
                    multiline
                    maxRows={4}
                    value={content.MLT.title}
                    onChange={(event)=>{
                        setContent({...content, MLT: {...content.MLT, title:event.target.value}});
                    }}
                />
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="description"
                    label="Description"
                    multiline
                    value={content.MLT.content}
                    maxRows={4}
                    onChange={(event)=>{
                        setContent({...content, MLT: {...content.MLT, content:event.target.value}});
                    }}
                />

            </div>

            <div className={'flex flex-col gap-[10px] border border-gray-500 p-[20px] rounded-3xl'}>
                <Typography variant="body1" gutterBottom>
                    Section: {content.WVA.title}
                </Typography>
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="title"
                    label="Title"
                    multiline
                    maxRows={4}
                    value={content.WVA.title}
                    onChange={(event)=>{
                        setContent({...content, WVA: {...content.WVA, title:event.target.value}});
                    }}
                />
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="description"
                    label="Description"
                    multiline
                    value={content.WVA.content}
                    maxRows={4}
                    onChange={(event)=>{
                        setContent({...content, WVA: {...content.WVA, content:event.target.value}});
                    }}
                />
            </div>
            <Button variant="contained" onClick={handleSubmit}>Update Contact Details</Button>
        </div>
    )
}



export default Page