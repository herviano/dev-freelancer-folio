import { styled, Toolbar } from '@mui/material';
import React, { ReactNode } from 'react';
import { HeaderConfig } from '../../common/MenuConfigs';

const HeaderElementsContainerStyle= styled(Toolbar)(()=> ({
    position: "fixed",
    top: 0,
    display: "flex",
    padding: "0px !important",
    justifyContent: "center",
    height: HeaderConfig.MAX_HEIGHT,
    // alignItems: "center",
    // backgroundColor:"red",
    width: "100%",
}))

interface Props {
    children: ReactNode,
}

function HeaderElementsContainer({children}: Props) {
    return (
        <HeaderElementsContainerStyle>
            {children}
        </HeaderElementsContainerStyle>
    );
}

export default HeaderElementsContainer;