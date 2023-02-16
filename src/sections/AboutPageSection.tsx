import { Divider, Stack, styled, Typography } from '@mui/material';
import { display } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DetailsModal from '../components/DetailsModal';
import ImageComponent from '../components/ImageComponent';
import SectionStyle from '../components/SectionStyle';

export const AboutSectionContainer = styled(SectionStyle)(({theme})=>({
    marginTop:"60px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"100vh",
    // overflowY: "scroll",
    // backgroundColor:"blue",
    [theme.breakpoints.down("lg")]: {
        // marginTop:"120px",
        flexDirection:"column",
        // backgroundColor:"blue",
    }
}))
export const AboutSectionLeft = styled("div")(({theme})=>({
    width:"50%", 
    // backgroundColor:"blue",
    height:"500px",
    display:"flex",
    margin:"15px",
    justifyContent:"flex-end",
    alignItems:"center",
    [theme.breakpoints.down("lg")]: {
        width:"75%",
        // backgroundColor:"red",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
}))
export const AboutSectionRight = styled("div")(({theme})=>({
    width:"50%", 
    // backgroundColor:"red",
    display:"flex",
    flexDirection:"column",
    [theme.breakpoints.down("lg")]: {
        width:"75%",
        // backgroundColor:"green", 
        justifyContent:"center",
        alignItems:"center",
    }

}))

const HomeButton = styled(Link)(()=>({
    width:"125px",
    height:"32px",
    backgroundColor:"#CF9D4E",
    borderBottomLeftRadius:"15px",
    borderTopLeftRadius:"15px",
    borderBottomRightRadius:"15px",
    borderTopRightRadius:"15px",
    display:"flex", 
    flexDirection:"column", 
    justifyContent:"center", 
    alignItems:"center",
    marginTop:"10px",
    textDecoration:"none",
    color:"black"
    // borderRadius:"40%",
    // backgroundColor:"blue"
}))
export const AboutTextContainer = styled("div")(({theme})=>({
    width:"50%", 
    // backgroundColor:"red",
    display:"flex",
    flexDirection:"column",
    [theme.breakpoints.down("lg")]: {
        width:"95%",
        // backgroundColor:"green",
        justifyContent:"center",
         
    }

}))
export const AboutText = styled(Typography)(({theme})=>({
    fontSize:"1.2em"
}))
export const AboutImage = styled("img")(({theme})=>({
    height:"85%", 
    width:"50%", 
    borderRadius:"10px", 
    objectFit:"cover",
    [theme.breakpoints.down("lg")]: {
        height:"90%", 
        width:"80%", 
    },
    [theme.breakpoints.down("sm")]: {
        height:"70%", 
        width:"75%", 
    },
    [theme.breakpoints.up("xl")]: {
        height:"150%", 
        // width:"75%", 
    }
}))

function AboutPageSection() {
const [dialogOpen, setDialogOpen] = useState(false);
const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  }

    return (
        <AboutSectionContainer>
            <AboutSectionLeft>
                {/* <ImageComponent image={"images/hommePro.jpg"} sx={{height:"25%", width:"25%", borderRadius:"10px", objectFit:"cover"}} /> */}
                <AboutImage src={"images/hommePro.jpg"} sx={{}} />
            </AboutSectionLeft>
            <AboutSectionRight>
                <Stack direction={"row"} spacing={1}>
                    <Typography sx={{fontSize:"20px", fontWeight:700}}>MORNING</Typography>
                    <Typography sx={{color:"#CF9D4E", fontSize:"20px", fontWeight:700}}>STAR</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                    <Typography sx={{color:"#CDC099", fontSize:"12px", fontWeight:700}}>Creative</Typography><Typography sx={{fontSize:"12px", fontWeight:700}}>Freelancer</Typography>
                </Stack>
                {/* <Divider color={"#CDC099"} sx={{width:"25%"}}/> */}
                <AboutTextContainer>
                    <Divider color={"#CDC099"} sx={{marginTop:"10px"}}/>
                    <AboutText sx={{color:"#CDC099"}}>My name is David Parker. I am a graphic designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge.</AboutText>
                </AboutTextContainer>
            <HomeButton to={''} onClick={handleOpenDialog}>
                <Typography sx={{fontSize:"10px", fontWeight:700}} >Learn More</Typography>
            </HomeButton>
            </AboutSectionRight>
            <DetailsModal stateInit={dialogOpen} stateClose={handleCloseDialog}/>
        </AboutSectionContainer>
    );
}

export default AboutPageSection;