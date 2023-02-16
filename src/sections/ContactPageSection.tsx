import { styled, Typography } from '@mui/material';
import React from 'react';
import ContactForm from '../components/ContactForm';
import InfosSection from '../components/InfosSection';
import SectionCenter from '../components/SectionCenter';
import SectionStyle from '../components/SectionStyle';

export const ContactSectionContainer = styled(SectionStyle)(({theme})=>({
    marginTop:"60px",
    display:"flex",
    // flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"100vh",
    // backgroundColor:"blue",
    [theme.breakpoints.down("lg")]:{
        
    }
}))


function ContactPageSection() {
    return (
        <ContactSectionContainer>
            <SectionCenter titleBlack={"GET"} titleGold={"InTOUCH"} childrenLeft={<InfosSection/>} childrenRigth={<ContactForm/>} />
        </ContactSectionContainer>
    );
}

export default ContactPageSection;