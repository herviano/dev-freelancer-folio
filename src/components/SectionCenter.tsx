import { Divider, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const SectionCenterContainer = styled("div")(({theme})=> ({
    width:"65%",
    height:"75%",
    // backgroundColor:"yellow",   
    display:"flex",
    flexDirection:"column",
    [theme.breakpoints.down("lg")]:{
        
    }
}))
const SectionsContainer = styled("div")(({theme})=> ({
    width:"100%",
    height:"100%",
    // backgroundColor:"red",   
    display:"flex",
    flexDirection:"row",
    [theme.breakpoints.down("lg")]:{
        display:"flex",
        flexDirection:"column",
    }
    
}))

export const SectionCenterRight = styled("div")(({theme})=>({
    width:"50%",
    height:"100%",
    // backgroundColor:"pink",
    [theme.breakpoints.down("lg")]:{
        width:"100%",
    }
}))
export const SectionCenterLeft = styled("div")(({theme})=>({
    width:"50%",
    height:"100%",
    display:"flex",
    // flexDirection:"column",
    justifyContent:"space-around",
    // alignItems:"center",
    // backgroundColor:"green",
    [theme.breakpoints.down("lg")]:{
        width:"100%",
    }
}))

interface Props {
    titleBlack: string,
    titleGold: string,
    childrenRigth?: React.ReactNode,
    childrenLeft?: React.ReactNode,
}

function SectionCenter({titleBlack, titleGold, childrenRigth,childrenLeft}: Props) {
    return (
        <SectionCenterContainer>
            <Stack direction={"row"} spacing={1}>
                <Typography sx={{color:"black",fontSize:"20px", fontWeight:"bold", }}>{titleBlack}</Typography>
                <Typography sx={{color:"#CF9D4E", fontSize:"20px", fontWeight:"bold"}}>{titleGold}</Typography>
            </Stack>
            <Divider color={"#CF9D4E"} sx={{color:"#CF9D4E"}}/>
            <SectionsContainer>
            <SectionCenterLeft>
                {childrenLeft}
            </SectionCenterLeft>
            <SectionCenterRight>
                {childrenRigth}
            </SectionCenterRight>
            </SectionsContainer>
        </SectionCenterContainer>
    );
}

export default SectionCenter;