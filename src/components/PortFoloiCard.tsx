import { Card, CardActionArea, CardContent, CardMedia, styled } from '@mui/material';
import React, { useState } from 'react';
import PortfolioDetailModal from './PortfolioDetailModal';

const PortFolioCard = styled(Card)(()=>({
    width:"250px",
    height:"275px",
    backgroundColor:"#000000",
    borderRadius:"12px",
    border:"1px solid",
    borderColor:"#BD9049",
    margin:"12px"
}))

function PortFoloiCard() {

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
            <PortFolioCard onClick={handleOpenDialog}>
                {/* <CardMedia component={"image"} image="images/news5.jpg"/> */}
                <CardActionArea>
                    <CardContent>
                    <CardMedia component={"img"} image="images/newss.jpg" height={475}/>
                    </CardContent>
                </CardActionArea>
            </PortFolioCard>
            <PortfolioDetailModal stateInit={dialogOpen} stateClose={handleCloseDialog}  image="images/newss.jpg"/>
        </div>
    );
}

export default PortFoloiCard;