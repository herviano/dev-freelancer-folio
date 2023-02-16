import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Button, Chip, Dialog, DialogContent, Divider, styled } from '@mui/material';
import React from 'react';
import ImageComponent from './ImageComponent';
import ProInfo from './ProInfo';
import CircularProgress, {CircularProgressProps,} from '@mui/material/CircularProgress';
import ProgressComponent from './ProgressComponent';

const DetailsModalContainer = styled(Dialog)(({theme})=> ({

    // [theme.breakpoints.down("lg")]:
    // {
    //     width:"85%"
    // }
}))
const CloseButton = styled(Button)(()=> ({
top:0,
right:0,
}))
const DialogContentStyle = styled(DialogContent)(({theme})=> ({
    backgroundColor:"whitesmoke",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    minWidth:"500px",
    minHeight:"500px",
    [theme.breakpoints.down("lg")]:
    {
        minWidth:"450px",
    // backgroundColor:"grey",
    },
    [theme.breakpoints.down("sm")]:
    {
        minWidth:"300px",
    // backgroundColor:"grey",
    }

}))
const ContentStyle = styled("div")(()=> ({
    minWidth:"75%",
    height:"100%",
    backgroundColor:"green"

}))
const SquillContent = styled("div")(()=> ({
    display:"flex", 
    justifyContent:"space-evenly"

}))

interface Props {
    stateInit: boolean,
    stateClose: ()=>void,
    // stateClose(): Function
}

function DetailsModal({stateInit, stateClose}:Props) {
    return (
        <DetailsModalContainer open={stateInit}>
            <DialogContentStyle>
                <CloseButton onClick={stateClose}>X</CloseButton>
                {/* <ContentStyle> */}
                <ImageComponent image={"images/hommePro.jpg"} sx={{height:"95px", width:"95px", borderRadius:"50%", objectFit:"cover", border:"5px solid", borderColor:"#CF9D4E"}} />
                <Divider color="#0000" orientation="horizontal" sx={{margin:"0px", width:"65%"}}>
                    <Chip label="Adresse"/>
                </Divider>
                <ProInfo children={<Email/>} text={"99 78 48 41"}/>
                <ProInfo children={<LinkedIn/>} text={"MoringStar"}/>
                <ProInfo children={<GitHub/>} text={"MoringStar"}/>
                <Divider color="#0000" orientation="horizontal" sx={{margin:"0px", width:"65%"}}>
                    <Chip label="Competences"/>
                </Divider>
                <SquillContent>
                    <ProgressComponent libele={'TypeScipt'} pourcentage={'75%'} val={75} />
                    <ProgressComponent libele={'React Ts'} pourcentage={'90%'} val={90} />
                    <ProgressComponent libele={'Flutter'} pourcentage={'50%'} val={50} />
                </SquillContent>
                {/* </ContentStyle> */}
            </DialogContentStyle>
        </DetailsModalContainer>
    );
}

export default DetailsModal;