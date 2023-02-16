import { styled } from '@mui/material';
import React from 'react';
import PortFoloiCard from './PortFoloiCard';
import SectionStyle from './SectionStyle';
import SwiperComponent from './SwiperComponent';



const PortfolioSectionPageContainer = styled(SectionStyle)(()=>({
    width:"calc(100% - 30px)",
    marginTop:"60px",
    display:"flex",
    // flexDirection:"row",
    // backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
    // height:"600px",
    minHeight:"100vh",
}))
const CarouselContent = styled("div")(()=>({
    height:"65%",
    maxWidth:"75%",
    // backgroundColor:"blue",
}))

function PortFolioSection() {
    return (
        <PortfolioSectionPageContainer>
            <CarouselContent>
                <SwiperComponent/>
            </CarouselContent>
        </PortfolioSectionPageContainer>
        //     {/* <PortFoloiCard/> */}
    );
}

export default PortFolioSection;