'use client';
import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {useEffect, useState} from "react";
import axiosInstance from "@/utils/axiosInstance";
import {NOTIFICATION_TYPES, RESPONSE_STATUS} from "@/utils/enums";
import store from "@/redux/store";
import {showHide} from "@/redux/notification";

interface Contacts {
    address : string,
    email:string,
    phoneNumber : string,
    mobileNumber : string
}

const Page = () =>{

    const [contacts, setContacts] = useState<Contacts>({
        address:'',
        email:'',
        mobileNumber:'',
        phoneNumber:''
    })

    useEffect(() => {
        axiosInstance.get('/contactDetail')
            .then((response)=>{
                if(response.status === RESPONSE_STATUS.SUCCESS){
                    setContacts(response.data)
                }
            })
    }, []);

    const handleSubmit = ()=>{
        axiosInstance.post('/contactDetail', contacts)
            .then((response)=>{
                if (response.status === RESPONSE_STATUS.SUCCESS){
                    store.dispatch(showHide({
                        type:NOTIFICATION_TYPES.SUCCESS,
                        message:'Successfully updated the contact details.',
                        show:true
                    }))
                }
            })
    }
    return (
        <div className={'text-black xl:px-[300px] md:px-[100px] flex flex-col gap-[20px]'}>
           <div className={'flex flex-col'}>
               <Typography variant="h5" gutterBottom >
                   Edit the contact details here
               </Typography>
               <Typography variant="body1" gutterBottom>
                   Add the correct contact details in the following form and submit. This will change the details provided for the students in the main MLT website
               </Typography>
           </div>
           <div className={'flex flex-col'}>
               <Typography className={'text-red-600'} variant="body1" gutterBottom>
                   Affected areas:
               </Typography>
               <List dense={true} >
                   {['Page header', 'Page footer', 'Contact us page'].map((item, index) => (
                       <ListItem key={index}>
                           <ListItemText
                               className={'text-red-600'}
                               primary={item}
                           />
                       </ListItem>
                   ))}
               </List>
           </div>
            <form action="" className="form-horizontal border border-gray-500 flex flex-col gap-[30px] p-[20px] rounded-2xl">
                <div className="flex gap-[20px]">
                    <TextField value={contacts.phoneNumber} id="telephone" label="Telephone" variant="outlined" onChange={(event)=>{
                        setContacts({...contacts, phoneNumber:event.target.value})
                    }}/>
                    <TextField value={contacts.mobileNumber}  id="mobile" label="Mobile" variant="outlined" onChange={(event)=>{
                        setContacts({...contacts, mobileNumber:event.target.value})
                    }}/>
                </div>
                <TextField value={contacts.email}  id="email" label="Email" variant="outlined" onChange={(event)=>{
                    setContacts({...contacts, email:event.target.value})
                }}/>
                <TextField
                    value={contacts.address}
                    id="address"
                    label="Address"
                    multiline
                    maxRows={4}
                    onChange={(event)=>{
                        setContacts({...contacts, address:event.target.value})
                    }}
                />
                <Button variant="contained" onClick={handleSubmit}>Update Contact Details</Button>
            </form>
        </div>
    )
}

export default Page;