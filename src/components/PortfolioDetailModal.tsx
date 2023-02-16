import { Button, Dialog, DialogContent, styled } from '@mui/material';
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

function PortfolioDetailModal({stateInit, image, stateClose}:Props) {
    return (
        <ModalContainer>
            <Dialog open={stateInit}>
                <Button onClick={stateClose}>X</Button>
                <DialogContent>
                    <ImageComponent image={image} sx={{width:"100%", height:"50%"}}/>
                </DialogContent>
            </Dialog>
        </ModalContainer>
    );
}

export default PortfolioDetailModal;