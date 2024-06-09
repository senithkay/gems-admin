import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Typography from "@mui/material/Typography";
import {Gauge, PieChart} from "@mui/x-charts";

export default function BasicLineChart() {
    return (
       <div className={'text-black'}>
           <Typography variant="h4" gutterBottom>
               User traffic throughout the month
           </Typography>
           <LineChart
               xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
               series={[
                   {
                       data: [2, 5.5, 2, 8.5, 1.5, 5],

                   },
               ]}

               height={500}
               grid={{ vertical: true, horizontal: true }}
           />
           <Typography variant="h4" gutterBottom>
               University page visits through MLT
           </Typography>
           <LineChart
               xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
               series={[
                   {
                       data: [2, 5.5, 2, 8.5, 1.5, 5],

                   },
               ]}

               height={500}
               grid={{ vertical: true, horizontal: true }}
           />
           <div className={'flex'}>
               <div className={'w-[50%]'}>
                   <Typography variant="h4" gutterBottom>
                       User traffic throughout the month
                   </Typography>
                   <PieChart
                       series={[
                           {
                               data: [
                                   {id: 0, value: 10, label: 'series A'},
                                   {id: 1, value: 15, label: 'series B'},
                                   {id: 2, value: 20, label: 'series C'},
                               ],
                           },
                       ]}
                       height={500}
                   />
               </div>
               <div>
                   <Typography variant="h4" gutterBottom>
                       40% Left for the target traffic
                   </Typography>
                   <Gauge height={500} value={60} />
               </div>
           </div>
       </div>
    );
}