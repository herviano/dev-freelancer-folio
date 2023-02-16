import { Box } from '@mui/material';
import React from 'react';
import { UserMenuItems } from '../../common/MenuConfigs';
import HeaderMenuItem from './HeaderMenuItem';

function Menu() {
    return (
        <Box sx={{display:"flex", marginLeft:"20%"}}>
            {
                UserMenuItems.map((oneMenu, index) => <HeaderMenuItem key={index} title={oneMenu.title} path={oneMenu.path}/>)
            }
        </Box>
    );
}

export default Menu;