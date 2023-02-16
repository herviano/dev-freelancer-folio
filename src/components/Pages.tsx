import { styled, SxProps } from '@mui/material';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import image from "../../public/images/bg.jpg";
import ImageComponent from './ImageComponent';

const PageBaseStyle = styled("div")(() => ({
    // maxWidth: "2600px",
    width: "100%",
    margin: "auto",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // height:"800px",
    // maxHeight:"900px",
    // backgroundImage: `url(images/bg.jpg)`,
    // backgroundRepeat:"no-repeat",
    backgroundSize:"100% 100%",
    objectFit:"contain",
    
}));

interface Props {
    children: React.ReactNode,
    title: string,
    sx?: SxProps
}

function Pages({children, title = "", sx = {}}: Props) {
    const finalTitle = title === "" ? "Dev-Folio" : title + " | Dev-Folio";
    return (
        <Fragment>
            <Helmet>
                <title>{finalTitle}</title>
            </Helmet>
            <PageBaseStyle>
                {children}
            </PageBaseStyle>
        </Fragment>
    );
}

export default Pages;