import { styled } from '@mui/material';
import React from 'react';
import BlogCarousel from '../components/BlogCarousel';
import NewsCard from '../components/NewsCard';
import PortFolioComponent from '../components/PortFolioComponent';
import SectionStyle from '../components/SectionStyle';

const NewsSectionPageContainer = styled(SectionStyle)(()=>({
    // width:"calc(100% - 30px)",
    marginTop:"60px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    // height:"600px",
    minHeight:"100vh",
}))

function NewsSectionPage() {
    return (
        <NewsSectionPageContainer>
            <PortFolioComponent/>
        </NewsSectionPageContainer>
    );
}

export default NewsSectionPage;