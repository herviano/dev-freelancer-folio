import { Stack } from '@mui/material';
import React, { ReactNode } from 'react';
import SizesText from './SizesText';

interface Props {
    children:React.ReactNode,
    text: string,
} 

function ProInfo({children, text}: Props) {
    return (
        <Stack direction={"row"} spacing={1}>
            {children}
            <SizesText text={text}/>
        </Stack>
    );
}

export default ProInfo;