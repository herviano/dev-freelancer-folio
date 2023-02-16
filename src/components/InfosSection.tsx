import { PlaceRounded } from '@mui/icons-material';
import { Divider, Stack, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SizesText from './SizesText';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const InfosSectionContainer = styled("div")(()=>({
width:"100%",
height:"calc(100% - 20px)",
display:"flex",
flexDirection:"column",
justifyContent:"center",
// backgroundColor:"beige",
// border:"1px solid",
// borderColor:"#CDC099",
borderRadius:"5px",
alignItems:"flex-start",
marginTop:"20px"
}))
const ContactLinkStyle=styled(Link)(({theme})=>({
    width:"75%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    // alignItems:"center",
    height:"45px",
    textDecoration:"none",
    backgroundColor:"black",
    color:"#CDC099",
    margin:"12px",
    borderBottom:"1px solid",
    borderColor:"#CDC099",
    borderRadius:"10px",
    marginLeft:"",
    [theme.breakpoints.down("lg")] : {
        width:"100%"
    }
  }))
const InfoStack=styled(Stack)(()=>({

  }))

function InfosSection() {
    return (
        <InfosSectionContainer>
            <ContactLinkStyle to={''}>
            <InfoStack direction={"row"}>
                <PlaceRounded sx={{ marginLeft:"15px"}}/>
                <SizesText text={" 15 Avenue Du Bien"} sx={{marginLeft:"15px",color:"#CDC099", fontSize:"18px", fontWeight:500}}/>
            </InfoStack>
            </ContactLinkStyle>
            <ContactLinkStyle to={''}>
            <InfoStack direction={"row"}>
                <CallIcon sx={{ marginLeft:"15px"}}/>
                <SizesText text={"+562454236"} sx={{marginLeft:"15px",color:"#CDC099", fontSize:"18px", fontWeight:500}}/>
            </InfoStack>
            </ContactLinkStyle>
            <ContactLinkStyle to={''}>
            <InfoStack direction={"row"}>
                <MailOutlineIcon sx={{ marginLeft:"15px"}}/>
                <SizesText text={"herve@gmail.com"} sx={{marginLeft:"15px",color:"#CDC099", fontSize:"18px", fontWeight:500}}/>
            </InfoStack>
            </ContactLinkStyle>
            <ContactLinkStyle to={''}>
            <InfoStack direction={"row"}>
                <LinkedInIcon sx={{ marginLeft:"15px"}}/>
                <SizesText text={"MoringStar"} sx={{marginLeft:"15px",color:"#CDC099", fontSize:"18px", fontWeight:500}}/>
            </InfoStack>
            </ContactLinkStyle>
        </InfosSectionContainer>
    );
} 

export default InfosSection;