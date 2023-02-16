import { CloseOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, Snackbar, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactFormModel } from '../models/ContactFormModel';
import { sendMailFunction } from '../services/cloud-functions';

const ContactFormContainer = styled ("div")(()=>({
    width:"100%",
    // height:"calc(100% - 20px)",
    height:"300px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    background:"#F6EDDF",
    // backgroundColor:"#F6EDDF",
    // filter:"blur 10px",
    opacity:"90%",
    // backdropFilter:"blur(5px)",
    // border:"1px solid",
    // borderColor:"#CDC099",
    borderRadius:"5px",
    alignItems:"center",
    marginTop:"20px"
}))

const HomeButton = styled(Link)(()=>({
    width:"125px",
    height:"32px",
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

const TextFieldPersonnaliseStyle= styled(TextField)({
    // '& input:valid + fieldset': {
    //     borderColor: 'green',
    //     borderWidth: 1,
    //   },
    //   '& input:invalid + fieldset': {
    //     borderColor: 'red',
    //     borderWidth: 1,
    //   },
    //   '& input:valid:focus + fieldset': {
    //     // borderLeftWidth: 6,
    //     padding: '4px !important', // override inline-style
    //   },
    '& label.Mui-focused': {
        color: '#CDC099',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#CDC099',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#CDC099',
      },
      '&:hover MuiInput-underline': {
        borderBottomColor: '#CDC099',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#A8A8A8',
        },
        '&:hover fieldset': {
          borderColor: '#CDC099',
        },
        '&.Mui-focused fieldset': {
          borderColor: "#CDC099",
      },
    } 
})


function ContactForm() {
  
  const [formData, setFormData] = useState<ContactFormModel>(
    {name:"", email:"", message:""}
  )
  
  const handleEmpty = (event: React.FormEvent) => {
    event.preventDefault();
    sendMailFunction({name: formData?.name, email:formData?.email, message:formData?.message}).then(handleOpenBar);
    setFormData({name:"", email:"", message:"" });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value} as ContactFormModel));
    console.log(formData);
   };

   const [openBar, setOpenBar] = useState(false);

        const handleOpenBar = () => {
            setOpenBar(true);
          };
    
          const handleCloseBar = (event: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') {
              return;
            }
        
            setOpenBar(false);
          };

          const action = (
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleCloseBar}>
                OK
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseBar}
              >
                <CloseOutlined fontSize="small" />
              </IconButton>
            </React.Fragment>
          );
    return (
        <ContactFormContainer>
            <Box component={"form"} >
                <div><TextFieldPersonnaliseStyle name="name" variant="standard" label="NOM" value={formData?.name} onChange={handleChange} /></div>
                <div><TextFieldPersonnaliseStyle variant="standard" label="Email" value={formData?.email} name="email" onChange={handleChange}/></div> 
                <div><TextFieldPersonnaliseStyle variant="standard" multiline rows={3} fullWidth label="Message" value={formData?.message} name="message" onChange={handleChange}/></div>
                {/* <div><TextField/><TextField/></div> */}
            </Box>
            <HomeButton to={""} onClick={handleEmpty}>
                <Typography sx={{fontSize:"10px", fontWeight:700}}>SUBMIT</Typography>
            </HomeButton>
            <Snackbar open={openBar} autoHideDuration={5000} onClose={handleCloseBar} message="Votre Message à été envoyé avec succès. vous aurez une réponse" action={action} />     
        </ContactFormContainer>
    );
}

export default ContactForm;