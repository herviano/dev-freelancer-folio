import { Stack, styled, Typography } from '@mui/material';
import { borderRadius, height } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import SectionStyle from '../components/SectionStyle';
import { USER_PAGES } from '../routes/path';

export const HomeSectionContainer = styled(SectionStyle)(()=>({
    marginTop:"60px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // height:"90vh",
    minHeight:"100vh",
    // backgroundColor:"blue"
}))
const HomeButton = styled(Link)(()=>({
    width:"100px",
    height:"25px",
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

function HomeSection() {
    return (
        <HomeSectionContainer>
            <Stack direction={"row"} spacing={1}>
            {/* <Typography sx={{color:"#CDC099", fontSize:"35px", fontWeight:700}}>DAVID</Typography><Typography sx={{fontSize:"35px", fontWeight:700}}>PARKER</Typography> */}
            <Typography sx={{fontSize:"35px", fontWeight:700}}>MORNING</Typography>
            <Typography sx={{color:"#CF9D4E", fontSize:"35px", fontWeight:700}}>STAR</Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
            <Typography sx={{color:"#CDC099", fontSize:"15px", fontWeight:700}}>Creative</Typography><Typography sx={{fontSize:"15px", fontWeight:700}}>Freelancer</Typography>
            </Stack>
            <HomeButton to={USER_PAGES.contact}>
                <Typography sx={{fontSize:"10px", fontWeight:700}} >GET IN TOUCH</Typography>
            </HomeButton>
            {/* <Carousel items={["images/one.jpg" , "images/two.jpg", "images/three.jpg", "images/four.jpg", "images/two.jpg", "images/one.jpg" ,]} itemsToShow={2} itemsToScroll={1} interval={1000}/> */}
            {/* <Carousel items={["images/news2.jpg" , "images/news3.jpg" , "images/news4.jpg" , "images/news5.jpg" , "images/news6.jpg" , "images/news1.jpg" ,]} itemsToShow={3} itemsToScroll={1} interval={5} /> */}
        </HomeSectionContainer>
    );
}

export default HomeSection;