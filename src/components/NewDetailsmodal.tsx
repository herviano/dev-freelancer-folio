import { Button, Dialog, DialogContent, styled, Typography } from '@mui/material';
import React from 'react';
import ImageComponent from './ImageComponent';

const ModalContainer = styled("div")(()=> ({

}))

interface Props {
    // isSucces:boolean,
    stateInit: boolean,
    stateClose: ()=>void,
    image:string
}

function NewDetailsmodal({stateInit, image, stateClose}:Props) {
    return (
        <ModalContainer>
            <Dialog open={stateInit}>
                <Button onClick={stateClose}>X</Button>
                <DialogContent >
                    <ImageComponent image={image} sx={{width:"100%", height:"50%", marginBottom:"25px"}}/>
                    <Typography sx={{fontWeight:"bold", color:"#BD9049", marginBottom:"10px"}}>Technology</Typography>
                    <Typography sx={{color:"#CDC099"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet corporis ipsam sunt fugit tenetur omnis corrupti necessitatibus deserunt itaque animi nulla odit voluptas nihil dicta illum, enim impedit consectetur. Cum.</Typography>
                </DialogContent>
            </Dialog>
        </ModalContainer>
    );
}

export default NewDetailsmodal;