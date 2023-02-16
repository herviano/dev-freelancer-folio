import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react';

interface Props {
    libele: string,
    pourcentage: string,
    val:number
}

function ProgressComponent({libele, pourcentage, val}: Props) {
    return (
        <Stack direction={"column"} spacing={2} sx={{margin:"12px"}}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress size={100} thickness={8} value={val} variant={'determinate'} sx={{width:"100px", color:"#CF9D4E"}}/>
            
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography>{pourcentage}</Typography>
      </Box>
        </Box>
        <Typography textAlign={"center"}>{libele}</Typography>
        </Stack>
    );
}

export default ProgressComponent;