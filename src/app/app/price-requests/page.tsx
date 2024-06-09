'use client';
import CustomPaginationActionsTable from "@/components/MIUI/table";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CSVLink } from 'react-csv';
import {useEffect, useState} from "react";
import axiosInstance from "@/utils/axiosInstance";
import {RESPONSE_STATUS} from "@/utils/enums";

function createData(firstName : string, lastName : string, email : string,phoneNumber : string, message : string,) {
    return { firstName, lastName, email, phoneNumber, message };
}
interface Rows {
    [key: string]: any;
    name:string,
    email:string,
    phoneNumber:string,
    message:string,
    gemName:string,
    originalPrice:string,
    requestedPrice:string,
}


const Page = ()=>{
    const [rows, setRows] = useState<Rows[]>([
        {
            name:"string",
            email:"string",
            phoneNumber:"string",
            message:"string",
            gemName:"string",
            originalPrice:"string",
            requestedPrice:"string",
        }
    ])
    useEffect(() => {
        axiosInstance.get('/price-request').then((response) => {
            if (response.status === RESPONSE_STATUS.SUCCESS){
                const rows = response.data.map((item:Rows)=>{
                    return  createData(item.firstName, item.lastName, item.email, item.phoneNumber, item.message)
                })
                setRows(rows)
            }
        })
    }, []);
    const exportAsCsv = ()=>{
        const csvData:any[] = [];
        rows.forEach((row:Rows)=>{
            const values:any[] = [];
            const keys = Object.keys(row);
            keys.forEach((key)=>{
                const value = row[key]
                values.push(value)
            })
            csvData.push(values);
        })
        return csvData;
    }
    return (
        <div className={'text-black flex flex-col gap-[20px]'}>
            <Typography variant="h5" gutterBottom>
                Price requested customers
            </Typography>
            <Typography className={'text-red-600'} variant="body1" gutterBottom>
                NOTE: Please make sure you do not click accept accidentally.
            </Typography>
            <CustomPaginationActionsTable rows={rows}></CustomPaginationActionsTable>

            <CSVLink className={'w-fit ml-auto'} data={exportAsCsv()} filename="my-data.csv">
                <Button  variant="contained">Export as CSV</Button>
            </CSVLink>
        </div>
    )
}

export default Page