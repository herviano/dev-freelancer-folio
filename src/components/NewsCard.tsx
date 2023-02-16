import { Card, CardActionArea, CardActions, CardContent, CardMedia, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_PAGES } from '../routes/path';
import NewDetailsmodal from './NewDetailsmodal';
const NewsCardStyle = styled(Card)(()=>({
    width:"250px",
    height:"275px",
    backgroundColor:"#000000",
    borderRadius:"12px",
    border:"1px solid",
    borderColor:"#BD9049",
    margin:"22px"
}))

function NewsCard() {

    const [dialogOpen, setDialogOpen] = useState(false);
    // const [succesState, setSuccesState] = useState(true);

    const handleOpenDialog = () => {
      setDialogOpen(true);
    };
    const handleClick = () => {
    //   !setDialogOpen();
    };
    const handleCloseDialog = () => {
      setDialogOpen(false);
    }
    return (
        <div>
            <NewsCardStyle onClick={handleOpenDialog}>
            <CardActionArea>
                <CardMedia component={"img"} image="images/newsss.jpg"/>
                <CardContent>
                    <Typography variant="body1" sx={{color:"#BD9049", fontWeight:"bold"}}>Sentry For Javascript monitors release</Typography>
                    <Typography variant="body2" sx={{color:"#CDC099", margin:"5px"}}>Technology</Typography>
                </CardContent>
            </CardActionArea>
        </NewsCardStyle>
            {dialogOpen && (<NewDetailsmodal stateInit={dialogOpen} stateClose={handleCloseDialog}  image="images/newsss.jpg"/>)}
        </div>
    );
}

export default NewsCard;