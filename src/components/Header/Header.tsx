import { AppBar, Button, IconButton, MenuList } from '@mui/material';
import React, { useState } from 'react';
import useResponsive from '../../hooks/useResponsive';
import Logo from '../Logo';
import MyDrawer from '../MyDrawer/MyDrawer';
import HeaderElementsContainer from './HeaderElementsContainer';
import Menu from './Menu';

function Header() {
    
    const isMobile = useResponsive("down", "lg");
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleOPenDrawer= () => {
        setOpenDrawer(!openDrawer)
    }
    return (
        <AppBar color="transparent" elevation={0}>
            <HeaderElementsContainer>
                <Logo/>
                {!isMobile && <Menu/>}
                {isMobile && <Button  onClick={handleOPenDrawer} sx={{color:"#b68b46", }}>Menu</Button>}
                {isMobile && <MyDrawer opening={openDrawer} closing={handleOPenDrawer}/>}
            </HeaderElementsContainer>
        </AppBar>
    );
}

export default Header;

