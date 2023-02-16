import { MenuBook } from '@mui/icons-material';
import { Box, Button, Drawer, List, styled } from '@mui/material';
import React, { useState } from 'react';
import { UserMenuItems } from '../../common/MenuConfigs';
import MyDrawerItem from './MyDrawerItem';

const DrawerStyle = styled(Drawer)((theme)=>({
    width:"500px",
    flexShrink: 0, 
    
    [`& .MuiDrawer-paper`]: 
      { width: 200, 
        boxSizing: "border-box",
        position:"absolute",
        // marginRight:"10px",
      },
    //   [theme.breakpoints.down("lg")]: {
    //     // width:"98%",
    //     // height:"98%"
    // },  
}));
interface Props {
    opening:boolean,
    closing: Function,
}
function MyDrawer({opening, closing}: Props) {
    const [openDrawer, steOpenDrawer] = useState()
    return (
        <DrawerStyle open= {opening} onClose={() => closing()}>
            <Button onClick={()=> closing()}>X</Button>
            <Box>
                <List>
                    {UserMenuItems.map((menu,index) => (
                        <MyDrawerItem key={index} title={menu.title} path={menu.path} iconPath={''}/>
                    ))}
                </List>
            </Box>
        </DrawerStyle>
    );
}

export default MyDrawer;