import { styled, SxProps, Typography } from '@mui/material';
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
const HeaderMenuItemContainer = styled("div")(() => ({
    marginRight: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

const HeaderMenuItemLink = styled(Link)(() => ({
    textDecoration: "none",
    color: "rgb(0,0,0)",
    "&:hover": {
        color:  "#CF9D4E"
    }
}));

interface Pops {
    title: string,
    path: string,
    onClick?: Function,
    sx?: SxProps
}

function HeaderMenuItem({title, path, onClick = () => {}, sx = {}}: Pops) {
    let resolved = useResolvedPath(path);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <HeaderMenuItemContainer onClick={() => onClick()} sx={{...sx}}>
            {/* <HeaderMenuItemLink to={path} sx={{color: match ? "#CF9D4E" : ""}}>{title}</HeaderMenuItemLink> */}
            <Typography component={HeaderMenuItemLink} to={path} style={{color: match ? "#CF9D4E" : ""}} sx={{fontWeight:"bold", fontSize:"13px"}}>{title}</Typography>
        </HeaderMenuItemContainer>
    );
}

export default HeaderMenuItem;