'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {TabPanel} from "@mui/base";
import BriefCard from "@/components/MIUI/brief-card";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Fadein from "@/components/fadein";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}

        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className={'w-full h-fit'} sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs variant={'fullWidth'} value={value} onChange={handleChange} aria-label="">
                    <Tab icon={<TabLabel value={value} index={0} count={6} label={'All'}/>} />
                    <Tab icon={<TabLabel value={value} index={1} count={1} label={'Your Templates'}/>} />
                    <Tab icon={<TabLabel value={value} index={2} count={3} label={'Your Papers'}/>} />
                    <Tab icon={<TabLabel value={value} index={3} count={2} label={'Saved Templates'}/>} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <AllItems/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <YourTemplates/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <YourPapers/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <SavedTemplates/>
            </CustomTabPanel>
        </Box>
    );
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function TabPanelItem() {
    return ( <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <BriefCard/>
            </Grid>
            <Grid item xs={4}>
                <BriefCard/>
            </Grid>
            <Grid item xs={4}>
                <BriefCard/>
            </Grid>
            <Grid item xs={4}>
               <Fadein identifier={'id1'} direction={'rtl'}>
                   <BriefCard/>
               </Fadein>
            </Grid>
            <Grid item xs={4}>
                <BriefCard/>
            </Grid>
        </Grid>
    </Box>);
}

function TabLabel({count, label, index, value}: {count: number; label: string; index:number;  value:number}) {
    return (
        <div className={'flex gap-2 justify-center'}><h4 className={`border-solid border-gray-300 border-2 px-[5px] rounded-md ${index===value? 'bg-blue-600 text-white': ''}`}>{count}</h4><span className={'flex items-center'}>{label}</span></div>
    )
}

function AllItems() {
    return (<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Fadein identifier={'id1'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>
            <Grid item xs={4}>
                <Fadein identifier={'id2'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>
            <Grid item xs={4}>
                <Fadein identifier={'id3'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>
            <Grid item xs={4}>
                <Fadein identifier={'id4'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>
            <Grid item xs={4}>
                <Fadein identifier={'id5'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>
            <Grid item xs={4}>
                <Fadein identifier={'id6'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>
        </Grid>
    </Box>);
}

function YourTemplates() {
    return (<Box sx={{ flexGrow: 1 }}>
        <Grid item xs={4}>
            <Fadein identifier={'id1'} direction={'rtl'} autoPlay={true}>
                <BriefCard/>
            </Fadein>
        </Grid>
    </Box>);
}

function YourPapers() {
    return (<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Fadein identifier={'id1'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>
            <Grid item xs={4}>
                <Fadein identifier={'id1'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>
            <Grid item xs={4}>
                <Fadein identifier={'id1'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>

        </Grid>
    </Box>);
}

function SavedTemplates() {
    return (<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Fadein identifier={'id1'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>
            <Grid item xs={4}>
                <Fadein identifier={'id1'} direction={'rtl'} autoPlay={true}>
                    <BriefCard/>
                </Fadein>
            </Grid>

        </Grid>
    </Box>);
}