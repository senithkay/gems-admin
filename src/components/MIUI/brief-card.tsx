import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {Draw, Print, Visibility} from "@mui/icons-material";

export default function BriefCard() {
    const theme = useTheme();

    return (
        <Card className={'bg-[#424242] w-fit text-white rounded-2xl hover:scale-[1.02] cursor-pointer ease-in-out duration-500 transition-all hover:bg-black'} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Chemistry 2019
                    </Typography>
                    <Typography variant="subtitle1" className={'text-white'} component="div">
                        Mac Miller
                    </Typography>
                </CardContent>
                <Box  sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton className={'text-white'} aria-label="previous">
                        {theme.direction === 'rtl' ? <Visibility /> : <Draw />}
                    </IconButton>
                    <IconButton className={'text-white'} aria-label="play/pause">
                        <Print  />
                    </IconButton>
                    <IconButton className={'text-white'} aria-label="next">
                        {theme.direction === 'rtl' ? <Draw /> : <Visibility />}
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="/images/exam_paper.jpg"
                alt="Live from space album cover"
            />
        </Card>
    );
}
